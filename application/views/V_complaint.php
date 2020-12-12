<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Complaint List - surat municipal corporation complaint system</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Manage complaint, view Complaint, Sector admin view complaint, Complaint location, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="This page in Sector admin manage the Complaint.">
        <?php include("header_include.php"); ?>
    </head>
    <body class="other-pages">
        <!--header--->
        <header>
            <?php include("header_bar.php"); ?>
            <?php include("header_user_menu.php"); ?>
            <input id="UTCDate" name="UTCDate" type="hidden" value="26" />
        </header>
<!--        <div id="dvWait" class="dvLoad">
            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i><span>Loading...</span>
        </div>-->
        <!--header--->
        <div class="container">
            <section class="main-section">
                <section class="inner-section">
                    <div class="form">
                        <div class="page-heading">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="page-heading">
                                        <h1 class="page-heading">View Complaint List</h1>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="other-options">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row form">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12 custom-tab">
                                <div class="clearfix"></div>
                                <ul class="nav nav-tabs" role="tablist">
                                </ul>
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane active" id="home" style="overflow: auto;">
                                        <script src="/OnlineServices/Complaint/RecentComplaint?v=ZECIA8MWDmIT4fhtDJyGgB3jsHZRYi02-93okzDuS5c1"></script>
                                        <div id="tblbirthenroll_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                                            <div class="pull-left">
                                                <div id="tblbirthenroll_filter" class="dataTables_filter"><label>Search<input type="search" class="form-control input-sm" placeholder="" aria-controls="tblbirthenroll"></label></div>
                                            </div>
                                            <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Complainer Name</th>
                                                        <th>Sector Name</th>
                                                        <th>Sub Category</th>
                                                        <th>Description</th>
                                                        <th>Location of Complaint</th>
                                                        <th>Posted Date</th>
                                                        <th>Complaint Status</th>
                                                        <th>Photo/Video</th>
                                                        <?php
                                                        foreach ($complaint_info as $v_complaint_info) {
                                                            if ($v_complaint_info->status == "completed") {
                                                                // echo "if condition";
                                                            } else {
                                                                if (!empty($this->session->userdata("sec_o_id"))) {
                                                                    ?>
                                                                    <th>Action</th>
                                                                    <?php
                                                                }
                                                                if (!empty($this->session->userdata("w_id"))) {
                                                                    ?>
                                                                    <th>Action</th>
                                                                    <?php
                                                                }
                                                            }
                                                        }
                                                        ?>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <?php
                                                    foreach ($complaint_info as $v_complaint_info) {
                                                        ?>
                                                        <tr>
                                                            <td class="text-center"><?php echo $v_complaint_info->post_cmp_id; ?></td>
                                                            <td class="text-center"><?php echo $v_complaint_info->c_fname . " " . $v_complaint_info->c_lname; ?></td>
                                                            <td class="text-center"><?php echo $v_complaint_info->sec_name; ?></td>
                                                            <td class="text-center"><?php echo $v_complaint_info->sub_name; ?></td>
                                                            <td class="text-center"><?php echo $v_complaint_info->cmp_desc; ?></td>
                                                            <td class="text-center"><?php echo $v_complaint_info->cmp_location; ?></td>
                                                            <td class="text-center"><?php
                                                                echo date("d-m-Y  h:i:sa", strtotime($v_complaint_info->cmp_pst_date));
                                                                ?>
                                                            </td>
                                                            <td class="text-center"><?php echo $v_complaint_info->status; ?></td>
                                                            <td class="text-center">
                                                                <?php
                                                                foreach ($view_img as $v_view_img) {
                                                                    if ($v_complaint_info->post_cmp_id == $v_view_img->cmp_post_id) {
                                                                        ?>
                                                                        <a target="_blank" title="Image" href="<?php echo base_url(); ?>static/cmp_img/<?php echo $v_view_img->img_name; ?>"><i class="fa fa-image fa-2x"></i></a>
                                                                        <?php
                                                                    }
                                                                }
                                                                foreach ($view_video as $v_view_video) {
                                                                    if ($v_complaint_info->post_cmp_id == $v_view_video->cmp_post_id) {
                                                                        ?>
                                                                        <a target="_blank" title="Video" href="<?php echo base_url(); ?>static/cmp_video/<?php echo $v_view_video->v_name; ?>"><i class="fa fa-video-camera fa-2x"></i></a>
                                                                        <?php
                                                                    }
                                                                }
                                                                ?>
                                                            </td>
                                                            <?php
                                                            if (!empty($this->session->userdata("sec_o_id"))) {
                                                                if ($v_complaint_info->status == "completed") {
                                                                    
                                                                } else {
                                                                    ?>
                                                                    <td class="text-center">
                                                                        <?php
                                                                        if ($v_complaint_info->status == "completed") {
                                                                            // echo "if condition";
                                                                        } else {
                                                                            ?>
                                                                            <div class="btn-group">
                                                                                <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    Action
                                                                                </button>
                                                                                <div class="dropdown-menu dd">
                                                                                    <div class="top-arrow"></div>
                                                                                    <div class="profile-block">
                                                                                        <div class="row">
                                                                                            <div class="">
                                                                                                <?php
                                                                                                if ($v_complaint_info->status == "pending") {
                                                                                                    ?>

                                                                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_complaint/status_cmp/') . $v_complaint_info->post_cmp_id; ?>/inprogress" class="col-xs-12">in progress</a></div>
                                                                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_complaint/status_cmp/') . $v_complaint_info->post_cmp_id; ?>/completed" class="col-xs-12">completed</a></div>
                                                                                                    <?php
                                                                                                }
                                                                                                if ($v_complaint_info->status == "inprogress") {
                                                                                                    ?>
                                                                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_complaint/status_cmp/') . $v_complaint_info->post_cmp_id; ?>/pending" class="col-xs-12">pending</a></div>
                                                                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_complaint/status_cmp/') . $v_complaint_info->post_cmp_id; ?>/completed" class="col-xs-12">completed</a></div>
                                                                                                    <?php
                                                                                                }
                                                                                                if ($v_complaint_info->status == "complete") {
                                                                                                    
                                                                                                }
                                                                                                ?>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <?php
                                                                        }
                                                                        ?>
                                                                    </td>
                                                                    <?php
                                                                }
                                                            }
                                                            if (!empty($this->session->userdata("w_id"))) {
                                                                ?>
                                                                <td class="text-center">
                                                                    <div class="btn-group">
                                                                        <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Action
                                                                        </button>
                                                                        <div class="dropdown-menu dd">
                                                                            <div class="top-arrow"></div>
                                                                            <div class="profile-block">
                                                                                <div class="row">
                                                                                    <div class="">
                                                                                        <?php
                                                                                        if ($v_complaint_info->status == "pending") {
                                                                                            ?>
                                                                                            <div class="col-xs-12"><a href="<?php echo site_url('C_complaint/status_cmp/') . $v_complaint_info->post_cmp_id; ?>/completed" class="col-xs-12">completed</a></div>
                                                                                            <?php
                                                                                        }
                                                                                        if ($v_complaint_info->status == "inprogress") {
                                                                                            ?>
                                                                                            <div class="col-xs-12"><a href="<?php echo site_url('C_complaint/status_cmp/') . $v_complaint_info->post_cmp_id; ?>/completed" class="col-xs-12">completed</a></div>
                                                                                            <?php
                                                                                        }
                                                                                        ?>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            <?php } ?>
                                                        </tr>
                                                        <?php
                                                    }
                                                    ?>
                                                </tfoot>
                                            </table>
                                            <div class="pull-right">
                                                <?php print($links); ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        <!-- Footer -->
        <?php include("footer_bar.php"); ?>
        <!--footer Include-->
        <?php include("footer_include.php"); ?>
        <!--footer Include-->
    </body>
</html>