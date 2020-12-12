<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_forget_passwd extends CI_Model {

    public function check_info($e) {
        $sql = $this->db->get_where("tbl_login_master", array("lgn_email_id" => $e, "type_id" => 3));
        return $sql->num_rows();
    }

    public function update_passwd($v) {
        $this->db->where(array("lgn_email_id" => $v['lgn_email_id'], "type_id" => 3));
        if($this->db->update("tbl_login_master", $v))
        {
            return TRUE;
        }  else {
            return FALSE;
        }
        
    }

}
