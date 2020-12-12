<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_zone extends CI_Model {

    public function get_zone($v = NULL) {
        if ($v) {
            $sql = $this->db->get_where('tbl_zone', array('z_id' => $v));
            return $sql->result();
        } else {
            $sql = $this->db->get('tbl_zone');
            return $sql->result();
        }
    }
    public function add_zone($v) {
        if ($this->db->insert('tbl_zone', $v)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Add sector succesfully";
            return $myarray;
        }
    }

    public function update_zone($v) {        
        if ($this->db->where('z_id', $v['z_id'])->update('tbl_zone', $v)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
            return $myarray;
        }
    }

    public function delete_zone($v) {

        if ($this->db->where('z_id', $v)->delete('tbl_zone')) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
            return $myarray;
        }
    }
}
