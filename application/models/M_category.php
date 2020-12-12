<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_category extends CI_Model {

     public function get_count() {
        return $this->db->count_all("tbl_cmp_category");
    }
    public function get_category($v = NULL,$limit = NULL, $start = NULL) {
        if ($v) {
            $sql = $this->db->get_where('tbl_cmp_category', array('cmp_id' => $v));
            return $sql->result();
        } else {
            $this->db->limit($limit, $start);
            $sql = $this->db->get('tbl_cmp_category');
            return $sql->result();
        }
    }
    public function add_category($v) {
        if ($this->db->insert('tbl_cmp_category', $v)) {
            return $myarray;
        }
    }
    public function update_category($v) {
        if ($this->db->where('cmp_id', $v['cmp_id'])->update('tbl_cmp_category', $v)) {
            return $myarray;
        }
    }
    public function delete_zone($v) {

        if ($this->db->where('cmp_id', $v)->delete('tbl_cmp_category')) {
            return $myarray;
        }
    }

}
