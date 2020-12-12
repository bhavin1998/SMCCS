<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_subcategory extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_subcategory');
        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            redirect('C_login_user');
        }
    }

    public function index() {
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_subcategory/index";
        $pagination["total_rows"] = $this->M_subcategory->get_count();
        $pagination["per_page"] = 10;
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
        $data['subcat_info'] = $this->M_subcategory->get_subcategory(0,$pagination["per_page"], $page);
        $this->load->view('V_subcategory', $data);
    }

    public function add_new_subcategory($id = NULL) {
        $data['cat_info'] = $this->M_subcategory->get_category();
        if (empty($id)) {
            $data['subcat_info'] = $this->M_subcategory->get_subcategory();
        } else {

            $data['subcat_info'] = $this->M_subcategory->get_subcategory($id)[0];
        }
        $this->load->view('V_subcategory_insert', $data);
    }

    public function iu_subcategory() {
        $value['sub_ctg_id'] = $this->input->post('hdscid');
        $value['sub_name'] = $this->input->post('txtscname');
        $value['cmp_id'] = $this->input->post('ddlcat');
        //print_r($value);
        if (empty($value['sub_name'])) {
            $value['Errsub_name'] = "Please Enter Sub-Category Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['sub_name'])) {
                $value['Errsub_name'] = "Invalid Sub-Category Name";
            }
        }
        if (empty($value['cmp_id'])) {
            $value['Errcmp_id'] = "Please Select Category";
        }

        if (empty($value['Errsub_name']) && empty($value['Errcmp_id'])) {
            unset($value['Errsub_name']);
            unset($value['Errcmp_id']);
            if (!empty($value['sub_ctg_id'])) {
                $data['insert_info'] = $this->M_subcategory->update_subcategory($value);
                redirect('C_subcategory');
            } else {
                $data['insert_info'] = $this->M_subcategory->add_subcategory($value);
                redirect('C_subcategory');
            }
        } else {
            $value['cat_info'] = $this->M_subcategory->get_category();
            $this->load->view('V_subcategory_insert', $value);
        }
    }

    public function delete_subcategory($id = NULL) {
        if (!empty($id)) {
            $this->M_subcategory->delete_subcategory($id);
        }
        redirect('C_subcategory');
    }

    public function status_subcategory($id, $f = 0) {
        $value['sub_ctg_id'] = $id;
        $value['is_active'] = (int) $f;
//        print_r($value);
        $data['insert_info'] = $this->M_subcategory->update_subcategory($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

}
