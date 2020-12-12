<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_forgot_passwd extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_forget_passwd');
    }

    public function index() {
        $this->load->view('V_forgot_passwd');
    }

    public function send_rec_otp() {
        $email = $this->input->post('txtemail');
        $data['info'] = $this->M_forget_passwd->check_info($email);

        if ($data['info'] > 0) {
            $e = $email;
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
            set_cookie("email", "$e", time() + (60 * 2));
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
                redirect("C_forgot_passwd/verify_code");
            } else {
                show_error($this->email->print_debugger());
            }
        } else {
            redirect("C_forgot_passwd");
        }
    }

    public function verify_code() {
        $this->load->view('V_pass_confirm_otp');
    }

    public function submit_pass_otp() {
        $value['otp'] = $this->input->post('txtotp');
        $oo = get_cookie("otpcode");
        if (!empty($oo)) {
            if (empty($value['otp'])) {
                $value['Errotp'] = "Please Enter OTP code ";
            } else {
                if ($value['otp'] != $oo) {
                    $value['Errotp'] = "Enter The Correct OTP code";
                }
            }
            if (empty($value['Errotp'])) {
                unset($value['Errotp']);
                redirect("C_forgot_passwd/new_passwd_form");
            } else {
                $this->load->view('V_pass_confirm_otp', $value);
            }
        } else {
            redirect("C_forgot_passwd");
        }
    }

    public function new_passwd_form() {
        $this->load->view('V_new_passwd_form');
    }

    public function apply_new_passwd() {
        $e = get_cookie('email');
        if (!empty($e)) {
            $value['lgn_pwd'] = $this->input->post('passwd');
            $value['lgn_email_id'] = get_cookie('email');
            $temp = $this->input->post('cpasswd');
            //print_r($value);
            if (empty($value['lgn_pwd'])) {
                $value['Errlgn_pwd'] = "Please Enter Password";
            } else {
                if (!preg_match('/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[*!@#$%^&])\S*$/', $value['lgn_pwd'])) {
                    $value['Errlgn_pwd'] = "Password must be Contain 1 Char. & 1 number 1 & special char.";
                }
            }
            if (empty($temp)) {
                $value['Errconpass'] = "Please Enter Confirm Password";
            } else {
                if ($value['lgn_pwd'] != $temp) {
                    $value['Errconpass'] = "Not Match password";
                }
            }
            // print_r($value);
            if (empty($value['Errlgn_pwd']) && empty($value['Errconpass'])) {
                unset($value['Errlgn_pwd']);
                unset($value['Errconpass']);

                $id = $this->M_forget_passwd->update_passwd($value);
                if ($id == TRUE) {
                    setcookie("otpcode", "", time() - 3600);
                    setcookie("email", "", time() - 3600);
                    redirect('Login');
                } else {
                    $this->load->view('V_new_passwd_form');
                }
            } else {
                $this->load->view('V_new_passwd_form', $value);
            }
        } else {
            redirect("C_forgot_passwd");
        }
    }
    public function apply_new_passwd_google() {
        $e = get_cookie('email');
        if (!empty($e)) {
            $value['lgn_pwd'] = $this->input->post('passwd');
            $value['lgn_email_id'] = get_cookie('email');
            $temp = $this->input->post('cpasswd');
            //print_r($value);
            if (empty($value['lgn_pwd'])) {
                $value['Errlgn_pwd'] = "Please Enter Password";
            } else {
                if (!preg_match('/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[*!@#$%^&])\S*$/', $value['lgn_pwd'])) {
                    $value['Errlgn_pwd'] = "Password must be Contain 1 Char. & 1 number 1 & special char.";
                }
            }
            if (empty($temp)) {
                $value['Errconpass'] = "Please Enter Confirm Password";
            } else {
                if ($value['lgn_pwd'] != $temp) {
                    $value['Errconpass'] = "Not Match password";
                }
            }
            // print_r($value);
            if (empty($value['Errlgn_pwd']) && empty($value['Errconpass'])) {
                unset($value['Errlgn_pwd']);
                unset($value['Errconpass']);

                $ids = $this->M_forget_passwd->update_passwd($value);
                if ($ids == TRUE) {    
                    $this->session->sess_destroy();
                    redirect('C_reg_user/other_detail');
                } else {
                    $this->load->view('V_new_passwd_form_google');
                }
            } else {
                $this->load->view('V_new_passwd_form_google', $value);
            }
        } else {
            redirect("login");
        }
    }

}
