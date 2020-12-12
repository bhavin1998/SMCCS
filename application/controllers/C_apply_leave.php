<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_apply_leave extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_apply_leave');
        if (empty($this->session->userdata('sup_id'))) {
            if (empty($this->session->userdata('sec_o_id'))) {

                if (empty($this->session->userdata('w_id'))) {
                    redirect('C_login_user');
                }
            }
        }
    }

    public function index($f = NULL) {
        if (!empty($f)) {
            $data['msg'] = "Leave apply sucessfull";
            $this->load->view('V_apply_leave_form', $data);
        } else {
            $this->load->view('V_apply_leave_form');
        }
    }

    public function apply_leave() {
        $v['s_date'] = $this->input->post('sdate');
        $v['e_date'] = $this->input->post('edate');
        $v['l_description'] = $this->input->post('txtdis');
        $v['w_id'] = $this->session->userdata("w_id");
        $date['leave_status'] = $this->M_apply_leave->insert_apply_leave($v);
        if ($date['leave_status'] == true) {
            redirect('C_apply_leave/index/f');
        }
    }

    public function apply_leave_show() {
        $v['w_id'] = $this->session->userdata("w_id");

        $pagination = array();
        $pagination["base_url"] = base_url() . "C_apply_leave/apply_leave_show";
        $pagination["total_rows"] = $this->M_apply_leave->get_count($v);
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

        $data['leave_info'] = $this->M_apply_leave->get_w_apply_leave($v, $pagination["per_page"], $page);
        $this->load->view('V_show_apply_leave', $data);
    }
    public function apply_leave_in_sector() {
        $v['sec_o_id'] = $this->session->userdata("sec_o_id");        
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_apply_leave/apply_leave_show";
        $pagination["total_rows"] = $this->M_apply_leave->get_sec_leave_count();
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

        $data['leave_info'] = $this->M_apply_leave->get_sec_show_leave($pagination["per_page"], $page);
        //print_r($data);
        $this->load->view('V_show_apply_leave', $data);
    }
    public function status_of_leave($l_id,$s)
    {
        $value['l_id']=$l_id;
        $value['status']=(int) $s;
        $this->M_apply_leave->update_leave_status($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

}
