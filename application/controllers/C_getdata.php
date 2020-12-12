<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_getdata extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_complaint');
    }

    public function get_subcate() {
        $v = $this->input->post("id");

        $data["subcategory"] = $this->M_complaint->get_subcategory($v);
        $this->load->view("V_getdata", $data);
    }

    public function get_sector() {
        $v = $this->input->post("zid");
        $data["sector"] = $this->M_complaint->get_sector($v);
        $this->load->view("V_getdata", $data);
    }

}
