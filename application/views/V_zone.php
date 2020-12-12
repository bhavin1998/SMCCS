<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Manage Zone - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="add zone, Manage zone, insert zone, Zone, update zone, insert new zone, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="Super admin can add zone and manage the zone details like add zone, update zone and deactivate zone.">

    <?php include("header_include.php"); ?>
</head>

<body class="other-pages">
    <!--header--->
    <header>
        <?php include("header_bar.php"); ?>
        <?php include("header_user_menu.php"); ?>
        <input id="UTCDate" name="UTCDate" type="hidden" value="26" />
    </header>
   
    <!--header--->
    <div class="container">
        <section class="main-section">
            <section class="inner-section">
                <div class="form">
                    <div class="page-heading">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-heading">
                                    <h1>View Zone</h1>
                                        <div class="btn-group" style="float: right;">
                                            <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa fa-tasks text-2x pad-r5"></i>
                                                Option
                                                <i class="fa fa-caret-down pad-l5"></i>
                                            </button>
                                            <div class="dropdown-menu dd">
                                                <div class="top-arrow"></div>
                                                <div class="profile-block">
                                                    <div class="row">
                                                        <div class="">
                                                            <div class="col-xs-12"><a href="<?php echo site_url('C_zone/add_new_zone'); ?>" class="col-xs-12">Add New Zone</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                            <!--                                <div class="text-right"><a class="button-control "><i class="fa fa-plus-circle pad-r10"></i>Lodge New Complaint</a></div>-->
                            
                            <div class="clearfix"></div>
                            <ul class="nav nav-tabs" role="tablist">
                                <!--                                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">My Complaints</a></li>-->
                            </ul>
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="home" style="overflow: auto;">
                                    <script src="/OnlineServices/Complaint/RecentComplaint?v=ZECIA8MWDmIT4fhtDJyGgB3jsHZRYi02-93okzDuS5c1"></script>
                                    <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Zone name</th>
                                                <th>Zone status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <?php
                                            foreach ($zone_info as $v_zone_info) {
                                            ?>
                                                <tr>
                                                    <td class="text-center"><?php echo $v_zone_info->z_id; ?></td>
                                                    <td class="text-center"><?php echo $v_zone_info->z_name; ?></td>
                                                    <td class="text-center">
                                                        <?php
                                                        if ($v_zone_info->is_active == 1) {
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
                                                                            if ($v_zone_info->is_active == 1) {
                                                                            ?>
                                                                                <div class="col-xs-12"><a href="<?php echo site_url('C_zone/status_zone/') . $v_zone_info->z_id; ?>/0" class="col-xs-12">Deactive</a></div>
                                                                            <?php
                                                                            } else {
                                                                            ?>
                                                                                <div class="col-xs-12"><a href="<?php echo site_url('C_zone/status_zone/') . $v_zone_info->z_id; ?>/1" class="col-xs-12">Active</a></div>
                                                                            <?php
                                                                            }
                                                                            ?>
                                                                            <div class="col-xs-12"><a href="<?php echo site_url('C_zone/add_new_zone/') . $v_zone_info->z_id; ?>" class="col-xs-12" onclick="">Edit</a></div>
                                                                            <div class="col-xs-12"><a href="<?php echo site_url('C_zone/delete_zone/') . $v_zone_info->z_id; ?>" class="col-xs-12" onclick="confirm('Are you sure !!!')">Delete</a></div>
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