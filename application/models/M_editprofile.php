<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_editprofile extends CI_Model {

    public function get_citizen_info($v) {
        $sql = $this->db->get_where('tbl_citizen', array("c_id" => $v));
        return $sql->result();
    }
    public function get_superadmin_info($v) {
        $sql = $this->db->get_where('tbl_superadmin', array("sup_id" => $v));
        return $sql->result();
    }
    public function get_sector_info($v) {
        $sql = $this->db->get_where('tbl_sector_officer', array("sec_o_id" => $v));
        return $sql->result();
    }
    public function get_employee_info($v) {
        $sql = $this->db->get_where('tbl_employee', array("w_id" => $v));
        return $sql->result();
    }
    public function get_emergence_info($v) {
        $sql = $this->db->get_where('tbl_emergence_cmp_solver', array("ecs_id" => $v));
        return $sql->result();
    }
    public function get_login_info($id, $type) {
        $sql = $this->db->get_where('tbl_login_master', array("lgn_details_id" => $id, "type_id" => $type));
        return $sql->result();
    }

    public function update_citizen($v) {
        $v['c_pincode'] = $this->db->select('sec_pincode')->get_where('tbl_sector', array('sec_id' => $v['c_pincode']))->result()[0]->sec_pincode;
        $this->db->where(array('c_id' => $v['c_id']));
        $this->db->update('tbl_citizen', $v);
    }

    public function insert_photo($v) {
        $sql = $this->db->insert('tbl_user_pic', $v);
        if ($sql) {
            return $this->db->insert_id();
        } else {
            return FALSE;
        }
    }

    public function update_photo($v) {
        if ($this->db->where(array("u_p_id" => $v['u_p_id']))->update("tbl_user_pic", $v)) {
            return TRUE;
        } else {
            return FALSE;
        }
    }
    public function check_user_pic($v)
    {
        $sql=$this->db->get_where('tbl_user_pic',array('u_id'=>$v['u_id'],'u_type'=>$v['u_type']));
        if ($sql) {
            $data['num_row']=$sql->num_rows();
            $data['info']=$sql->result_array();
            return $data;
        } else {
            return FALSE;
        }
    }
    public function delete_image($v)
    {
        $this->db->delete('tbl_user_pic',array('u_p_id'=>$v));
    }

}
