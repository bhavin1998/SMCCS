<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_assign_complaint extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_assign_complaint');
        if (empty($this->session->userdata('sup_id'))) {
            if (empty($this->session->userdata('sec_o_id'))) {
                if (empty($this->session->userdata('c_id'))) {
                    if (empty($this->session->userdata('w_id'))) {
                        redirect('C_login_user');
                    }
                }
            }
        }
    }

    public function citizen_super($cmpid, $f = NULL) {
        if (!empty($f)) {
            $data["msg"] = "already assign high authority";
        }
        $data['assign_info'] = array('cmp_id' => $cmpid, 'c_id' => $this->session->userdata("c_id"));
        $this->load->view('V_assign_info', $data);
    }

    public function assign_admin() {

        $value['post_cmp_id'] = $this->input->post('cmpid');
        $value['cit_id'] = $this->input->post('cid');
        $value['description'] = $this->input->post('txtdisc');
        $data['assign_status'] = $this->M_assign_complaint->set_assign_admin($value);
        if ($data['assign_status'] == TRUE) {
            redirect('C_citizen_user');
        } else {
            $refer = $this->agent->referrer();
            redirect('C_assign_complaint/citizen_super/' . $value['post_cmp_id'] . '/' . 'f');
        }
    }

    public function high_auth_complaint_show($f = NULL) {
        if (!empty($f)) {
            $data['msg'] = "Assign complain to sector sucessfull";
        }
        $data['admin_assign_cmp'] = $this->M_assign_complaint->get_admin_assign();
        $pincode = $data['admin_assign_cmp'][0]->sec_pincode;
        $data['sector_officer_info'] = $this->M_assign_complaint->get_sector_officer($pincode);
        // print_r($data);
        $this->load->view("V_high_auth_cmp", $data);
    }

    public function assign_sector_officer($sec_off_id, $cmp_asgn_hgr_id) {
        $status = $this->M_assign_complaint->assign_sector_officer($sec_off_id, $cmp_asgn_hgr_id);
        if ($status == TRUE) {
            redirect("C_assign_complaint/high_auth_complaint_show/flag");
        } else {
            redirect("C_assign_complaint/high_auth_complaint_show");
        }
    }

    public function high_auth_sec_cmp_show($f = NULL) {
        if (!empty($f)) {
            $data['msg'] = "Assign complain to worker sucessfull";
        }
        $data['sec_assign_cmp'] = $this->M_assign_complaint->get_sec_assign();
        if (count($data['sec_assign_cmp']) != 0) {
            $pincode = $data['sec_assign_cmp'][0]->sec_pincode;
            $data['workar_officer_info'] = $this->M_assign_complaint->get_worker($pincode);
            // print_r($data);
            $this->load->view("V_high_auth_sec_cmp", $data);
        } else {
            $data["empty_array"]="No Complain found";
            $this->load->view("V_high_auth_sec_cmp", $data);
        }
    }

    public function assign_workar($workar_id, $cmp_asg_sec_id) {
        $status = $this->M_assign_complaint->assign_workar($workar_id, $cmp_asg_sec_id);
        if ($status == TRUE) {
            redirect("C_assign_complaint/high_auth_sec_cmp_show/flag");
        } else {
            redirect("C_assign_complaint/high_auth_sec_cmp_show");
        }
    }

    public function high_auth_w_cmp_show($f = NULL) {
        if (!empty($f)) {
            $data['msg'] = "Assign complain to worker sucessfull";
        }
        $data['sec_w_cmp'] = $this->M_assign_complaint->get_w_assign();
        //print_r($data);
        $this->load->view("V_high_auth_w_cmp", $data);
    }

}
