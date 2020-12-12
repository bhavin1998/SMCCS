<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>

        <title>verify OTP - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="OTP, Verify OTP, New user verification, Confirm OTP, Verify OTP, Verify otp, Verify otp online, Verify mobile number with otp, Verify through otp, Otp verify, Verify with otp,smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="This page Verify sent OTP on register email id.">

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
                                    <form Id="fmLoginDetails" action="<?php echo site_url("C_reg_user/submit_otp"); ?>" method="post">
                                        <input name="" type="hidden" value="" />
                                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div class="panel panel-default">
                                                <div class="panel-heading" role="tab" id="userregistration-details-heading">
                                                    <div class="panel-title">
                                                        <a role="button" href="javascript:void(0)">
                                                            <span class="primary-color pad-r10">Step 2:</span> Varify Email Address
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="" class="" role="" aria-labelledby="">
                                                    <div class="panel-body">
                                                        <div class="row clearfix">
                                                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail1">Enter OTP <span class="text-danger"> *</span></label>
                                                                    <input autocomplete="off" class="form-control" maxlength="50" name="txtotp" type="number" value="<?php ?>" />
                                                                    <span><?php
                                                                        if (!empty($Errotp)) {
                                                                            echo $Errotp;
                                                                        }
                                                                        ?>
                                                                        <div id="countdownExample">
                                                                            <div class="values"></div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="submut" id="btnLoginDetail" class="button-control"><i class="fa fa-check pad-r5"></i>verify</button>
                                                        <button type="button" id="btnBack" class="button-control" onclick=""><i class="fa fa-repeat pad-r5"></i><a href="<?php echo site_url("C_reg_user/ConfirmEmail") . "/" . base64_encode($this->session->userdata("sender_email")); ?>">Resend otp</a></button>
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