<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Add new sector page - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="New Sector add, Registration sector, Add new sector, sector, Add sector, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="SMCCS in Sector admin can add a new sector.">

    <?php include("header_include.php"); ?>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#success-alert").hide();
            $("#success-alert").on("load", function showAlert() {
                $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
                    $("#success-alert").slideUp(500);
                });
            });
        });
    </script>
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
        <section class="main-section with-min-height">
            <section class="inner-section">
                <div class="page-heading">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-heading">
                                <h1>Add Sector</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row form" id="dvUSignup">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <form Id="" action="<?php echo site_url("C_sector/iu_sector"); ?>" method="post" enctype="multipart/form-data">
                            <input name="hdid" type="hidden" value="<?php
                                                                    if (!empty($sec_info->sec_id)) {
                                                                        echo $sec_info->sec_id;
                                                                    }
                                                                    ?>" />
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                        <div class="panel-body">
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="">Select Zone <span class="text-danger"> </span></label>
                                                        <select class="form-control" name="ddlzone">
                                                            <option value="">Select Zone</option>
                                                            <?php
                                                            foreach ($zone_info as $v_zone_info) {
                                                                if ($sec_info->zone_id == $v_zone_info->z_id) {
                                                            ?>
                                                                    <option value="<?php echo $v_zone_info->z_id; ?>" selected><?php echo ucwords($v_zone_info->z_name); ?></option>
                                                                <?php
                                                                } else {
                                                                ?>
                                                                    <option value="<?php echo $v_zone_info->z_id; ?>"><?php echo ucwords($v_zone_info->z_name); ?></option>
                                                            <?php
                                                                }
                                                            }
                                                            ?>
                                                        </select>
                                                        <span><?php
                                                                if (!empty($ErrZone_id)) {
                                                                    echo $ErrZone_id;
                                                                }
                                                                ?></span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Sector Name <span class="text-danger"> *</span></label>
                                                        <input autocomplete="off" class="form-control" maxlength="50" name="txsecname" type="text" value="<?php
                                                                                                                                                            if (!empty($sec_info->sec_name)) {
                                                                                                                                                                echo $sec_info->sec_name;
                                                                                                                                                            }
                                                                                                                                                            if (!empty($sec_name)) {
                                                                                                                                                                echo $sec_name;
                                                                                                                                                            }
                                                                                                                                                            ?>" />
                                                        <span><?php
                                                                if (!empty($ErrSec_name)) {
                                                                    echo $ErrSec_name;
                                                                }
                                                                ?></span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Sector Pin <span class="text-danger"> *</span></label>
                                                        <input autocomplete="off" class="form-control" maxlength="50" name="txsecpin" type="text" value="<?php
                                                                                                                                                            if (!empty($sec_info->sec_pincode)) {
                                                                                                                                                                echo $sec_info->sec_pincode;
                                                                                                                                                            }
                                                                                                                                                            if (!empty($sec_pincode)) {
                                                                                                                                                                echo $sec_pincode;
                                                                                                                                                            }
                                                                                                                                                            ?>" />
                                                        <span><?php
                                                                if (!empty($ErrSec_pincode)) {
                                                                    echo $ErrSec_pincode;
                                                                }
                                                                ?></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" id="" class="button-control"><i class="fa fa-check pad-r5"></i>Submit</button>
                                            <a href="<?php echo site_url('C_sector'); ?>"><button type="button" class="button-control" onclick=""><i class="fa fa-arrow-circle-left pad-r5"></i>Back</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <?php if (!empty($insert_info->succes)) {
                ?>
                    <div>
                        <div class="alert alert-info alert-dismissible fade in" id="success-alert">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                            <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                        </div>
                    </div>
                <?php }
                ?>
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