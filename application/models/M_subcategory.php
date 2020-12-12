<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_subcategory extends CI_Model {

    public function get_count() {
        return $this->db->count_all("tbl_cmp_sub_category");
    }
    public function get_subcategory($v = NULL, $limit = NULL, $start = NULL) {
        if ($v) {
            $sql = $this->db->get_where('tbl_cmp_sub_category', array('sub_ctg_id' => $v));
            return $sql->result();
        } else {
            $this->db->limit($limit, $start);
            $sql = $this->db->get('tbl_cmp_sub_category');
            return $sql->result();
        }
    }

    public function get_category() {
        $sql = $this->db->get_where('tbl_cmp_category',array("is_active"=>1));
        return $sql->result();
    }

    public function add_subcategory($v) {
        if ($this->db->insert('tbl_cmp_sub_category', $v)) {
            return $myarray;
        }
    }

    public function update_subcategory($v) {
//        print_r($v);
        if ($this->db->where('sub_ctg_id', $v['sub_ctg_id'])->update('tbl_cmp_sub_category', $v)) {
            return $myarray;
        }
    }

    public function delete_subcategory($v) {

        if ($this->db->where('sub_ctg_id', $v)->delete('tbl_cmp_sub_category')) {
            return $myarray;
        }
    }
}
