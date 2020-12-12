<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_apply_leave extends CI_Model {

    public function set_assign_admin($v) {
        $sql = $this->db->get_where('tbl_cmp_asgn_hgr_auth', array("post_cmp_id" => $v['post_cmp_id'], "cit_id" => $v['cit_id']));
        if ($sql->num_rows() <= 0) {
            return $this->db->insert('tbl_cmp_asgn_hgr_auth', $v);
        } else {
            return FALSE;
        }
    }

    public function insert_apply_leave($v) {
        $sql = $this->db->insert('tbl_apply_leave', $v);
        if ($sql) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    public function get_count($v) {
        $sql = $this->db->get_where('tbl_apply_leave', $v);
        return $sql->num_rows();
    }

    public function get_w_apply_leave($v, $limit = NULL, $start = NULL) {
        $this->db->limit($limit, $start);
        $sql = $this->db->get_where('tbl_apply_leave', $v);
        return $sql->result();
    }

    public function get_sec_leave_count() {
        $id = $this->session->userdata("sec_o_id");
        $sql = $this->db->query("SELECT * FROM `tbl_apply_leave` WHERE w_id in (select w_id from tbl_employee WHERE w_job_pincode in (select sec_job_pincode FROM tbl_sector_officer where sec_o_id=$id))");
        return $sql->num_rows();
    }

    public function get_sec_show_leave($limit = NULL, $start = NULL) {
        $id = $this->session->userdata("sec_o_id");
        $sql = $this->db->query("SELECT * FROM `tbl_apply_leave` WHERE w_id in (select w_id from tbl_employee WHERE w_job_pincode in (select sec_job_pincode FROM tbl_sector_officer where sec_o_id=$id)) limit $start,$limit");
        return $sql->result();
    }

    public function update_leave_status($v) {
        $this->db->where('l_id', $v['l_id']);
        $sql = $this->db->update('tbl_apply_leave', $v);
        if ($sql) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
            return $myarray;
        }
    }

}
