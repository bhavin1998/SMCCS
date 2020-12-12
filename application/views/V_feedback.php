<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>

        <title>Feedback - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Edit feedback, Manage feedback, feedback, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="This page is manage the feedback.">

        <?php include("header_include.php"); ?>
    </head>

    <body class="other-pages">
        <!--header--->
        <header>
            <?php include("header_bar.php"); ?>
            <?php include("header_user_menu.php"); ?>

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
                                        <h1 class="page-heading">View Feedback</h1>
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
                                <ul class="nav nav-tabs" role="tablist">
                                </ul>
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane active" id="home" style="overflow: auto;">
                                        <script src="/OnlineServices/Complaint/RecentComplaint?v=ZECIA8MWDmIT4fhtDJyGgB3jsHZRYi02-93okzDuS5c1"></script>
                                        <div id="tblbirthenroll_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                                            <div class="pull-left">
                                                <div id="tblbirthenroll_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="tblbirthenroll"></label></div>
                                            </div>
                                            <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Citizen name</th>
                                                        <th>Feedback description</th>
                                                        <th>Feedback status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <?php
                                                    foreach ($feedback_info as $v_feedback_info) {
                                                        ?>
                                                        <tr>
                                                            <td class="text-center"><?php echo $v_feedback_info->f_id; ?></td>
                                                            <td class="text-center"><?php echo $v_feedback_info->c_fname . " " . $v_feedback_info->c_lname; ?></td>
                                                            <td class="text-center"><?php echo $v_feedback_info->fd_desc; ?></td>
                                                            <td class="text-center">
                                                                <?php
                                                                if ($v_feedback_info->is_active == 1) {
                                                                    echo "Active";
                                                                } else {
                                                                    echo "Deactive";
                                                                }
                                                                ?>
                                                            </td>
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
                                                                                    if ($v_feedback_info->is_active == 1) {
                                                                                        ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('c_feedback/status_feedback/') . $v_feedback_info->f_id; ?>/0" class="col-xs-12">Deactive</a></div>
                                                                                        <?php
                                                                                    } else {
                                                                                        ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('c_feedback/status_feedback/') . $v_feedback_info->f_id; ?>/1" class="col-xs-12">Active</a></div>
                                                                                        <?php
                                                                                    }
                                                                                    ?>
                                                                                    <div class="col-xs-12"><a href="<?php echo site_url('c_feedback/delete_feedback/') . $v_feedback_info->f_id; ?>" class="col-xs-12" onclick="confirm('Are you sure !!!')">Delete</a></div>
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