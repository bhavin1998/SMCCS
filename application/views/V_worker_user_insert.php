<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Add worker - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Worker Registration, add worker, new worker Registration, Add new worker, worker, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="Sector admin can add worker and manage the worker user.">

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
            <section class="main-section with-min-height">
                <section class="inner-section">
                    <div class="page-heading">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-heading">
                                    <h1 class="page-heading">Worker Registration</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form" id="dvUSignup">
                        <form Id="" action="<?php echo site_url('C_worker_user/iu_worker_user'); ?>" method="post">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input name="hdwid" type="hidden" value="<?php
                                if (!empty($worker_info->w_id)) {
                                    echo $worker_info->w_id;
                                }
                                ?>" />
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <!-- <div class="alert alert-info"><strong>Note:</strong></div> -->
                                    <div class="panel panel-default">
                                        <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                            <div class="panel-body">
                                                <div class="row clearfix">
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">First Name <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtfname" type="text" value="<?php
                                                            if (!empty($worker_info->w_fname)) {
                                                                echo $worker_info->w_fname;
                                                            }
                                                            if (!empty($w_fname)) {
                                                                echo $w_fname;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errw_fname)) {
                                                                    echo $Errw_fname;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Last Name <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtlname" type="text" value="<?php
                                                            if (!empty($worker_info->w_lname)) {
                                                                echo $worker_info->w_lname;
                                                            }
                                                            if (!empty($w_lname)) {
                                                                echo $w_lname;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errw_lname)) {
                                                                    echo $Errw_lname;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Contact No <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtcontect" type="text" value="<?php
                                                            if (!empty($worker_info->w_contact_no)) {
                                                                echo $worker_info->w_contact_no;
                                                            }
                                                            if (!empty($w_contact_no)) {
                                                                echo $w_contact_no;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errw_contact_no)) {
                                                                    echo $Errw_contact_no;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Gendar <span class="text-danger"> *</span></label><br>
                                                            <label class="radio-inline">
                                                                <input name="rbgendar" type="radio" value="m" <?php
                                                                if (!empty($worker_info->w_gender) && $worker_info->w_gender == 'm') {
                                                                    echo "checked";
                                                                }
                                                                if (!empty($w_gender) && $w_gender == 'm') {
                                                                    echo "checked";
                                                                }
                                                                ?>> Male
                                                            </label>
                                                            <label class="radio-inline">
                                                                <input name="rbgendar" type="radio" value="f" <?php
                                                                if (!empty($worker_info->w_gender) && $worker_info->w_gender == 'f') {
                                                                    echo "checked";
                                                                }
                                                                if (!empty($w_gender) && $w_gender == 'f') {
                                                                    echo "checked";
                                                                }
                                                                ?>> Female
                                                            </label><br>
                                                            <span>
                                                                <?php
                                                                if (!empty($Errw_gender)) {
                                                                    echo $Errw_gender;
                                                                }
                                                                ?>
                                                            </span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Pin-code No <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtpincode" type="text" value="<?php
                                                            if (!empty($worker_info->w_pincode)) {
                                                                echo $worker_info->w_pincode;
                                                            }
                                                            if (!empty($w_pincode)) {
                                                                echo $w_pincode;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errw_pincode)) {
                                                                    echo $Errw_pincode;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Sec Job Pin-code No <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtwjobpincode" type="text" value="<?php
                                                            if (!empty($worker_info->w_job_pincode)) {
                                                                echo $worker_info->w_job_pincode;
                                                            }
                                                            if (!empty($w_job_pincode)) {
                                                                echo $w_job_pincode;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errw_pincode)) {
                                                                    echo $Errw_pincode;
                                                                }
                                                                ?></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">Email Address <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtemail" type="Email" value="<?php
                                                            if (!empty($worker_info->lgn_email_id)) {
                                                                echo $worker_info->lgn_email_id;
                                                            }
                                                            if (!empty($lgn_email_id)) {
                                                                echo $lgn_email_id;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errlgn_email_id)) {
                                                                    echo $Errlgn_email_id;
                                                                }
                                                                ?>
                                                            </span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Password <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtpass" type="password" value="<?php
                                                            if (!empty($worker_info->lgn_pwd)) {
                                                                echo $worker_info->lgn_pwd;
                                                            }
                                                            if (!empty($lgn_pwd)) {
                                                                echo $lgn_pwd;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errlgn_pwd)) {
                                                                    echo $Errlgn_pwd;
                                                                }
                                                                ?>
                                                            </span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Address <span class="text-danger"> *</span></label>
                                                            <textarea class="form-control" name="txtaddress"><?php
                                                                if (!empty($worker_info->w_address)) {
                                                                    echo $worker_info->w_address;
                                                                }
                                                                if (!empty($w_address)) {
                                                                    echo $w_address;
                                                                }
                                                                ?></textarea>
                                                            <span>
                                                                <?php
                                                                if (!empty($Errw_address)) {
                                                                    echo $Errw_address;
                                                                }
                                                                ?>
                                                            </span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <button type="submit" id="btnLoginDetail" class="button-control"><i class="fa fa-check pad-r5"></i>Submit</button>
                                                <button type="button" id="btnBack" class="button-control" onclick="window.location.href = & #39; /OnlineServices/Home / Login & #39; ;"><i class="fa fa-arrow-circle-left pad-r5"></i>Back</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

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