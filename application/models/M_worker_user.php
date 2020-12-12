<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_worker_user extends CI_Model {

    public function get_worker_user($v = NULL) {
        if ($v) {
            $sql = $this->db->query('select * from tbl_employee w join tbl_login_master l on l.lgn_details_id=w.w_id where w.w_id=' . $v . ' and l.type_id=4');
            //$sql = $this->db->get_where('tbl_employee', array('w_id' => $v));
            return $sql->result();
        } else {
            $sql = $this->db->get('tbl_employee');
            return $sql->result();
        }
    }

    public function add_worker_user($v, $vn) {
        if ($this->db->insert('tbl_employee', $v)) {
            $vn['lgn_details_id'] = $this->db->insert_id();
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Add sector succesfully";
        }
        if ($this->db->insert('tbl_login_master', $vn)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Add sector succesfully";
        }
        return $myarray;
    }

    public function update_worker_user($v, $vn = 0) {
        if ($this->db->where('w_id', $v['w_id'])->update('tbl_employee', $v)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
        }
        if ($vn != 0) {
            $w = array('lgn_details_id' => $v['w_id'], 'type_id' => $vn['type_id']);
            if ($this->db->where('lgn_details_id', $v['w_id'])->update('tbl_login_master', $vn)) {
                $myarray["succes"] = TRUE;
                $myarray["massage"] = "Update sector succesfully";
            }
        }
        return $myarray;
    }

    public function delete_worker_user($v) {
       
        if ($this->db->where('w_id', $v)->delete('tbl_employee')) {
            $myarray["succes"] = TRUE;
        }
        if ($this->db->where(array('lgn_details_id' => $v, 'type_id' => 4))->delete('tbl_login_master')) {
            $myarray["succes"] = TRUE;
        }
        return $myarray;
    }

}
