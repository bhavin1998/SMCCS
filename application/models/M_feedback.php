<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_feedback extends CI_Model {

    public function get_count() {
        $this->db->select("*");
        $this->db->from('tbl_feedback');
        $this->db->join('tbl_citizen', 'tbl_citizen.c_id=tbl_feedback.cit_id');
        
        $sql = $this->db->get();
        return $sql->num_rows();
    }

    public function get_feedback($limit = NULL, $start = NULL) {

        $this->db->select("*");
        $this->db->from('tbl_feedback');
        $this->db->join('tbl_citizen', 'tbl_citizen.c_id=tbl_feedback.cit_id');
        $this->db->limit($limit, $start);
        $sql = $this->db->get();

        return $sql->result();
    }
    public function update_feedback($v)
    {
         if ($this->db->where('f_id', $v['f_id'])->update('tbl_feedback', $v)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
            return $myarray;
        }
    }
    public function delete_feedback($v)
    {
         if ($this->db->where('f_id', $v)->delete('tbl_feedback')) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
            return $myarray;
        }
    }
    public function insert_feedback($v)
    {
        return $this->db->insert('tbl_feedback',$v);
    }
}
