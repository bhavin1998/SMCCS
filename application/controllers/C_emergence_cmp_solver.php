<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_emergence_cmp_solver extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_emergence_cmp_solver');
        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            if (empty($this->session->userdata('ecs_id'))) {
                redirect('C_login_user');
            }
        }
    }

    public function index() {
        //$data['chart_info'] = $this->M_emergence_cmp_solver->get_chart_data();
        $this->load->view("V_emergence_cmp_solver_dashboard");
    }
    public function ecs_info() {
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_emergence_cmp_solver/ecs_info";
        $pagination["total_rows"] = $this->M_emergence_cmp_solver->get_count();
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
        $data['emergence_cmp_solver_info'] = $this->M_emergence_cmp_solver->get_emergence_cmp_solver(0, $pagination["per_page"], $page);
        $this->load->view('V_emergence_cmp_solver', $data);
    }

    public function add_emergence_cmp_solver($id = NULL) {
        if (empty($id)) {
            $data['emergence_cmp_solver_info'] = $this->M_emergence_cmp_solver->get_emergence_cmp_solver();
        } else {
            $data['emergence_cmp_solver_info'] = $this->M_emergence_cmp_solver->get_emergence_cmp_solver($id)[0];
        }
        $data["sector_info"] = $this->M_emergence_cmp_solver->get_sector();
        $this->load->view('V_emergence_cmp_solver_insert', $data);
    }

    public function search_emergence_cmp_solver() {
        $str = $this->security->sanitize_filename($this->input->post('data'));
        $search = $this->M_emergence_cmp_solver->get_search($str);
        // print_r($search);
        ?>
        <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Fname </th>
                    <th>Lname</th>
                    <th>Contact No</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Pin-code</th>
                    <th>Job Pin-code</th>
                    <th>Is Active</th>                                                                                                        
                    <th>Action</th>                                                    
                </tr>
            </thead>
            <tfoot>
                <?php
                foreach ($search as $v_emergence_cmp_solver_info) {
                    ?>
                    <tr>
                        <td class="text-center"><?php echo $v_emergence_cmp_solver_info->ecs_id; ?></td>
                        <td class=""><?php echo $v_emergence_cmp_solver_info->ecs_fname; ?></td>
                        <td class=""><?php echo $v_emergence_cmp_solver_info->ecs_lname; ?></td>
                        <td class=""><?php echo $v_emergence_cmp_solver_info->ecs_contact_no; ?></td>
                        <td class=""><?php
                            if ($v_emergence_cmp_solver_info->ecs_gender == 'm') {
                                echo 'Male';
                            } else {
                                echo 'Female';
                            }
                            ?>

                        </td>
                        <td class=""><?php echo $v_emergence_cmp_solver_info->ecs_address; ?></td>
                        <td class="text-center"><?php echo $v_emergence_cmp_solver_info->ecs_pincode; ?></td>
                        <td class="text-center"><?php echo $v_emergence_cmp_solver_info->ecs_job_pincode; ?></td>
                        <td class="text-center">
                            <?php
                            if ($v_emergence_cmp_solver_info->ecs_is_active == 1) {
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
                                                if ($v_emergence_cmp_solver_info->ecs_is_active == 1) {
                                                    ?>
                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/status_sector_user/') . $v_emergence_cmp_solver_info->ecs_id; ?>/0" class="col-xs-12">Deactive</a></div>
                                                    <?php
                                                } else {
                                                    ?>
                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/status_sector_user/') . $v_emergence_cmp_solver_info->ecs_id; ?>/1" class="col-xs-12">Active</a></div>
                                                    <?php
                                                }
                                                ?>
                                                <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/add_sector_user/') . $v_emergence_cmp_solver_info->ecs_id; ?>" class="col-xs-12" onclick="">Update</a></div>
                                                <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/delete_sector_user/') . $v_emergence_cmp_solver_info->ecs_id; ?>" class="col-xs-12" onclick="confirm('Are you sure !!!')">Delete</a></div>
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

    public function workars_user_get() {
        redirect('C_worker_user');
    }

    public function iu_cmp_solver_user() {
        $value['ecs_id'] = $this->input->post('hdeid');
        $value['ecs_fname'] = $this->input->post('txtfname');
        $value['ecs_lname'] = $this->input->post('txtlname');
        $value['ecs_contact_no'] = $this->input->post('txtcontect');
        $value['ecs_gender'] = $this->input->post('rbgendar');
        $value['ecs_address'] = $this->input->post('txtaddress');
        $value['ecs_pincode'] = $this->input->post('txtpincode');
        $value['ecs_job_pincode'] = $this->input->post('txtsecjobpincode');
        $value_n['lgn_email_id'] = $this->input->post('txtemail');
        $value_n['lgn_pwd'] = $this->input->post('txtpass');
        $value_n['type_id'] = (int) 5;

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
        if (empty($value['ecs_fname'])) {
            $value['Errecs_fname'] = "Please Enter First Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['ecs_fname'])) {
                $value['Errecs_fname'] = "Invalid First Name";
            }
        }
        if (empty($value['ecs_lname'])) {
            $value['Errecs_lname'] = "Please Enter Last Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['ecs_lname'])) {
                $value['Errecs_lname'] = "Invalid Last Name";
            }
        }
        if (empty($value['ecs_contact_no'])) {
            $value['Errecs_contact_no'] = "Please Enter Contact No.";
        } else {
            if (!preg_match('/^[0-9]{6,10}$/', $value['ecs_contact_no'])) {
                $value['Errecs_contact_no'] = "Invalid Contact No.";
            }
        }
        if (empty($value['ecs_gender'])) {
            $value['Errecs_gender'] = "Please Select Gender";
        }
        if (empty($value['ecs_address'])) {
            $value['Errecs_address'] = "Please Enter Address";
        } else {
            if (!preg_match('/^[a-zA-Z\s\.0-9]{6,}$/', $value['ecs_address'])) {
                $value['Errecs_address'] = "Invalid Address";
            }
        }
        if (empty($value['ecs_pincode'])) {
            $value['Errecs_pincode'] = "Please Enter Area Pincode";
        } else {
            if (!preg_match('/^[0-9]{6}$/', $value['ecs_pincode'])) {
                $value['Errecs_pincode'] = "Invalid Pincode";
            }
        }
        if (empty($value['ecs_job_pincode'])) {
            $value['Errecs_job_pincode'] = "Please Enter Job Pincode";
        } else {
            if (!preg_match('/^[0-9]{6}$/', $value['ecs_job_pincode'])) {
                $value['Errecs_job_pincode'] = "Invalid Job Pincode";
            }
        }
        if (empty($value['Errecs_fname']) && empty($value['Errecs_lname']) && empty($value['Errecs_contact_no']) && empty($value['Errecs_gender']) && empty($value['Errecs_address']) && empty($value['Errecs_pincode']) &&
                empty($value['Errecs_job_pincode']) && empty($value['Errlgn_email_id']) && empty($value['Errlgn_pwd'])) {
            unset($value['Errecs_fname']);
            unset($value['Errecs_lname']);
            unset($value['Errecs_contact_no']);
            unset($value['Errecs_gender']);
            unset($value['Errecs_address']);
            unset($value['Errecs_pincode']);
            unset($value['Errecs_job_pincode']);
            unset($value['Errlgn_email_id']);
            unset($value['Errlgn_pwd']);
            if (!empty($value['ecs_id'])) {
                $data['insert_info'] = $this->M_emergence_cmp_solver->update_emergence_cmp_solver($value, $value_n);
                redirect('C_emergence_cmp_solver/ecs_info');
            } else {
                $data['insert_info'] = $this->M_emergence_cmp_solver->add_emergence_cmp_solver($value, $value_n);
                redirect('C_emergence_cmp_solver/ecs_info');
            }
        } else {
            $value['lgn_email_id'] = $this->input->post('txtemail');
            $value['lgn_pwd'] = $this->input->post('txtpass');
            $this->load->view('V_emergence_cmp_solver_insert', $value);
        }
    }

    public function delete_ecs_solver($id = NULL) {
        if (!empty($id)) {
            $this->M_emergence_cmp_solver->delete_ecs_solver($id);
        }
        $refer = $this->agent->referrer();
        redirect($refer);
    }

    public function status_ecs_solver($id, $f = 0) {
        $value['ecs_id'] = $id;
        $value['ecs_is_active'] = (int) $f;
        $data['insert_info'] = $this->M_emergence_cmp_solver->update_emergence_cmp_solver($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

}
