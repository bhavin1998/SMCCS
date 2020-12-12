<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_worker_user extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_worker_user');
        $this->load->model('M_sector_user');
        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            if (empty($this->session->userdata('sec_o_id'))) {
                if (empty($this->session->userdata('w_id'))) {
                    redirect('C_login_user');
                }
            }
        }
    }

    public function index() {
        $data['chart_info']=$this->M_sector_user->get_chart_data();
        $this->load->view('V_worker_dashboard',$data);
    }

    public function worker_info() {
        $data['worker_info'] = $this->M_worker_user->get_worker_user(0);
        $this->load->view('V_worker_user', $data);
    }

    public function add_worker_user($id = NULL) {
        if (empty($id)) {
            $data['worker_info'] = $this->M_worker_user->get_worker_user();
        } else {
            $data['worker_info'] = $this->M_worker_user->get_worker_user($id)[0];
        }
        $this->load->view('V_worker_user_insert', $data);
    }

    public function iu_worker_user() {
//        print_r($this->input->post());
        $value['w_id'] = $this->input->post('hdwid');
        $value['w_fname'] = $this->input->post('txtfname');
        $value['w_lname'] = $this->input->post('txtlname');
        $value['w_contact_no'] = $this->input->post('txtcontect');
        $value['w_gender'] = $this->input->post('rbgendar');
        $value['w_address'] = $this->input->post('txtaddress');
        $value['w_pincode'] = $this->input->post('txtpincode');
        $value['w_job_pincode'] = $this->input->post('txtwjobpincode');
        $value_n['lgn_email_id'] = $this->input->post('txtemail');
        $value_n['lgn_pwd'] = $this->input->post('txtpass');
        $value_n['type_id'] = (int) 4;

        if (empty($value_n['lgn_email_id'])) {
            $value['Errlgn_email_id'] = "Please Enter Email ID";
        } else {
            if (!preg_match('/^[A-Za-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/', $value_n['lgn_email_id'])) {
                $value['Errlgn_email_id'] = "Invalid Email ID";
            }
        }
        if (empty($value_n['lgn_pwd'])) {
            $value['Errlgn_pwd'] = "Please Enter Password";
        } else {
            if (!preg_match('/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[*!@#$%^&])\S*$/', $value_n['lgn_pwd'])) {
                $value['Errlgn_pwd'] = "Password must be Contain 1 Char. & 1 number 1 & special char.";
            }
        }
        if (empty($value['w_fname'])) {
            $value['Errw_fname'] = "Please Enter First Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['w_fname'])) {
                $value['Errw_fname'] = "Invalid First Name";
            }
        }
        if (empty($value['w_lname'])) {
            $value['Errw_lname'] = "Please Enter Last Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['w_lname'])) {
                $value['Errw_lname'] = "Invalid Last Name";
            }
        }
        if (empty($value['w_contact_no'])) {
            $value['Errw_contact_no'] = "Please Enter Contact No.";
        } else {
            if (!preg_match('/^[0-9]{6,10}$/', $value['w_contact_no'])) {
                $value['Errw_contact_no'] = "Invalid Contact No.";
            }
        }
        if (empty($value['w_gender'])) {
            $value['Errw_gender'] = "Please Select Gender";
        }
        if (empty($value['w_address'])) {
            $value['Errw_address'] = "Please Enter Address";
        } else {
            if (!preg_match('/^[a-zA-Z\s\.0-9]{6,}$/', $value['w_address'])) {
                $value['Errw_address'] = "Invalid Address";
            }
        }
        if (empty($value['w_pincode'])) {
            $value['Errw_pincode'] = "Please Enter Area Pincode";
        } else {
            if (!preg_match('/^[0-9]{6}$/', $value['w_pincode'])) {
                $value['Errw_pincode'] = "Invalid Pincode";
            }
        }
        if (empty($value['w_job_pincode'])) {
            $value['Errw_job_pincode'] = "Please Enter Job Pincode";
        } else {
            if (!preg_match('/^[0-9]{6}$/', $value['w_job_pincode'])) {
                $value['Errw_job_pincode'] = "Invalid Job Pincode";
            }
        }

        if (empty($value['Errw_fname']) && empty($value['Errw_lname']) && empty($value['Errw_contact_no']) &&
                empty($value['Errw_gender']) && empty($value['Errw_address']) && empty($value['Errw_pincode']) &&
                empty($value['Errw_job_pincode']) && empty($value['Errlgn_email_id']) && empty($value['Errlgn_pwd'])) {
            unset($value['Errw_fname']);
            unset($value['Errw_lname']);
            unset($value['Errw_contact_no']);
            unset($value['Errw_gender']);
            unset($value['Errw_address']);
            unset($value['Errw_pincode']);
            unset($value['Errw_job_pincode']);
            unset($value['Errlgn_email_id']);
            unset($value['Errlgn_pwd']);

            if (!empty($value['w_id'])) {
                $data['insert_info'] = $this->M_worker_user->update_worker_user($value, $value_n);
                redirect('C_worker_user');
            } else {
                $data['insert_info'] = $this->M_worker_user->add_worker_user($value, $value_n);
                redirect('C_worker_user');
            }
        } else {
            $value['lgn_email_id'] = $this->input->post('txtemail');
            $value['lgn_pwd'] = $this->input->post('txtpass');
            $this->load->view('V_worker_user_insert', $value);
        }
    }

    public function delete_worker_user($id = NULL) {
        if (!empty($id)) {
            $this->M_worker_user->delete_worker_user($id);
        }
        $refer = $this->agent->referrer();
        redirect($refer);
    }

    public function status_worker_user($id, $f = 0) {
        $value['w_id'] = $id;
        $value['w_is_active'] = (int) $f;
        $data['insert_info'] = $this->M_worker_user->update_worker_user($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

}
