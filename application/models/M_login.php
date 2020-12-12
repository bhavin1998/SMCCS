<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_login extends CI_Model {

    public function user_type($v) {
        $query = $this->db->query("select * from tbl_type_master where type_id = (select type_id from tbl_login_master where lgn_email_id=? and lgn_pwd=?) ", array($v['email'], $v['passwd']));
        return $query->result();
    }

    public function get_super_admin($v) {
        $query = $this->db->query("select * from tbl_superadmin where sup_id = (select lgn_details_id from tbl_login_master where lgn_email_id=? and lgn_pwd=?) ", array($v['email'], $v['passwd']));
        if ($this->db->affected_rows() == 1) {
            $myArray['success'] = 'true';
            $myArray['items'] = $query->result_array();
            return $myArray;
        } else {
            $myArray['success'] = 'false';
        }
    }

    public function get_sector_officer($v) {
        $query = $this->db->query("select * from tbl_sector_officer where sec_o_id = (select lgn_details_id from tbl_login_master where lgn_email_id=? and lgn_pwd=?) ", array($v['email'], $v['passwd']));
        if ($this->db->affected_rows() == 1) {
            $myArray['success'] = 'true';
            $myArray['items'] = $query->result_array();
            return $myArray;
        } else {
            $myArray['success'] = 'false';
        }
    }

    public function get_citizen($v) {
        $query = $this->db->query("select * from tbl_citizen where c_id = (select lgn_details_id from tbl_login_master where lgn_email_id=? and lgn_pwd=?) ", array($v['email'], $v['passwd']));
        if ($this->db->affected_rows() == 1) {
            $myArray['success'] = 'true';
            $myArray['items'] = $query->result_array();
            return $myArray;
        } else {
            $myArray['success'] = 'false';
        }
    }

    public function get_worker($v) {
        $query = $this->db->query("select * from tbl_employee where w_id = (select lgn_details_id from tbl_login_master where lgn_email_id=? and lgn_pwd=?) ", array($v['email'], $v['passwd']));
        if ($this->db->affected_rows() == 1) {
            $myArray['success'] = 'true';
            $myArray['items'] = $query->result_array();
            return $myArray;
        } else {
            $myArray['success'] = 'false';
        }
    }

    public function get_emergence_cmp_solver($v) {
        $query = $this->db->query("select * from tbl_emergence_cmp_solver where ecs_id = (select lgn_details_id from tbl_login_master where lgn_email_id=? and lgn_pwd=?) ", array($v['email'], $v['passwd']));
        if ($this->db->affected_rows() == 1) {
            $myArray['success'] = 'true';
            $myArray['items'] = $query->result_array();
            return $myArray;
        } else {
            $myArray['success'] = 'false';
        }
    }

    public function get_profile_img() {
        $query = $this->db->query("SELECT * FROM tbl_user_pic");
        
        return $query->result_array();
    }
    public function get_user($data)
    {
//        print_r($data);
//        die();
        $temp=array('type_id'=>$data['u_type'],'lgn_details_id'=>$data['u_id']);
        $sql=$this->db->get_where('tbl_login_master',$temp);
        return $sql->result_array();
    }

}
