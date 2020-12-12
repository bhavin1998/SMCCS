<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>

        <title>Citizen details insert - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="citizen, insert details, citizen profile, details, citizen address, Zone and sector, Profile photo, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="This page in citizen details inserts into the SMCCS web application.">

        <?php include("header_include.php"); ?>
        <script type="text/javascript" src="<?php echo base_url(); ?>static/easytimer.js-master/dist/easytimer.min.js"></script>
        <script type="text/javascript">

        </script>
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

        <!-- Notification View -->
        <div class="page-wrapper innerpages " id="dvMainBody">
            <div class="container">
                <section class="main-section with-min-height">
                    <section class="inner-section">
                        <div id="dvUSignup">
                            <div class="page-heading">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="page-heading">
                                            <h1 class="alternate">New User Signup</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="TermsAndService" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Terms and Service</h4>
                                        </div>
                                        <div class="modal-body">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="PrivacyPolicy" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Privacy Policy</h4>
                                        </div>
                                        <div class="modal-body">

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <form Id="fmLoginDetails" action="<?php echo site_url("C_reg_user/other_detail"); ?>" method="post">
                                        <input name="" type="hidden" value="" />
                                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div class="panel panel-default">
                                                <div class="panel-heading" role="tab" id="userregistration-details-heading">
                                                    <div class="panel-title">
                                                        <a role="button" href="javascript:void(0)">
                                                            <span class="primary-color pad-r10">Step 3:</span>Account completion
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="" class="" role="" aria-labelledby="">
                                                    <div class="panel-body">
                                                        <div class="row clearfix" id="password-generation">
                                                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail1">First name<span class="text-danger"> *</span></label>
                                                                    <input autocomplete="off" class="form-control" maxlength="50" name="txtfname" type="text" value="<?php
                                                                    if (!empty($c_fname)) {
                                                                        echo $c_fname;
                                                                    }
                                                                    ?>" />
                                                                    <span><?php
                                                                        if (!empty($Errc_fname)) {
                                                                            echo $Errc_fname;
                                                                        }
                                                                        ?>
                                                                    </span>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail1">Last name<span class="text-danger"> *</span></label>
                                                                    <input autocomplete="off" class="form-control" maxlength="50" name="txtlname" type="text" value="<?php
                                                                    if (!empty($c_lname)) {
                                                                        echo $c_lname;
                                                                    }
                                                                    ?>" />
                                                                    <span><?php
                                                                        if (!empty($Errc_lname)) {
                                                                            echo $Errc_lname;
                                                                        }
                                                                        ?>
                                                                    </span>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail1">Contact No<span class="text-danger"> *</span></label>
                                                                    <input autocomplete="off" class="form-control" maxlength="50" name="txtnumber" type="number" value="<?php
                                                                    if (!empty($c_contact_no)) {
                                                                        echo $c_contact_no;
                                                                    }
                                                                    ?>" />
                                                                    <span><?php
                                                                        if (!empty($Errc_contact_no)) {
                                                                            echo $Errc_contact_no;
                                                                        }
                                                                        ?>
                                                                    </span>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="">Gendar<span class="text-danger"> *</span></label><br>
                                                                    <label class="radio-inline">
                                                                        <input name="rbgendar" type="radio" value="m" <?php
                                                                        if (!empty($c_gender) && $c_gender == 'm') {
                                                                            echo "checked";
                                                                        }
                                                                        ?>> Male
                                                                    </label>
                                                                    <label class="radio-inline">
                                                                        <input name="rbgendar" type="radio" value="f" <?php
                                                                        if (!empty($c_gender) && $c_gender == 'f') {
                                                                            echo "checked";
                                                                        }
                                                                        ?>> Female
                                                                    </label>
                                                                    <span><?php
                                                                        if (!empty($Errc_gender)) {
                                                                            echo $Errc_gender;
                                                                        }
                                                                        ?></span>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail1">Address<span class="text-danger"> *</span></label>
                                                                    <textarea autocomplete="off" class="form-control" maxlength="50" name="txtaddress"><?php
                                                                        if (!empty($c_address)) {
                                                                            echo $c_address;
                                                                        }
                                                                        ?></textarea>
                                                                    <span><?php
                                                                        if (!empty($Errc_address)) {
                                                                            echo $Errc_address;
                                                                        }
                                                                        ?>
                                                                    </span>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail1">Pin-code<span class="text-danger"> *</span></label>
                                                                    <input autocomplete="off" class="form-control" maxlength="50" name="txtpin" type="number" value="<?php
                                                                    if (!empty($c_pincode)) {
                                                                        echo $c_pincode;
                                                                    }
                                                                    ?>" /><br>
                                                                    <span><?php
                                                                        if (!empty($Errc_pincode)) {
                                                                            echo $Errc_pincode;
                                                                        }
                                                                        ?>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="button-control"><i class="fa fa-check-circle pad-r5"></i>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
        <div id="dialog-confirm">
        </div>
        <!-- Footer -->
        <?php include("footer_bar.php"); ?>
        <!--footer Include-->
        <?php include("footer_include.php"); ?>
        <!--footer Include-->
    </body>
</html>