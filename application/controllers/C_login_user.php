<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_login_user extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_login');
        $this->load->library('session');
    }

    public function index() {
        if (empty($this->session->userdata('logged_in')) && $this->session->userdata('logged_in') == FALSE) {
            $this->load->view('V_login_user');
//            echo $this->config->item('upload_url');
        } else {
            $t = $this->session->userdata('type_id');
            if ($t == 1) {
                redirect('C_login_user/admin_login');
            } elseif ($t == 2) {
                redirect('C_login_user/sector_officer_login');
            } elseif ($t == 3) {
                redirect('Citizen');
            } elseif ($t == 4) {
                redirect('C_login_user/worker_login');
            } elseif ($t == 4) {
                redirect('C_login_user/emergence_cmp_solver_login');
            } else {
                redirect('C_login_user/logout');
            }
        }
    }

    public function get_user_type($email = null, $password = null) {
        if (!empty($email) && !empty($password)) {
            $value = array("email" => $email
                , "passwd" => $password);
        } else {
            $value = array("email" => $this->input->get_post("UserName")
                , "passwd" => $this->input->get_post("Password"));
        }
        $userinfo = $this->M_login->user_type($value);

        if (!empty($userinfo)) {
            $value['logged_in'] = true;
            $value['type_id'] = $userinfo[0]->type_id;
            $this->session->set_userdata($value);
            $user_type = $userinfo[0]->type_name;
            //print_r($user_type);
            switch ($user_type) {
                case 'Admin':
                    redirect("/C_login_user/admin_login");
                    break;
                case 'Sector Offic':
                    redirect('/C_login_user/sector_officer_login');
                    break;
                case 'Citizen':
                    $value = $this->session->all_userdata();
                    if (!empty($value['email']) && !empty($value['passwd'])) {
                        $userinfo = $this->M_login->get_citizen($value);
                        if ($userinfo['success'] == 'true') {
                            $this->session->set_userdata($userinfo['items'][0]);
                            redirect('Citizen');
                        }
                    } else {
                        redirect("/C_login_user");
                    }
                    break;
                case 'Worker':
                    redirect('/C_login_user/worker_login');
                    break;
                case 'Emergence cmp solver':
                    redirect('/C_login_user/emergence_cmp_solver_login');
                    break;
                default:
                    redirect("/C_login_user/logout");
                    break;
            }
        } else {
            redirect("/Login");
        }
    }

    public function admin_login() {
        $value = $this->session->all_userdata();
        if (!empty($value['email']) && !empty($value['passwd']) && $value['logged_in'] == 1) {
            $userinfo = $this->M_login->get_super_admin($value);
            if ($userinfo['success'] == 'true') {
                $this->session->set_userdata($userinfo['items'][0]);
                redirect('C_super_admin');
            }
        } else {
            redirect("/C_login_user");
        }
    }

    public function sector_officer_login() {
        $value = $this->session->all_userdata();
        if (!empty($value['email']) && !empty($value['passwd']) && $value['logged_in'] == 1) {
            $userinfo = $this->M_login->get_sector_officer($value);
            if ($userinfo['success'] == 'true') {
                $this->session->set_userdata($userinfo['items'][0]);
                redirect('C_sector_officer');
            }
        } else {
            redirect("/C_login_user");
        }
    }

    public function citizen_login() {
        $value = $this->session->all_userdata();
        if (!empty($value['email']) && !empty($value['passwd']) && $value['logged_in'] == 1) {
            $userinfo = $this->M_login->get_citizen($value);
            if ($userinfo['success'] == 'true') {
                $this->session->set_userdata($userinfo['items'][0]);
                redirect('C_citizen_user');
            }
        } else {
            redirect("/C_login_user");
        }
    }

    public function worker_login() {
        $value = $this->session->all_userdata();
        //print_r($value);
        if (!empty($value['email']) && !empty($value['passwd']) && $value['logged_in'] == 1) {
            $userinfo = $this->M_login->get_worker($value);
            if ($userinfo['success'] == 'true') {
                $this->session->set_userdata($userinfo['items'][0]);
                redirect('C_worker_user');
            }
        } else {
            redirect("/C_login_user");
        }
    }

    public function emergence_cmp_solver_login() {
        $value = $this->session->all_userdata();
        //print_r($value);
        if (!empty($value['email']) && !empty($value['passwd']) && $value['logged_in'] == 1) {
            $userinfo = $this->M_login->get_emergence_cmp_solver($value);
            if ($userinfo['success'] == 'true') {
                $this->session->set_userdata($userinfo['items'][0]);
                redirect('C_emergence_cmp_solver');
            }
        } else {
            redirect("/C_login_user");
        }
    }

    public function logout() {
        $this->session->sess_destroy();
        if (isset($_SERVER['HTTP_COOKIE'])) {
            $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
            foreach ($cookies as $cookie) {
                $parts = explode('=', $cookie);
                $name = trim($parts[0]);
                setcookie($name, '', time() - 1000);
                setcookie($name, '', time() - 1000, '/');
            }
        }
        redirect('Home');
    }

    public function get_set_login() {
        $data = file_get_contents("https://accounts.google.com/signin/oauth/oauthchooseaccount?response_type=code&access_type=online&client_id=716687625423-dj5tqogqiqeffevc5cqp8euvk6gesq7o.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%2Fsmccs%2FC_login_user&state&scope=email%20profile&approval_prompt=auto&o2v=1&as=yAI4hvJzqYvJjScRIy63qw&flowName=GeneralOAuthFlow");
        print_r($data);
    }

    public function face_unlock_view() {
        $this->load->view("V_face_lock_view");
    }

    public function face_unlock() {

        $img = $this->input->post('image');
        $folderPath = "./static/temp_image/";
        $image_parts = explode(";base64,", $img);
        $image_type_aux = explode("image/", $image_parts[0]);
        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);
        $fileName = uniqid() . '.jpg';
        $file = $folderPath . $fileName;
        file_put_contents($file, $image_base64);


        $get_image = $this->M_login->get_profile_img();
        foreach ($get_image as $i_value) {
            $probability = $this->compare($i_value['u_image'], $fileName);
            if ($probability == 'True') {
                $datas = $i_value;
                $get_user = $this->M_login->get_user($datas);
            }
        }


        if (!empty($get_user) && count($get_user) > 0) {
            $this->get_user_type($get_user[0]['lgn_email_id'], $get_user[0]['lgn_pwd']);
            // print_r($get_user[0]['lgn_email_id']."  ".$get_user[0]['lgn_pwd']);
        } else {
            echo "<script>"
            . "alert('Face not available');"
            . "location.replace('http://localhost/smccs/C_login_user/face_unlock_view')</script>";
        }
    }

    public function compare($change_img, $static_img) {

        $domain = $this->config->item('live_url');
        $file_path = 'C:\xampp\htdocs\smccs\static\script\myface.py';
        $image_url2 = $domain . 'smccs/static/profile_pic/' . $change_img;
        $image_url1 = $domain . 'smccs/static/temp_image/' . $static_img;
        $output = exec('python ' . $file_path . ' ' . $image_url1 . ' ' . $image_url2);
        //echo "python " . $file_path . " " . $image_url1 . " " . $image_url2;
        //echo "<pre>".$output."</pre>";

        return $output;
    }

}
