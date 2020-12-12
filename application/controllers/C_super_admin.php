<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_super_admin extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_super_admin');
        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            redirect(base_url());
        }
    }
    public function index() {
        $data['r_completed']=$this->M_super_admin->get_completed_report();
        $data['r_panding']=$this->M_super_admin->get_panding_report();
        //print_r($data);
        $this->load->view('V_super_admin_dashboard',$data);
    }

    public function sector_admin_get() {
        redirect('C_sector_officer/sector_officer_info');
    }

    public function workars_user_get() {
        redirect('C_worker_user/worker_info');
    }

    public function citizen_user_get() {
        redirect('C_citizen_user/citizen_info');        
    }

}
