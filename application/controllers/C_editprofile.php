<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_editprofile extends CI_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('M_editprofile');
        $this->load->model('M_complaint');
        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            if (empty($this->session->userdata('c_id'))) {
                if (empty($this->session->userdata('sec_o_id'))) {
                    redirect('C_login_user');
                }
            }
        }
    }

    public function citizen_from($id) {
        if (!empty($this->session->userdata('c_id'))) {
            $data['sector'] = $this->M_complaint->get_sec();
            $data['citizen_email'] = $this->M_editprofile->get_login_info($id, 3)[0];
            $data['citizen_info'] = $this->M_editprofile->get_citizen_info($id)[0];
            $this->load->view("test", $data);
        }
    }

    public function update_data() {
        $value['c_id'] = $this->input->post('UserID');
        $value['c_fname'] = $this->input->post('txtfname');
        $value['c_lname'] = $this->input->post('txtlname');
        $value['c_gender'] = $this->input->post('gender');
        $value['c_address'] = $this->input->post('txtaddress');
        $value['c_pincode'] = $this->input->post('ddlsector');
        //print_r($value);
        $this->M_editprofile->update_citizen($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

    public function upload_user_img_view($id) {
        $data['sector'] = $this->M_complaint->get_sec();
        $type = $this->session->userdata('type_id');
        $data['citizen_email'] = $this->M_editprofile->get_login_info($id, $type)[0];


        if ($this->session->userdata('type_id') == 1) {
            $data['citizen_info'] = $this->M_editprofile->get_superadmin_info($id)[0];
        } elseif ($this->session->userdata('type_id') == 2) {
            $data['citizen_info'] = $this->M_editprofile->get_sector_info($id)[0];
        } elseif ($this->session->userdata('type_id') == 3) {
            $data['citizen_info'] = $this->M_editprofile->get_citizen_info($id)[0];
        } elseif ($this->session->userdata('type_id') == 4) {
            $data['citizen_info'] = $this->M_editprofile->get_employee_info($id)[0];
        } elseif ($this->session->userdata('type_id') == 5) {
            $data['citizen_info'] = $this->M_editprofile->get_emergence_info($id)[0];
        }
        $this->load->view("V_change_profile_img", $data);
    }

    public function upload_user_img() {

        if ($this->session->userdata('type_id') == 1) {
            $session_id = $this->session->userdata("sup_id");
        } elseif ($this->session->userdata('type_id') == 2) {
            $session_id = $this->session->userdata("sec_o_id");
        } elseif ($this->session->userdata('type_id') == 3) {
            $session_id = $this->session->userdata("c_id");
        } elseif ($this->session->userdata('type_id') == 4) {
            $session_id = $this->session->userdata("w_id");
        } elseif ($this->session->userdata('type_id') == 5) {
            $session_id = $this->session->userdata("ecs_id");
        } else {
            $session_id = "";
        }

        if (!empty($session_id)) {
            $file_name = $_FILES['ProfilePhoto']['name'];
            $file_type = $_FILES['ProfilePhoto']['type'];
            $file_tmp_name = $_FILES['ProfilePhoto']['tmp_name'];
            $file_error = $_FILES['ProfilePhoto']['error'];
            $file_size = $_FILES['ProfilePhoto']['size'];
            $ex_temp = explode("/", $file_type);

            $check_data['u_id'] = $session_id;
            $check_data['u_type'] = $this->session->userdata('type_id');
            $check = $this->M_editprofile->check_user_pic($check_data);
            if ($check['num_row'] == 1) {
                $file['u_image'] = $check['info'][0]['u_p_id'] . ".jpg";
                unlink('./static/profile_pic/' . $file['u_image']);
                $config['file_name'] = $file['u_image'];
                $config['upload_path'] = './static/profile_pic/';
                $config['allowed_types'] = 'jpg|jpeg';
                $config['max_size'] = '5000'; // max_size in kb
                $this->load->library('upload', $config);
                if (!$this->upload->do_upload('ProfilePhoto')) {
                    $error = array('error' => $this->upload->display_errors());
                    echo "<script>"
                    . "alert('Some error in file upload');"
                    . " location.replace('" . site_url('C_editprofile/upload_user_img_view/' . $session_id) . "')"
                    . "</script>";
                } else {
                    $data = array('upload_data' => $this->upload->data());
//                    $file['u_image'] = $data['upload_data']['file_name'];
                    echo "<script>"
                    . "alert('change photo sucessfully');"
                    . " location.replace('http://localhost/smccs/')"
                    . "</script>";
                }
            } else {
                $file['u_image'] = $file_name;
                $file['u_type'] = $this->session->userdata('type_id');
                $update['u_p_id'] = $this->M_editprofile->insert_photo($file);
                if ($update['u_p_id'] != False) {
                    $update['u_image'] = $update['u_p_id'] . ".jpg";

                    $update['u_id'] = $session_id;

                    $update['u_image'] = $update['u_p_id'] . ".jpg";
                    $result = $this->M_editprofile->update_photo($update);
                    if ($result == TRUE) {
                        $config['file_name'] = $update['u_image'];
                        $config['upload_path'] = './static/profile_pic/';
                        $config['allowed_types'] = 'jpg|jpeg';
                        $config['max_size'] = '5000'; // max_size in kb
                        $this->load->library('upload', $config);
                        if (!$this->upload->do_upload('ProfilePhoto')) {
                            $error = array('error' => $this->upload->display_errors());
                            $this->M_editprofile->delete_image($update['u_p_id']);
                            echo "<script>"
                            . "alert('Some error in file upload');"
                            . " location.replace('" . site_url('C_editprofile/upload_user_img_view/' . $session_id) . "')"
                            . "</script>";
                        } else {
                            $data = array('upload_data' => $this->upload->data());
//                    $file['u_image'] = $data['upload_data']['file_name'];
                            echo "<script>"
                            . "alert('change photo sucessfully');"
                            . " location.replace('http://localhost/smccs/')"
                            . "</script>";
                        }
                    } else {
                        echo "<script>"
                        . "alert('Some error');"
                        . " location.replace('" . site_url('C_editprofile/upload_user_img_view/' . $session_id) . "')"
                        . "</script>";
                    }
                }
            }
        }
    }

}
