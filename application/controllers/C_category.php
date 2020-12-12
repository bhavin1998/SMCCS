<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_category extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_category');
        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            redirect('C_login_user');
        }
    }

    public function index() {
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_category/index";
        $pagination["total_rows"] = $this->M_category->get_count();
        $pagination["per_page"] = 5;
        $pagination["uri_segment"] = 3;
        $pagination["full_tag_open"] = '<ul class="pagination">';
        $pagination["full_tag_close"] = '</ul>';
        $pagination["first_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["first_tag_close"] = '</li>';
        $pagination["last_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["last_tag_close"] = '</li>';
        $pagination["next_link"] = 'Next';
        $pagination["next_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["next_tag_close"] = '</li>';
        $pagination["prev_link"] = 'Previous';
        $pagination["prev_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["prev_tag_close"] = '</li>';
        $pagination["num_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["num_tag_close"] = '</li>';
        $pagination["cur_tag_open"] = '<li class="paginate_button active" id=""><a href="#" aria-controls="tblbirthenroll" data-dt-idx="0" tabindex="0">';
        $pagination["cur_tag_close"] = '</a></li>';
        $this->pagination->initialize($pagination);
        $page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
        $data["links"] = $this->pagination->create_links();
        
        $data['cat_info'] = $this->M_category->get_category(0, $pagination["per_page"], $page);
        $this->load->view('V_category', $data);
    }

    public function add_new_category($id = NULL) {
        if (empty($id)) {
            $data['cat_info'] = $this->M_category->get_category();
        } else {
            $data['cat_info'] = $this->M_category->get_category($id)[0];
        }
        $this->load->view('V_category_insert', $data);
    }

    public function iu_category() {
        $value['cmp_id'] = $this->input->post('hdcid');
        $value['cmp_type'] = $this->input->post('txttype');

        if (empty($value['cmp_type'])) {
            $value['Errcmp_type'] = "Please Enter Complaint Type Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['cmp_type'])) {
                $value['ErrZname'] = "Invalid Complaint Type Name";
            }
        }
        if (empty($value['Errcmp_type'])) {
            unset($value['Errcmp_type']);
            if (!empty($value['cmp_id'])) {
                $data['insert_info'] = $this->M_category->update_category($value);
                redirect('C_category');
            } else {
                $data['insert_info'] = $this->M_category->add_category($value);
                redirect('C_category');
            }
        } else {
            $this->load->view('V_category_insert', $value);
        }
    }

    public function delete_category($id = NULL) {
        if (!empty($id)) {
            $this->M_category->delete_zone($id);
        }
        $refer = $this->agent->referrer();
        redirect($refer);
    }

    public function status_category($id, $f = 0) {
        $value['cmp_id'] = $id;
        $value['is_active'] = (int) $f;
//        print_r($value);
        $data['insert_info'] = $this->M_category->update_category($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

}
