<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_sector extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_sector');

        if (empty($this->session->userdata('sup_id')) && $this->session->userdata('sup_id') != 1) {
            if (empty($this->session->userdata('sec_o_id'))) {
                redirect('C_login_user');
            }
        }
    }

    public function search_sector() {
        $str = $this->security->sanitize_filename($this->input->post('data'));
        $search = $this->M_sector->get_search($str);
        ?>
        <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
            <thead>
                <tr>
                    <th>Sector id</th>
                    <th>Sector Name</th>
                    <th>Zone id</th>                                                   
                    <th>Sector pin-code</th>                                                                                                                                                            
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tfoot id="tfoot">
                <?php
                foreach ($search as $v_sec_info) {
                    ?>
                    <tr>
                        <td class="text-center"><?php echo $v_sec_info->sec_id; ?></td>
                        <td class=""><?php echo $v_sec_info->sec_name; ?></td>
                        <td class="text-center"><?php echo $v_sec_info->zone_id; ?></td>
                        <td class="text-center"><?php echo $v_sec_info->sec_pincode; ?></td>
                        <td class="text-center">
                            <?php
                            if ($v_sec_info->is_active == 1) {
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
                                                if ($v_sec_info->is_active == 1) {
                                                    ?>
                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_sector/status_sector/') . $v_sec_info->sec_id; ?>/0" class="col-xs-12">Deactive</a></div>
                                                    <?php
                                                } else {
                                                    ?>
                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_sector/status_sector/') . $v_sec_info->sec_id; ?>/1" class="col-xs-12">Active</a></div>
                                                    <?php
                                                }
                                                ?>
                                                <div class="col-xs-12"><a href="<?php echo site_url('C_sector/add_new_sector/') . $v_sec_info->sec_id; ?>" class="col-xs-12" onclick="">Update</a></div>
                                                <div class="col-xs-12"><a href="<?php echo site_url('C_sector/delete_sector/') . $v_sec_info->sec_id; ?>" class="col-xs-12" onclick="confirm('Are you sure !!!')">Delete</a></div>
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
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_sector/index";
        $pagination["total_rows"] = $this->M_sector->get_count();
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

        $data['sec_info'] = $this->M_sector->get_sector(0, $pagination["per_page"], $page);
        $this->load->view('V_sector', $data);
    }

    public function add_new_sector($id = NULL) {
        $data['zone_info'] = $this->M_sector->get_zone();
        if (empty($id)) {
            $data['sec_info'] = $this->M_sector->get_sector();
        } else {

            $data['sec_info'] = $this->M_sector->get_sector($id)[0];
        }
        $this->load->view('V_sector_insert', $data);
    }

    public function iu_sector() {
        $value['sec_id'] = $this->input->post('hdid');
        $value['sec_name'] = $this->input->post('txsecname');
        $value['sec_pincode'] = $this->input->post('txsecpin');
        $value['zone_id'] = $this->input->post('ddlzone');

        if (empty($value['sec_name'])) {
            $value['ErrSec_name'] = "Please Enter Sector Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['sec_name'])) {
                $value['ErrSec_name'] = "Invalid Sector Name";
            }
        }
        if (empty($value['sec_pincode'])) {
            $value['ErrSec_pincode'] = "Please Enter Pincode";
        } else {
            if (!preg_match('/^[0-9]{6}$/', $value['sec_pincode'])) {
                $value['ErrSec_pincode'] = "Invalid Pincode";
            }
        }
        if (empty($value['zone_id'])) {
            $value['ErrZone_id'] = "Select zone First";
        }

        if (empty($value['ErrSec_name']) && empty($value['ErrSec_pincode']) && empty($value['ErrZone_id'])) {
            unset($value['ErrSec_name']);
            unset($value['ErrSec_pincode']);
            unset($value['ErrZone_id']);
            if (!empty($value['sec_id'])) {
                $data['insert_info'] = $this->M_sector->update_sector($value);
                redirect('C_sector');
            } else {
                $data['insert_info'] = $this->M_sector->add_sector($value);
                redirect('C_sector');
            }
        } else {
            $value['zone_info'] = $this->M_sector->get_zone();
            $this->load->view('V_sector_insert', $value);
        }
    }

    public function delete_sector($id = NULL) {
        if (!empty($id)) {
            $this->M_sector->delete_sector($id);
        }
        redirect('C_sector');
    }

    public function status_sector($id, $f = 0) {
        $value['sec_id'] = $id;
        $value['is_active'] = (int) $f;
//        print_r($value);
        $data['insert_info'] = $this->M_sector->update_sector($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

}
