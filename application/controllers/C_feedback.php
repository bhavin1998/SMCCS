<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_feedback extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_feedback');
        if (empty($this->session->userdata('sup_id'))) {
            if (empty($this->session->userdata('sec_o_id'))) {
                if (empty($this->session->userdata('c_id'))) {
                    redirect('C_login_user');
                }
            }
        }
    }

    public function index() {
        $pagination = array();
        $pagination["base_url"] = base_url() . "c_feedback/index";
        $pagination["total_rows"] = $this->M_feedback->get_count();
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
        $data['feedback_info'] = $this->M_feedback->get_feedback($pagination["per_page"], $page);

        $this->load->view("V_feedback", $data);
    }

    public function status_feedback($id, $f = 0) {
        $value['f_id'] = $id;
        $value['is_active'] = (int) $f;
        $data['feedback_status'] = $this->M_feedback->update_feedback($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

    public function delete_feedback($id) {
        if (!empty($id)) {
            $this->M_feedback->delete_feedback($id);
        }
        redirect('C_sector');
    }

    public function feedback_form() {
        $this->load->view("V_feedback_form");
    }

    public function insert_feedback() {
        $value['cit_id'] = $this->input->post('hdcid');
        $value['fd_desc'] = $this->input->post('txtdiscription');
        $data['insert_status'] = $this->M_feedback->insert_feedback($value);
        $this->load->view("V_feedback_form", $data);
    }

}
