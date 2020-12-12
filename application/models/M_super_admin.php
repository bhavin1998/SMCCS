<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_super_admin extends CI_Model {

    public function get_secter_admin() {
        $sql = $this->db->get('tbl_sector');
        return $sql->result();
    }
    public function get_panding_report()
    {
        $this->db->select('tbl_zone.z_id,tbl_zone.z_name,COUNT(tbl_post_cmp.post_cmp_id) as count');
        $this->db->from('tbl_sector');
        $this->db->join('tbl_post_cmp','tbl_post_cmp.sec_id=tbl_sector.sec_id');
        $this->db->join('tbl_zone','tbl_zone.z_id=tbl_sector.zone_id');
        $this->db->group_by("tbl_zone.z_id");
        $this->db->where("status","pending");
        $sql = $this->db->get();
        return $sql->result();
    }
    public function get_completed_report()
    {
        $this->db->select('tbl_zone.z_id,tbl_zone.z_name,COUNT(tbl_post_cmp.post_cmp_id) as count');
        $this->db->from('tbl_sector');
        $this->db->join('tbl_post_cmp','tbl_post_cmp.sec_id=tbl_sector.sec_id');
        $this->db->join('tbl_zone','tbl_zone.z_id=tbl_sector.zone_id');
        $this->db->group_by("tbl_zone.z_id");
        $this->db->where("status","completed");
        $sql = $this->db->get();
        return $sql->result();
    }
}
