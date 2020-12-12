<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_sector_officer extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_sector_user');
        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            if (empty($this->session->userdata('sec_o_id'))) {
                redirect('C_login_user');
            }
        }
    }

    public function search_sec_officer() {
        $str = $this->security->sanitize_filename($this->input->post('data'));
        $search = $this->M_sector_user->get_search($str);
        // print_r($search);
        ?>
        <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
            <thead>
                <tr>
                    <th>Sec id</th>
                    <th>Sec Fname </th>
                    <th>Sec Lname</th>
                    <th>Sec Contact No</th>
                    <th>Sec Gender</th>
                    <th>Sec Address</th>
                    <th>Sec Pin-code</th>
                    <th>Sec Job Pin-code</th>
                    <th>Sec Is Active</th>                                                                                                        
                    <th>Action</th>                                                    
                </tr>
            </thead>
            <tfoot>
                <?php
                foreach ($search as $v_sec_user_info) {
                    ?>
                    <tr>
                        <td class="text-center"><?php echo $v_sec_user_info->sec_o_id; ?></td>
                        <td class=""><?php echo $v_sec_user_info->sec_fname; ?></td>
                        <td class=""><?php echo $v_sec_user_info->sec_lname; ?></td>
                        <td class=""><?php echo $v_sec_user_info->sec_contact_no; ?></td>
                        <td class=""><?php
                            if ($v_sec_user_info->sec_gender == 'm') {
                                echo 'Male';
                            } else {
                                echo 'Female';
                            }
                            ?>

                        </td>
                        <td class=""><?php echo $v_sec_user_info->sec_address; ?></td>
                        <td class="text-center"><?php echo $v_sec_user_info->sec_pincode; ?></td>
                        <td class="text-center"><?php echo $v_sec_user_info->sec_job_pincode; ?></td>
                        <td class="text-center">
                            <?php
                            if ($v_sec_user_info->sec_is_active == 1) {
                                echo "Active";
                            } else {
                                echo "Deactive";
                            }
                            ?>
                        </td> 
                        <td class="text-center"><div class="btn-group">
                                <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                                                    
                                    Action                                                                    
                                </button>
                                <div class="dropdown-menu dd">
                                    <div class="top-arrow"></div>
                                    <div class="profile-block">
                                        <div class="row">                                    
                                            <div class="">        

                                                <?php
                                                if ($v_sec_user_info->sec_is_active == 1) {
                                                    ?>
                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_sector_officer/status_sector_user/') . $v_sec_user_info->sec_o_id; ?>/0" class="col-xs-12">Deactive</a></div>
                                                    <?php
                                                } else {
                                                    ?>
                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_sector_officer/status_sector_user/') . $v_sec_user_info->sec_o_id; ?>/1" class="col-xs-12">Active</a></div>
                                                    <?php
                                                }
                                                ?>
                                                <div class="col-xs-12"><a href="<?php echo site_url('C_sector_officer/add_sector_user/') . $v_sec_user_info->sec_o_id; ?>" class="col-xs-12" onclick="">Update</a></div>
                                                <div class="col-xs-12"><a href="<?php echo site_url('C_sector_officer/delete_sector_user/') . $v_sec_user_info->sec_o_id; ?>" class="col-xs-12" onclick="confirm('Are you sure !!!')">Delete</a></div>
                                            </div>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </td>
                    </tr>
                    <?php
                }
                ?>
            </tfoot>
        </table>
        <?php
    }

    public function index() {
        $data['chart_info']=$this->M_sector_user->get_chart_data();
        $this->load->view("V_sector_admin_dashboard",$data);
    }

    public function workars_user_get() {
        redirect('C_worker_user');
    }

    public function sector_officer_info() {
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_sector_officer/sector_officer_info";
        $pagination["total_rows"] = $this->M_sector_user->get_count();
        $pagination["per_page"] = 10;
        $pagination["uri_segment"] = 3;
        $pagination["full_tag_open"] = '<ul class="pagination">';
        $pagination["full_tag_close"] = '</ul>';
        $pagination["first_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["first_tag_close"] = '</li>';
        $pagination["last_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["last_tag_close"] = '</li>';
        $pagination["next_link"] = 'Next';
        $pagination["next_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["next_tag_close"] = '</li>';
        $pagination["prev_link"] = 'Previous';
        $pagination["prev_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["prev_tag_close"] = '</li>';
        $pagination["num_tag_open"] = '<li class="paginate_button" id="">';
        $pagination["num_tag_close"] = '</li>';
        $pagination["cur_tag_open"] = '<li class="paginate_button active" id=""><a href="#" aria-controls="tblbirthenroll" data-dt-idx="0" tabindex="0">';
        $pagination["cur_tag_close"] = '</a></li>';
        $this->pagination->initialize($pagination);
        $page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
        $data["links"] = $this->pagination->create_links();

        $data['sec_user_info'] = $this->M_sector_user->get_sector_user(0, $pagination["per_page"], $page);
        $this->load->view('V_sector_officer', $data);
    }

    public function add_sector_user($id = NULL) {
        if (empty($id)) {
            $data['sec_user_info'] = $this->M_sector_user->get_sector_user();
        } else {
            $data['sec_user_info'] = $this->M_sector_user->get_sector_user($id)[0];
        }
        $data["sector_info"]=$this->M_sector_user->get_sector();
        $this->load->view('V_sector_user_insert', $data);
    }

    public function iu_sector_user() {
        $value['sec_o_id'] = $this->input->post('hdsid');
        $value['sec_fname'] = $this->input->post('txtfname');
        $value['sec_lname'] = $this->input->post('txtlname');
        $value['sec_contact_no'] = $this->input->post('txtcontect');
        $value['sec_gender'] = $this->input->post('rbgendar');
        $value['sec_address'] = $this->input->post('txtaddress');
        $value['sec_pincode'] = $this->input->post('txtpincode');
        $value['sec_job_pincode'] = $this->input->post('txtsecjobpincode');
        $value_n['lgn_email_id'] = $this->input->post('txtemail');
        $value_n['lgn_pwd'] = $this->input->post('txtpass');
        $value_n['type_id'] = (int) 2;

        if (empty($value_n['lgn_email_id'])) {
            $value['Errlgn_email_id'] = "Please Enter Email ID";
        } else {
            if (!preg_match('/^[A-Za-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/', $value_n['lgn_email_id'])) {
                $value['Errlgn_email_id'] = "Invalid Email ID";
            }
        }
        if (empty($value_n['lgn_pwd'])) {
            $value['Errlgn_pwd'] = "Please Enter Password";
        } else {
            if (!preg_match('/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[*!@#$%^&])\S*$/', $value_n['lgn_pwd'])) {
                $value['Errlgn_pwd'] = "Password must be Contain 1 Char. & 1 number 1 & special char.";
            }
        }
        if (empty($value['sec_fname'])) {
            $value['Errsec_fname'] = "Please Enter First Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['sec_fname'])) {
                $value['Errsec_fname'] = "Invalid First Name";
            }
        }
        if (empty($value['sec_lname'])) {
            $value['Errsec_lname'] = "Please Enter Last Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['sec_lname'])) {
                $value['Errsec_lname'] = "Invalid Last Name";
            }
        }
        if (empty($value['sec_contact_no'])) {
            $value['Errsec_contact_no'] = "Please Enter Contact No.";
        } else {
            if (!preg_match('/^[0-9]{6,10}$/', $value['sec_contact_no'])) {
                $value['Errsec_contact_no'] = "Invalid Contact No.";
            }
        }
        if (empty($value['sec_gender'])) {
            $value['Errsec_gender'] = "Please Select Gender";
        }
        if (empty($value['sec_address'])) {
            $value['Errsec_address'] = "Please Enter Address";
        } else {
            if (!preg_match('/^[a-zA-Z\s\.0-9]{6,}$/', $value['sec_address'])) {
                $value['Errsec_address'] = "Invalid Address";
            }
        }
        if (empty($value['sec_pincode'])) {
            $value['Errsec_pincode'] = "Please Enter Area Pincode";
        } else {
            if (!preg_match('/^[0-9]{6}$/', $value['sec_pincode'])) {
                $value['Errsec_pincode'] = "Invalid Pincode";
            }
        }
        if (empty($value['sec_job_pincode'])) {
            $value['Errsec_job_pincode'] = "Please Enter Job Pincode";
        } else {
            if (!preg_match('/^[0-9]{6}$/', $value['sec_job_pincode'])) {
                $value['Errsec_job_pincode'] = "Invalid Job Pincode";
            }
        }
        if (empty($value['Errsec_fname']) && empty($value['Errsec_lname']) && empty($value['Errsec_contact_no']) && empty($value['Errsec_gender']) && empty($value['Errsec_address']) && empty($value['Errsec_pincode']) &&
                empty($value['Errsec_job_pincode']) && empty($value['Errlgn_email_id']) && empty($value['Errlgn_pwd'])) {
            unset($value['Errsec_fname']);
            unset($value['Errsec_lname']);
            unset($value['Errsec_contact_no']);
            unset($value['Errsec_gender']);
            unset($value['Errsec_address']);
            unset($value['Errsec_pincode']);
            unset($value['Errsec_job_pincode']);
            unset($value['Errlgn_email_id']);
            unset($value['Errlgn_pwd']);
            if (!empty($value['sec_o_id'])) {
                $data['insert_info'] = $this->M_sector_user->update_sector_user($value, $value_n);
                redirect('C_sector_officer/sector_officer_info');
            } else {
                $data['insert_info'] = $this->M_sector_user->add_sector_user($value, $value_n);
                redirect('C_sector_officer/sector_officer_info');
            }
        } else {
            $value['lgn_email_id'] = $this->input->post('txtemail');
            $value['lgn_pwd'] = $this->input->post('txtpass');
            $this->load->view('V_sector_user_insert', $value);
        }
    }

    public function delete_sector_user($id = NULL) {
        if (!empty($id)) {
            $this->M_sector_user->delete_sector_user($id);
        }
        $refer = $this->agent->referrer();
        redirect($refer);
    }

    public function status_sector_user($id, $f = 0) {
        $value['sec_o_id'] = $id;
        $value['sec_is_active'] = (int) $f;
        $data['insert_info'] = $this->M_sector_user->update_sector_user($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

}
