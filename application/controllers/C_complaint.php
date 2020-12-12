<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class C_complaint extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('M_complaint');
        $this->load->model('M_assign_complaint');
        $this->load->library('upload');
        $this->load->library('image_lib');
        if (empty($this->session->userdata('sup_id'))) {
            if (empty($this->session->userdata('sec_o_id'))) {
                if (empty($this->session->userdata('c_id'))) {
                    if (empty($this->session->userdata("w_id"))) {
                        redirect('C_login_user');
                    }
                }
            }
        }
    }

    public function index() {
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_complaint/index";
        $pagination["total_rows"] = $this->M_complaint->get_count();
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

        $data['complaint_info'] = $this->M_complaint->get_complaint(0, $pagination["per_page"], $page);
        $data['view_img'] = $this->M_complaint->get_img();
        $data['view_video'] = $this->M_complaint->get_video();
        $this->load->view('V_complaint', $data);
    }

    public function my_show_complaints($id,$sort="desc") {
        $pagination = array();
        $pagination["base_url"] = base_url() . "My-complaint/show/$id/$sort";
        $pagination["total_rows"] = $this->M_complaint->get_my_count($id);
        $pagination["per_page"] = 10;
        $pagination["uri_segment"] = 5;
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
        $page = ($this->uri->segment(5)) ? $this->uri->segment(5) : 0;
        $data["links"] = $this->pagination->create_links();

        $data['complaint_info'] = $this->M_complaint->get_my_complaint($id, $pagination["per_page"], $page,$sort);
        $this->load->view('V_show_my_complaint', $data);
    }

    public function cmp_for_sector_officer() {

        $data['sec_info'] = $this->M_complaint->get_pincode($this->session->userdata("sec_o_id"));
        $pincode = $data['sec_info'][0]->sec_job_pincode;
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_complaint/cmp_for_sector_officer";
        $pagination["total_rows"] = $this->M_complaint->get_complaint_sec_officer_count($pincode);
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
        $data['view_img'] = $this->M_complaint->get_img();
        $data['view_video'] = $this->M_complaint->get_video();
        $data['complaint_info'] = $this->M_complaint->get_complaint_sec_officer($pincode, $pagination["per_page"], $page);
        $this->load->view('V_complaint', $data);
    }

    public function cmp_for_worker_officer() {

        $data['wor_info'] = $this->M_complaint->get_w_pincode($this->session->userdata("w_id"));
        $pincode = $data['wor_info'][0]->w_job_pincode;
        $pagination = array();
        $pagination["base_url"] = base_url() . "C_complaint/cmp_for_sector_officer";
        $pagination["total_rows"] = $this->M_complaint->get_complaint_sec_officer_count($pincode);
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
        $data['view_img'] = $this->M_complaint->get_img();
        $data['view_video'] = $this->M_complaint->get_video();
        $data['complaint_info'] = $this->M_complaint->get_complaint_sec_officer($pincode, $pagination["per_page"], $page);
        $this->load->view('V_complaint', $data);
    }

    public function status_cmp($id, $f = NULL) {
        $value['post_cmp_id'] = $id;
        $value['status'] = $f;
        $data['update_cmp'] = $this->M_complaint->cmp_status_update($value);
        $refer = $this->agent->referrer();
        redirect($refer);
    }

    public function complaint_form() {
        $data['category'] = $this->M_complaint->get_category();
        $data['zone'] = $this->M_complaint->get_zone();
        $data['citizen'] = $this->M_complaint->get_citizen()[0];
        $this->load->view("V_new_complaint_form", $data);
    }

    public function post_complain() {
        $value['cit_id'] = $this->input->post('hcitizen');
        $value['sec_id'] = $this->input->post('ddlsector');
        $value['sub_ctg_id'] = $this->input->post('ddlsubcat');
        $value['cmp_location'] = $this->input->post('txtcmploc');
        $value['cmp_desc'] = $this->input->post('txtcomdisc');
        $value['Cfname'] = $this->input->post('ComplainerFName');
        $value['Clname'] = $this->input->post('ComplainerLName');
        $value['Caddress'] = $this->input->post('ComplainerAddress1');
        $value['Carea'] = $this->input->post('AreaName');

        $value['cat_id'] = $this->input->post('ddlcat');
        $value['z_id'] = $this->input->post('ddlzone');
        $value['status'] = "pending";
        if (empty($value['cit_id'])) {
            redirect('C_login_user');
        }
        if (empty($value['cat_id'])) {
            $value['Errcat_id'] = "Please select category";
        }
        if (empty($value['sub_ctg_id'])) {
            $value['Errsub_ctg_id'] = "Please select sub-category";
        }
        if (empty($value['sec_id'])) {
            $value['Errsec_id'] = "Please select Sector";
        }
        if (empty($value['z_id'])) {
            $value['Errz_id'] = "Please select zone";
        }
        if (empty($value['cmp_location'])) {
            $value['Errcmp_location'] = "Please Enter Location";
        } else {
            if (!preg_match('/^.{6,}$/', $value['cmp_location'])) {
                $value['Errcmp_location'] = "Invalid Location";
            }
        }
        if (empty($value['cmp_desc'])) {
            $value['Errcmp_desc'] = "Please Enter Description";
        } else {
            if (!preg_match('/^.{6,}$/', $value['cmp_desc'])) {
                $value['Errcmp_desc'] = "Invalid Description";
            }
        }
        if (empty($value['Cfname'])) {
            $value['ErrCfname'] = "Please Enter First Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['Cfname'])) {
                $value['ErrCfname'] = "Invalid First Name";
            }
        }
        if (empty($value['Clname'])) {
            $value['ErrClname'] = "Please Enter First Name";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['Clname'])) {
                $value['ErrClname'] = "Invalid First Name";
            }
        }
        if (empty($value['Caddress'])) {
            $value['ErrCaddress'] = "Please Enter Address";
        } else {
            if (!preg_match('/^.{6,}$/', $value['Caddress'])) {
                $value['ErrCaddress'] = "Invalid Address";
            }
        }
        if (empty($value['Carea'])) {
            $value['ErrCarea'] = "Please Enter area";
        } else {
            if (!preg_match('/^[a-zA-Z\s]+$/', $value['Carea'])) {
                $value['ErrCarea'] = "Invalid area";
            }
        }
        if (empty($value['Errcat_id']) &&
                empty($value['Errsub_ctg_id']) &&
                empty($value['Errsec_id']) &&
                empty($value['Errz_id']) &&
                empty($value['Errcmp_location']) &&
                empty($value['Errcmp_desc']) &&
                empty($value['ErrCfname']) &&
                empty($value['ErrClname']) &&
                empty($value['ErrCaddress']) &&
                empty($value['ErrCarea'])) {
            unset($value['Errcat_id']);
            unset($value['Errsub_ctg_id']);
            unset($value['Errsec_id']);
            unset($value['Errcmp_location']);
            unset($value['ErrCfname']);
            unset($value['ErrClname']);
            unset($value['ErrCaddress']);
            unset($value['ErrCarea']);
            $inserted_id = $this->M_complaint->insert_post_complaint($value);
            if (!empty($inserted_id)) {
                $temp = $value['cit_id'] . "-" . $value['sec_id'] . "-" . $inserted_id;
                $countfiles = count($_FILES['ComplaintPhotos']['name']);
                $countVideo = count($_FILES['ComplaintVideo']['name']);
                if (!empty($countfiles)) {
                    for ($i = 0; $i < $countfiles; $i++) {
                        if (!empty($_FILES['ComplaintPhotos']['name'][$i])) {
                            // Define new $_FILES array - $_FILES['file']
                            $_FILES['file']['name'] = $_FILES['ComplaintPhotos']['name'][$i];
                            $_FILES['file']['type'] = $_FILES['ComplaintPhotos']['type'][$i];
                            $_FILES['file']['tmp_name'] = $_FILES['ComplaintPhotos']['tmp_name'][$i];
                            $_FILES['file']['error'] = $_FILES['ComplaintPhotos']['error'][$i];
                            $_FILES['file']['size'] = $_FILES['ComplaintPhotos']['size'][$i];
                            $ex_temp = explode(".", $_FILES['ComplaintPhotos']['name'][$i]);
                            $extension = end($ex_temp);
                            // Set preference
                            $config['upload_path'] = './static/cmp_img';
                            $config['allowed_types'] = 'jpg|jpeg|png|gif';
                            $config['max_size'] = '5000'; // max_size in kb
                            $old_name = $temp . "($i)";
                            // File upload
                            $insert_img_data = array("cmp_post_id" => $inserted_id, "img_name" => $old_name);
                            $img_last_id = $this->M_complaint->cmp_img_insert($insert_img_data);
                            $config['file_name'] = $temp . "($img_last_id)." . $extension;
                            $img_sucess = $this->M_complaint->cmp_img_update($config['file_name'], $img_last_id);
                            if ($img_sucess == TRUE) {
                                $this->upload->initialize($config);
                                if ($this->upload->do_upload('file')) {
                                    $uploadedImage = $this->upload->data();
                                    $filename = $uploadedImage['file_name'];
                                    $source_path = './static/cmp_img/' . $filename;
                                    $target_path = './static/cmp_img/';
                                    $config_manip['image_library'] = 'gd2';
                                    $config_manip['source_image'] = $source_path;
                                    $config_manip['new_image'] = $target_path;
                                    $config_manip['maintain_ratio'] = TRUE;
                                    $config_manip['width'] = 500;
                                    $this->image_lib->initialize($config_manip);
                                    if (!$this->image_lib->resize()) {
                                        echo $this->image_lib->display_errors();
                                        die();
                                    }
                                }
                            }
                        }
                    }
                }
                if (!empty($countVideo)) {
                    for ($i = 0; $i < $countVideo; $i++) {
                        if (!empty($_FILES['ComplaintVideo']['name'][$i])) {
                            // Define new $_FILES array - $_FILES['file']
                            $_FILES['file_video']['name'] = $_FILES['ComplaintVideo']['name'][$i];
                            $_FILES['file_video']['type'] = $_FILES['ComplaintVideo']['type'][$i];
                            $_FILES['file_video']['tmp_name'] = $_FILES['ComplaintVideo']['tmp_name'][$i];
                            $_FILES['file_video']['error'] = $_FILES['ComplaintVideo']['error'][$i];
                            $_FILES['file_video']['size'] = $_FILES['ComplaintVideo']['size'][$i];
                            $ex_temp = explode(".", $_FILES['ComplaintVideo']['name'][$i]);
                            $extension = end($ex_temp);
                            // Set preference
                            $config['upload_path'] = './static/cmp_video';
                            $config['allowed_types'] = 'mp4|MP4';
                            $config['max_size'] = '10000'; // max_size in kb
                            $old_name = $temp . "($i)";
                            // File upload
                            $insert_video_data = array("cmp_post_id" => $inserted_id, "v_name" => $old_name);
                            $video_last_id = $this->M_complaint->cmp_video_insert($insert_video_data);
                            $config['file_name'] = $temp . "($video_last_id)." . $extension;
                            $video_sucess = $this->M_complaint->cmp_video_update($config['file_name'], $video_last_id);
                            if ($video_sucess == TRUE) {
                                $this->upload->initialize($config);
                                if ($this->upload->do_upload('file_video')) {
                                    $value["msg"] = "$.notify({"
                                            . "title: '<strong>Done</strong>',"
                                            . "message: 'complaint post successfully'"
                                            . "},{"
                                            . "type: 'danger'"
                                            . "});";
                                    $value['category'] = $this->M_complaint->get_category();
                                    $value['zone'] = $this->M_complaint->get_zone();
                                    $value['citizen'] = $this->M_complaint->get_citizen()[0];
                                    $this->load->view('V_new_complaint_form', $value);
                                }
                            }
                        }
                    }
                }
            }
        } else {
            $value["msg"] = "$.notify({"
                    . "title: '<strong>Validation errors !</strong>',"
                    . "message: 'pleace fill propar information'"
                    . "},{"
                    . "type: 'danger'"
                    . "});";
            $value['category'] = $this->M_complaint->get_category();
            $value['zone'] = $this->M_complaint->get_zone();
            $value['citizen'] = $this->M_complaint->get_citizen()[0];
            $this->load->view('V_new_complaint_form', $value);
        }
    }

}
