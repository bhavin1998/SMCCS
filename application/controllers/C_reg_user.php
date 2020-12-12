<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_reg_user extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_citizen_user');
    }

    public function index() {
        $this->load->view('V_reg_user');
    }

    public function setdata() {
        $value['lgn_email_id'] = $this->input->post('txtemail');
        $value['lgn_pwd'] = $this->input->post('txtpass');
        $value['type_id'] = 3;
        $value['txtconpass'] = $this->input->post('txtconpass');
        $value['cbagree'] = $this->input->post('cbagree');

        if (empty($value['lgn_email_id'])) {
            $value['Errlgn_email_id'] = "Please Enter Email ID";
        } else {
            //^[A-Za-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$
            if (!preg_match('/^[A-Za-z0-9]+@[a-zA-Z0-9\.]+$/', $value['lgn_email_id'])) {
                $value['Errlgn_email_id'] = "Invalid Email ID";
            } else {
                $check = $this->M_citizen_user->check_user($value['lgn_email_id']);

                if ($check >= 1) {
                    $value['Errlgn_email_id'] = "Email ID Already Existing";
                }
            }
        }
        if (empty($value['lgn_pwd'])) {
            $value['Errlgn_pwd'] = "Please Enter Password";
        } else {
            if (!preg_match('/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[*!@#$%^&])\S*$/', $value['lgn_pwd'])) {
                $value['Errlgn_pwd'] = "Password must be Contain 1 Char. & 1 number 1 & special char.";
            }
        }
        if (empty($value['txtconpass'])) {
            $value['Errconpass'] = "Please Enter Confirm Password";
        } else {
            if ($value['lgn_pwd'] != $value['txtconpass']) {
                $value['Errconpass'] = "Not Match password";
            }
        }
        if (empty($value['cbagree'])) {
            $value['Errcbagree'] = "First Checked this button";
        }

        if (empty($value['Errlgn_email_id']) && empty($value['Errlgn_pwd']) && empty($value['Errconpass']) &&
                empty($value['Errcbagree'])) {
            unset($value['Errlgn_email_id']);
            unset($value['Errlgn_pwd']);
            unset($value['Errconpass']);
            unset($value['Errcbagree']);
            unset($value['txtconpass']);
            unset($value['cbagree']);
            $id = $this->M_citizen_user->add_citizen_in_login($value);
            set_cookie("cit_signup_id", "$id", time() + (60 * 100));
            $this->session->set_userdata("r_id", $id);
            $ee = base64_encode($value['lgn_email_id']);
            redirect('C_reg_user/ConfirmEmail/' . $ee);
        } else {
            $this->load->view('V_reg_user', $value);
        }
    }

    public function ConfirmEmail($x) {
        $e = base64_decode($x);
        $this->session->set_userdata("sender_email",$e);
        $generator = "1357902468";
        $result = "";
        for ($i = 1; $i <= 6; $i++) {
            $result .= substr($generator, (rand() % (strlen($generator))), 1);
        }
        $config = array(
            'protocol' => 'smtp',
            'smtp_host' => 'smtp.gmail.com',
            'smtp_port' => 465,
            'smtp_user' => 'dhruvvariyarock@gmail.com',
            'smtp_pass' => '7621978056',
            'mailtype' => 'html',
            'charset' => 'utf-8',
            'wordwrap' => TRUE
        );

        set_cookie("otpcode", "$result", time() + (60 * 2));
        //echo get_cookie("otpcode");
        $this->email->initialize($config);
        $this->email->set_mailtype("html");
        $this->email->set_newline("\r\n");
        $htmlContent = "<h1>$result</h1>";

        $this->email->to($e);
        $this->email->from('dhruvvariyarock@gmail.com', 'smccs');
        $this->email->subject('SMCCS REGISTRATION OTP CODE');
        $this->email->message($htmlContent);

        if ($this->email->send()) {
            redirect("C_reg_user/verify_email");
        } else {
            //show_error($this->email->print_debugger());
            //redirect("C_reg_user");

            $r_id = $this->session->userdata("r_id");
            if (!empty($r_id)) {
                $this->M_citizen_user->remove_rec($r_id);
                echo "<script >alert('some error to Email Servar');"
                . "location.replace('http://localhost/smccs/User-Registration')</script>";               
            }
        }
    }

    public function verify_email() {

        $this->load->view('V_confirm_otp');
    }

    public function submit_otp() {
        $value['otp'] = $this->input->post('txtotp');
        $oo = get_cookie("otpcode");
        if (empty($value['otp'])) {
            $value['Errotp'] = "Please Enter OTP code ";
        } else {
            if ($value['otp'] != $oo) {
                $value['Errotp'] = "Enter The Correct OTP code";
            }
        }
        if (empty($value['Errotp'])) {
            unset($value['Errotp']);
            redirect("C_reg_user/other_detail");
        } else {
            $this->load->view('V_confirm_otp', $value);
        }
    }

    public function other_detail() {
        $lgn_id = get_cookie("cit_signup_id");
        if (empty($this->input->post())) {
            $this->load->view('V_citizen_detail_insert');
        } else {
            $value['c_fname'] = $this->input->post('txtfname');
            $value['c_lname'] = $this->input->post('txtlname');
            $value['c_contact_no'] = $this->input->post('txtnumber');
            $value['c_gender'] = $this->input->post('rbgendar');
            $value['c_address'] = $this->input->post('txtaddress');
            $value['c_pincode'] = $this->input->post('txtpin');

            if (empty($value['c_fname'])) {
                $value['Errc_fname'] = "Please Enter First Name";
            } else {
                if (!preg_match('/^[a-zA-Z\s]+$/', $value['c_fname'])) {
                    $value['Errc_fname'] = "Invalid First Name";
                }
            }
            if (empty($value['c_lname'])) {
                $value['Errc_lname'] = "Please Enter Last Name";
            } else {
                if (!preg_match('/^[a-zA-Z\s]+$/', $value['c_lname'])) {
                    $value['Errc_lname'] = "Invalid Last Name";
                }
            }
            if (empty($value['c_contact_no'])) {
                $value['Errc_contact_no'] = "Please Enter Contact No.";
            } else {
                if (!preg_match('/^[0-9]{6,10}$/', $value['c_contact_no'])) {
                    $value['Errc_contact_no'] = "Invalid Contact No.";
                }
            }
            if (empty($value['c_gender'])) {
                $value['Errc_gender'] = "Please Select Gender";
            }
            if (empty($value['c_address'])) {
                $value['Errc_address'] = "Please Enter Address";
            } else {
                if (!preg_match('/^[a-zA-Z\s\.0-9\-\,]{6,}$/', $value['c_address'])) {
                    $value['Errc_address'] = "Invalid Address";
                }
            }
            if (empty($value['c_pincode'])) {
                $value['Errc_pincode'] = "Please Enter Area Pincode";
            } else {
                if (!preg_match('/^[0-9]{6}$/', $value['c_pincode'])) {
                    $value['Errc_pincode'] = "Invalid Pincode";
                }
            }

            if (empty($value['Errc_fname']) && empty($value['Errc_lname']) && empty($value['Errc_contact_no']) &&
                    empty($value['Errc_gender']) && empty($value['Errc_address']) && empty($value['Errc_pincode'])) {
                unset($value['Errc_fname']);
                unset($value['Errc_lname']);
                unset($value['Errc_contact_no']);
                unset($value['Errc_gender']);
                unset($value['Errc_address']);
                unset($value['Errc_pincode']);

                $dti_id = $this->M_citizen_user->add_citizen_user_info($value);
                $l_info = array("lgn_id" => $lgn_id, "lgn_details_id" => $dti_id, "is_active" => 1);
                $data["update_info"] = $this->M_citizen_user->lgn_update_id($l_info);
                redirect('Login');
            } else {
                $value['lgn_email_id'] = $this->input->post('txtemail');
                $value['lgn_pwd'] = $this->input->post('txtpass');
                $this->load->view('V_citizen_detail_insert', $value);
            }
        }
    }

}
