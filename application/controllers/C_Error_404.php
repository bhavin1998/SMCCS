<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_Error_404 extends CI_Controller {    

    public function index() {
        //$url =$this->input->post_get('url');
        /* if($url != "videostatusmarket.com/videostatusmarket.com/videostatus_studio/ads_dialoge.php")
        // {
        //     $data = array( "url" => "$url");
        //     $this->load->model('Error_404_m');
        //     $this->Error_404_m->add_url($data);
        // }*/
        $this->load->view("404");
    }  

}
