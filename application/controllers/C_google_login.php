<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_google_login extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_google_login');
        $this->load->model('M_login');
        $this->load->model('M_forget_passwd');
        $this->load->model('M_citizen_user');
    }

    public function index() {
        $login_button = '';
        require_once 'file:///C:/xampp/htdocs/smccs/vendor/autoload.php';
        //Make object of Google API Client for call Google API
        $google_client = new Google_Client();
        //Set the OAuth 2.0 Client ID
        $google_client->setClientId('828626759755-sm5dsda5vumfsvil6aadg9gt7g2msh4j.apps.googleusercontent.com');
        //Set the OAuth 2.0 Client Secret key
        $google_client->setClientSecret('nQ7Zjf8J4hMOXI3-1YCVFQq4');
        //Set the OAuth 2.0 Redirect URI
        $google_client->setRedirectUri('http://localhost/smccs/Back');
        // to get the email and profile 
        $google_client->addScope('email');
        $google_client->addScope('profile');


        if (isset($_GET["code"])) {
            $token = $google_client->fetchAccessTokenWithAuthCode($_GET["code"]);
            if (!isset($token['error'])) {
                $google_client->setAccessToken($token['access_token']);
                //$data['access_token']=$token['access_token'];
                $this->session->set_userdata('access_token', $token['access_token']);
                //$_SESSION['access_token'] = $token['access_token'];
                $google_service = new Google_Service_Oauth2($google_client);
                $data = $google_service->userinfo->get();

                $check = $this->M_google_login->check_login($data['email']);
                if (!empty($data['given_name'])) {
                    $this->session->set_userdata('user_first_name', $data['given_name']);
                    //$_SESSION['user_first_name'] = $data['given_name'];
                }
                if (!empty($data['family_name'])) {
                    $this->session->set_userdata('user_last_name', $data['family_name']);
                    //$_SESSION['user_last_name'] = $data['family_name'];
                }
                if (!empty($data['email'])) {
                    //setcookie("email", $data['email'], time() - 3600);
                    $this->session->set_userdata('user_email_address', $data['email']);
                    //$_SESSION['user_email_address'] = $data['email'];
                }
                if (!empty($data['gender'])) {
                    $this->session->set_userdata('user_gender', $data['gender']);
                    //$_SESSION['user_gender'] = $data['gender'];
                }
                if (!empty($data['picture'])) {
                    $this->session->set_userdata('user_image', $data['picture']);
                    set_cookie("user_image", $data['picture'], time() + (60 * 100));
                    //$_SESSION['user_image'] = $data['picture'];
                }
                if ($check['success'] == TRUE) {
                    //echo "kkk";
                    $value = array("email" => $check['items'][0]['lgn_email_id'], "passwd" => $check['items'][0]['lgn_pwd']);
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
                            default:
                                redirect("/C_login_user/logout");
                                break;
                        }
                    } else {
                        redirect("/C_login_user");
                    }
                } else {
                    $value['lgn_email_id'] = $data['email'];
                    $value['type_id'] = 3;
                    $id = $this->M_citizen_user->add_citizen_in_login($value);
                    set_cookie("cit_signup_id", "$id", time() + (60 * 100));
                    set_cookie("email", $data['email'], time() + (60 * 100));
                    //echo get_cookie(email);
                    $this->load->view('V_new_passwd_form_google');
                }
                //$this->load->view('V_citizen_detail_insert');
                // $this->load->view('temp');
            }
        }
        if (empty($this->session->userdata('access_token'))) {

            echo $login_button = '<a href="' . $google_client->createAuthUrl() . '">Login With Google</a>';
        }
    }

    public function faq() {
        $this->load->view('V_faq');
    }

    public function contect() {
        $this->load->view('V_contect_us');
    }

    public function copyright() {
        $this->load->view('V_copyright');
    }

}
