<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_assign_complaint extends CI_Model {

    public function set_assign_admin($v) {
        $sql = $this->db->get_where('tbl_cmp_asgn_hgr_auth', array("post_cmp_id" => $v['post_cmp_id'], "cit_id" => $v['cit_id']));
        if ($sql->num_rows() <= 0) {
            return $this->db->insert('tbl_cmp_asgn_hgr_auth', $v);
        } else {
            return FALSE;
        }
    }

    public function get_admin_assign() {
        $this->db->select("*");
        $this->db->from('tbl_cmp_asgn_hgr_auth');
        $this->db->join('tbl_post_cmp', 'tbl_post_cmp.post_cmp_id=tbl_cmp_asgn_hgr_auth.post_cmp_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id=tbl_sector.sec_id');
        $sql = $this->db->get();
        return $sql->result();
    }

    public function get_sector_officer($v) {
        $sql = $this->db->get_where('tbl_sector_officer', array("sec_job_pincode" => $v));
        return $sql->result();
    }

    public function assign_sector_officer($sec_off_id, $cmp_asgn_hgr_id) {
        $cmp_detail = $this->db->get_where('tbl_cmp_asgn_hgr_auth', array('cmp_asgn_hgr_id' => $cmp_asgn_hgr_id))->result()[0];
        $value['post_cmp_id'] = $cmp_detail->post_cmp_id;
        $value['sec_o_id'] = $sec_off_id;
        $value['description'] = $cmp_detail->description;
        $value['s_adm_id'] = $this->session->userdata("sup_id");
        if ($this->db->insert('tbl_cmp_asgn_sec', $value)) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    public function get_sec_assign() {
        $this->db->select("*");
        $this->db->from('tbl_cmp_asgn_sec');
        $this->db->join('tbl_post_cmp', 'tbl_post_cmp.post_cmp_id=tbl_cmp_asgn_sec.post_cmp_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id=tbl_sector.sec_id');
        $this->db->where(array("sec_o_id"=>$this->session->userdata("sec_o_id")));
        $sql = $this->db->get();
        return $sql->result();
    }
    public function get_worker($v) {
        $sql = $this->db->get_where('tbl_employee', array("w_job_pincode" => $v));
        return $sql->result();
    }
    public function assign_workar($workar_id, $cmp_asg_sec_id) {
        $cmp_detail = $this->db->get_where('tbl_cmp_asgn_sec', array('cmp_asg_sec_id' => $cmp_asg_sec_id))->result()[0];
        $value['post_cmp_id'] = $cmp_detail->post_cmp_id;
        $value['w_id'] = $workar_id;
        $value['description'] = $cmp_detail->description;
        $value['sec_adm_id'] = $this->session->userdata("sec_o_id");
        if ($this->db->insert('tbl_cmp_asgn_sec_wrk', $value)) {
            return TRUE;
        } else {
            return FALSE;
        }
    }
    public function get_w_assign() {
        $this->db->select("*");
        $this->db->from('tbl_cmp_asgn_sec_wrk');
        $this->db->join('tbl_post_cmp', 'tbl_post_cmp.post_cmp_id=tbl_cmp_asgn_sec_wrk.post_cmp_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id=tbl_sector.sec_id');
        $this->db->join('tbl_sector_officer', 'tbl_cmp_asgn_sec_wrk.sec_adm_id =tbl_sector_officer.sec_o_id');
        $this->db->where(array("w_id"=>$this->session->userdata("w_id")));
        $sql = $this->db->get();
        return $sql->result();
    }
}
