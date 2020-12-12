<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_home extends CI_Controller {

    public function __construct() {
        parent::__construct();
        if (!empty($this->session->userdata('sup_id'))) {
            redirect('C_super_admin');
        }
    }

    public function index() {
        $this->load->view('V_home');
    }

}
