<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_complaint extends CI_Model {

    public function get_count() {
        $this->db->select("*");
        $this->db->from('tbl_post_cmp');
        $this->db->join('tbl_citizen', 'tbl_citizen.c_id=tbl_post_cmp.cit_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id  = tbl_sector.sec_id');
        $this->db->join('tbl_cmp_sub_category', 'tbl_post_cmp.sub_ctg_id  = tbl_cmp_sub_category.sub_ctg_id');
        $sql = $this->db->get();
        return $sql->num_rows();
    }

    public function get_img() {
        $sql = $this->db->get("tbl_cmp_photo");
        return $sql->result();
    }

    public function get_video() {
        $sql = $this->db->get("tbl_cmp_video");
        return $sql->result();
    }

    public function get_citizen() {
        $this->db->select("*");
        $this->db->from('tbl_citizen');
        $this->db->where(array('c_id' => $this->session->userdata("c_id"), 'type_id' => 3));
        $this->db->join('tbl_login_master', 'tbl_citizen.c_id=tbl_login_master.lgn_details_id');
        $sql = $this->db->get();
        return $sql->result();
//        $sql=$this->db->get_where("tbl_citizen");
//        return $sql->result();
    }

    public function get_my_count($v) {
        $this->db->select("*");
        $this->db->from('tbl_post_cmp');
        $this->db->where(array('cit_id' => $v));
        $this->db->join('tbl_citizen', 'tbl_citizen.c_id=tbl_post_cmp.cit_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id  = tbl_sector.sec_id');
        $this->db->join('tbl_cmp_sub_category', 'tbl_post_cmp.sub_ctg_id  = tbl_cmp_sub_category.sub_ctg_id');
        $sql = $this->db->get();
        return $sql->num_rows();
    }

    public function get_my_complaint($v = NULL, $limit = NULL, $start = NULL, $sort) {
        $this->db->select("*");
        $this->db->from('tbl_post_cmp');
        $this->db->where('cit_id', $v);
        $this->db->join('tbl_citizen', 'tbl_citizen.c_id=tbl_post_cmp.cit_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id  = tbl_sector.sec_id');
        $this->db->join('tbl_cmp_sub_category', 'tbl_post_cmp.sub_ctg_id  = tbl_cmp_sub_category.sub_ctg_id');
        $this->db->order_by("cmp_pst_date $sort");
        $this->db->limit($limit, $start);
        $sql = $this->db->get();
        return $sql->result();
    }

    public function get_pincode($v) {
        $sql = $this->db->get_where("tbl_sector_officer", array("sec_o_id" => $v));
        return $sql->result();
    }

    public function get_w_pincode($v) {
        $sql = $this->db->get_where("tbl_employee", array("w_id" => $v));
        return $sql->result();
    }

    public function get_complaint($v = NULL, $limit = NULL, $start = NULL) {
        $this->db->select("*");
        $this->db->from('tbl_post_cmp');
        $this->db->join('tbl_citizen', 'tbl_citizen.c_id=tbl_post_cmp.cit_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id  = tbl_sector.sec_id');
        $this->db->join('tbl_cmp_sub_category', 'tbl_post_cmp.sub_ctg_id  = tbl_cmp_sub_category.sub_ctg_id');
        $this->db->limit($limit, $start);
        $sql = $this->db->get();
        return $sql->result();
    }

    public function get_complaint_sec_officer_count($v = NULL) {
        $this->db->select("*");
        $this->db->from('tbl_post_cmp');
        $this->db->join('tbl_citizen', 'tbl_citizen.c_id=tbl_post_cmp.cit_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id  = tbl_sector.sec_id');
        $this->db->join('tbl_cmp_sub_category', 'tbl_post_cmp.sub_ctg_id  = tbl_cmp_sub_category.sub_ctg_id');
        $this->db->where('tbl_sector.sec_pincode', $v);
        $sql = $this->db->get();
        return $sql->num_rows();
    }

    public function get_complaint_sec_officer($v = NULL, $limit = NULL, $start = NULL) {
        $this->db->select("*");
        $this->db->from('tbl_post_cmp');
        $this->db->join('tbl_citizen', 'tbl_citizen.c_id=tbl_post_cmp.cit_id');
        $this->db->join('tbl_sector', 'tbl_post_cmp.sec_id  = tbl_sector.sec_id');
        $this->db->join('tbl_cmp_sub_category', 'tbl_post_cmp.sub_ctg_id  = tbl_cmp_sub_category.sub_ctg_id');
        $this->db->where('tbl_sector.sec_pincode', $v);
        $this->db->limit($limit, $start);
        $sql = $this->db->get();
        return $sql->result();
    }

    public function cmp_status_update($v) {

        if ($this->db->where(array("post_cmp_id" => $v['post_cmp_id']))->update("tbl_post_cmp", $v)) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    public function get_category() {
        $sql = $this->db->get_where("tbl_cmp_category", array("is_active" => TRUE));
        return $sql->result();
    }

    public function get_zone() {
        $sql = $this->db->get_where("tbl_zone", array("is_active" => TRUE));
        return $sql->result();
    }

    public function get_subcategory($id) {
        $sql = $this->db->get_where("tbl_cmp_sub_category", array("cmp_id " => $id, "is_active" => TRUE));
        return $sql->result();
    }

    public function get_sector($id) {
        $sql = $this->db->get_where("tbl_sector", array("zone_id" => $id, "is_active" => TRUE));
        return $sql->result();
    }

    public function get_sec() {
        $sql = $this->db->get_where("tbl_sector", array("is_active" => TRUE));
        return $sql->result();
    }

    public function insert_post_complaint($v) {
        unset($v['cat_id']);
        unset($v['z_id']);
        $v['Complainer'] = $v['Cfname'] . " " . $v['Clname'];
        $v['Complainer_address'] = $v['Caddress'] . "," . $v['Carea'];
        unset($v['Cfname']);
        unset($v['Clname']);
        unset($v['Caddress']);
        unset($v['Carea']);
        $sql = $this->db->insert("tbl_post_cmp", $v);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }

    public function cmp_img_insert($v) {
        $sql = $this->db->insert("tbl_cmp_photo", $v);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }

    public function cmp_video_insert($v) {
        $sql = $this->db->insert("tbl_cmp_video", $v);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }

    public function cmp_img_update($name, $id) {
        $this->db->where("i_id ", $id);
        if ($this->db->update("tbl_cmp_photo", array("img_name" => $name))) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    public function cmp_video_update($name, $id) {
        $this->db->where("v_id ", $id);
        if ($this->db->update("tbl_cmp_video", array("v_name" => $name))) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

}
