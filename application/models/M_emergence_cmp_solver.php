<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_emergence_cmp_solver extends CI_Model {

    public function get_count() {
        return $this->db->count_all("tbl_emergence_cmp_solver");
    }

    public function get_sector() {
        $sql = $this->db->get_where('tbl_sector', array("is_active" => 1));
        return $sql->result();
    }

    public function get_search($v = NULL) {
        $sec_fname = $sec_lname = "";
        if (!empty($v)) {
            $split = preg_split('/[\ \n\,]+/', trim($v));
            foreach ($split as $value) {
                if (!empty($value)) {
                    $sec_fname.="sec_fname LIKE '" . $value . "%' OR ";
                    $sec_lname.="sec_lname LIKE '" . $value . "%' OR ";
                }
            }
            $sec_fname = substr_replace($sec_fname, "", -3);
            $sec_lname = substr_replace($sec_lname, "", -3);

            $sql = $this->db->query("SELECT * FROM tbl_emergence_cmp_solver WHERE (" . $sec_fname . " or " . $sec_lname . ")");
//            $sql = $this->db->query("SELECT * FROM tbl_emergence_cmp_solver WHERE sec_fname like '" . $v . "%' or sec_lname like '" . $v . "%'");
        } else {
            $sql = $this->db->get("tbl_emergence_cmp_solver");
        }
        return $sql->result();
    }

    public function get_emergence_cmp_solver($v = NULL, $limit = NULL, $start = NULL) {
        
        if ($v) {
            
            $sql = $this->db->query('select * from tbl_emergence_cmp_solver e join tbl_login_master l on l.lgn_details_id=e.ecs_id where e.ecs_id=' . $v . ' and l.type_id=5');          
            if ($sql) {
                return $sql->result();
            } else {
                return FALSE;
            }
        } else {
            $this->db->limit($limit, $start);
            $sql = $this->db->get('tbl_emergence_cmp_solver');
            return $sql->result();
        }
    }

    public function add_emergence_cmp_solver($v, $vn) {
        if ($this->db->insert('tbl_emergence_cmp_solver', $v)) {
            $vn['lgn_details_id'] = $this->db->insert_id();
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Add succesfully";
        }
        if ($this->db->insert('tbl_login_master', $vn)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Add succesfully";
        }
        return $myarray;
    }
    
    public function update_emergence_cmp_solver($v, $vn = 0) {

        if ($this->db->where('ecs_id', $v['ecs_id'])->update('tbl_emergence_cmp_solver', $v)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update sector succesfully";
        }
        if ($vn != 0) {
            $w = array('lgn_details_id' => $v['ecs_id'], 'type_id' => $vn['type_id']);
            if ($this->db->where('lgn_details_id', $v['ecs_id'])->update('tbl_login_master', $vn)) {
                $myarray["succes"] = TRUE;
                $myarray["massage"] = "Update sector succesfully";
            }
        }
        return $myarray;
    }
    
    public function get_chart_data() {
        if (!empty($this->session->userdata("ecs_id"))) {
            $id = $this->session->userdata("ecs_id");
            $sql = $this->db->query("select status,((COUNT( post_cmp_id ) / ( SELECT COUNT( post_cmp_id ) FROM tbl_post_cmp)) * 100 ) as count from tbl_post_cmp WHERE sec_id in (select sec_id from tbl_sector WHERE sec_pincode =(select sec_job_pincode from tbl_emergence_cmp_solver where ecs_id=" . $id . ")) GROUP BY status");
        } else if (!empty($id = $this->session->userdata("w_id"))) {
            $id = $this->session->userdata("w_id");
            $sql = $this->db->query("select status,((COUNT( post_cmp_id ) / ( SELECT COUNT( post_cmp_id ) FROM tbl_post_cmp)) * 100 ) as count from tbl_post_cmp WHERE sec_id in (select sec_id from tbl_sector WHERE sec_pincode =(select w_job_pincode from tbl_employee where w_id=" . $id . ")) GROUP BY status");
        }

        return $sql->result();
    }

    

    public function delete_ecs_solver($v) {
        if ($this->db->where('ecs_id', $v)->delete('tbl_emergence_cmp_solver')) {
            $myarray["succes"] = TRUE;
        }
        if ($this->db->where(array('lgn_details_id' => $v, 'type_id' => 2))->delete('tbl_login_master')) {
            $myarray["succes"] = TRUE;
        }
        return $myarray;
    }

}
