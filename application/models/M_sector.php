<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_sector extends CI_Model {

    public function get_count() {
        return $this->db->count_all("tbl_sector");
    }

    public function get_search($v=NULL) {
        if (!empty($v)) {
            $sql = $this->db->query("SELECT * FROM tbl_sector WHERE sec_name like '" . $v . "%'");
        } else {
            $sql = $this->db->get("tbl_sector");
        }
        return $sql->result();
    }

    public function get_sector($v = NULL, $limit = NULL, $start = NULL) {
        if ($v) {
            $sql = $this->db->get_where('tbl_sector', array('sec_id' => $v));
            return $sql->result();
        } else {
            $this->db->limit($limit, $start);
            $sql = $this->db->get('tbl_sector');
            return $sql->result();
        }
    }

    public function get_zone() {
        $sql = $this->db->get_where('tbl_zone', array("is_active" => 1));
        return $sql->result();
    }

    public function add_sector($v) {
        if ($this->db->insert('tbl_sector', $v)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Add sector succesfully";
            return $myarray;
        }
    }

    public function update_sector($v) {
        // print_r($v);
        if ($this->db->where('sec_id', $v['sec_id'])->update('tbl_sector', $v)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
            return $myarray;
        }
    }

    public function delete_sector($v) {

        if ($this->db->where('sec_id', $v)->delete('tbl_sector')) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
            return $myarray;
        }
    }

}
