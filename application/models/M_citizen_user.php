<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_citizen_user extends CI_Model {

    public function get_count() {
        return $this->db->count_all("tbl_citizen");
    }

    public function get_citizen_user($v = NULL, $limit = NULL, $start = NULL) {
        if ($v) {
            $sql = $this->db->query('select * from tbl_citizen p join tbl_login_master l on l.lgn_details_id=p.c_id where p.c_id=' . $v . ' and l.type_id=3');
            //$sql = $this->db->get_where('tbl_citizen', array('c_id' => $v));
            return $sql->result();
        } else {
            $this->db->limit($limit, $start);
            $sql = $this->db->get('tbl_citizen');
            return $sql->result();
        }
    }

    public function get_total() {
        $sql = $this->db->query('select status,COUNT(*) as count FROM tbl_post_cmp GROUP BY status');
        return $sql->result();
    }

    public function get_pecentag() {
        $sql = $this->db->query('select status,((COUNT( post_cmp_id ) / ( SELECT COUNT( post_cmp_id ) FROM tbl_post_cmp)) * 100 ) as count FROM tbl_post_cmp GROUP BY status');
        return $sql->result();
    }

    public function get_search($v = NULL) {
        $c_fname = $c_lname = $c_contact_no = $c_address = $c_pincode = "";
        if (!empty($v)) {
            $split = preg_split('/[\ \n\,]+/', trim($v));
            foreach ($split as $value) {
                if (!empty($value)) {
                    $c_fname.="c_fname LIKE '" . $value . "%' OR ";
                    $c_lname.="c_lname LIKE '" . $value . "%' OR ";
                    $c_contact_no.="c_contact_no LIKE '" . $value . "%' OR ";
                    $c_address.="c_address LIKE '" . $value . "%' OR ";
                    $c_pincode.="c_pincode LIKE '" . $value . "%' OR ";
                }
            }
            $c_fname = substr_replace($c_fname, "", -3);
            $c_lname = substr_replace($c_lname, "", -3);
            $c_contact_no = substr_replace($c_contact_no, "", -3);
            $c_address = substr_replace($c_address, "", -3);
            $c_pincode = substr_replace($c_pincode, "", -3);

            $sql = $this->db->query("SELECT * FROM tbl_citizen WHERE (" . $c_fname . " or " . $c_lname . " or " . $c_contact_no . " or " . $c_address . " or " . $c_pincode . ")");
        } else {
            $sql = $this->db->get("tbl_sector_officer");
        }
        return $sql->result();
    }

    public function add_citizen_in_login($v) {
        if ($this->db->insert('tbl_login_master', $v)) {
            $id = $this->db->insert_id();
            return $id;
        } else {
            return FALSE;
        }
    }
    public function remove_rec($rid)
    {
        if ($this->db->delete('tbl_login_master', array('lgn_id' => $rid))) {            
            return true;
        } else {
            return FALSE;
        }
    }
    public function add_citizen_user_info($v) {
        if ($this->db->insert('tbl_citizen', $v)) {
            $id = $this->db->insert_id();
            return $id;
        } else {
            return FALSE;
        }
    }

    public function lgn_update_id($v) {
        if ($this->db->where('lgn_id', $v['lgn_id'])->update('tbl_login_master', $v)) {
            return true;
        } else {
            return true;
        }
    }

    public function check_user($v) {
        $query = $this->db->like('lgn_email_id', $v)->get('tbl_login_master');
        //print_r($query->num_rows());
        if ($query) {
            return $query->num_rows();
        } else {
            return FALSE;
        }
    }

    public function update_citizen_user($v, $vn = 0) {

        if ($this->db->where('c_id', $v['c_id'])->update('tbl_citizen', $v)) {
            $myarray["succes"] = TRUE;
            $myarray["massage"] = "Update ci succesfully";
        }
        if ($vn != 0) {
            $w = array('lgn_details_id' => $v['c_id'], 'type_id' => $vn['type_id']);
            if ($this->db->where('lgn_details_id', $v['c_id'])->update('tbl_login_master', $vn)) {
                $myarray["succes"] = TRUE;
                $myarray["massage"] = "Update sector succesfully";
            }
        }
        return $myarray;
    }

    public function delete_sector_user($v) {
        if ($this->db->where('c_id', $v)->delete('tbl_citizen')) {
            $myarray["succes"] = TRUE;
        }
        if ($this->db->where(array('lgn_details_id' => $v, 'type_id' => 2))->delete('tbl_login_master')) {
            $myarray["succes"] = TRUE;
        }
        return $myarray;
    }

}
