<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_google_login extends CI_Model {

    public function check_login($v) {        
        $query = $this->db->query("select * from tbl_login_master where lgn_email_id=?", array($v));
        if ($this->db->affected_rows() == 1) {
            $myArray['success'] = TRUE;
            $myArray['items'] = $query->result_array();
            
        } else {
            $myArray['success'] = FALSE;
        }
        return $myArray;
    }

}
