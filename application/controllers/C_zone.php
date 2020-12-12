<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_zone extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_zone');
        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            if (empty($this->session->userdata('sec_o_id'))) {
                redirect('C_login_user');
            }
        }
    }

    public function index() {

        $data['zone_info'] = $this->M_zone->get_zone(0);
        $this->load->view('V_zone', $data);
    }

    public function add_new_zone($id = NULL) {
        if (empty($id)) {
            $data['zone_info'] = $this->M_zone->get_zone();
        } else {
            $data['zone_info'] = $this->M_zone->get_zone($id)[0];
        }
        $this->load->view('V_zone_insert', $data);
    }

    public function iu_zone() {
        $value['z_id'] = $this->input->post('hdzid');
        $value['z_name'] = $this->input->post('txtzname');

        if (empty($value['z_name'])) {
            $value['ErrZname'] = "Please Enter Zone Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['z_name'])) {
                $value['ErrZname'] = "Invalid Zone Name";
            }
        }
        if (empty($value['ErrZname'])) {
            unset($value['ErrZname']);
            if (!empty($value['z_id'])) {
                $data['insert_info'] = $this->M_zone->update_zone($value);
                redirect('C_zone');
            } else {
                $data['insert_info'] = $this->M_zone->add_zone($value);
                redirect('C_zone');
            }
        } else {
            $this->load->view('V_zone_insert', $value);
        }
    }

    public function delete_zone($id = NULL) {
        if (!empty($id)) {
            $this->M_zone->delete_zone($id);
        }
        $refer = $this->agent->referrer();
        redirect($refer);
    }

    public function status_zone($id, $f = 0) {
        $value['z_id'] = $id;
        $value['is_active'] = (int) $f;
//        print_r($value);
        $data['insert_info'] = $this->M_zone->update_zone($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

}
