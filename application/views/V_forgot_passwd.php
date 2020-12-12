<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Forgot Password - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Forgot Password, Forgot my password, password, forgot, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="SMCCS is provide facilities to user forgot the password. if any user has to remeber password then forgot password and create the new password.">

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
                                    <h1 class="alternate">Forgot Password</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form" id="dvUSignup">
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <form Id="" action="<?php echo site_url("C_forgot_passwd/send_rec_otp"); ?>" method="post" enctype="multipart/form-data">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                            <div class="panel-body">
                                                <div class="row clearfix">
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="txtEmail">Registered Email Address</label>
                                                            <input autocomplete="off" class="form-control" data-val="true" data-val-required="Please enter email address" id="txtEmail" maxlength="50" name="txtemail" type="email" value="" />
                                                            <span class="field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" id="" class="button-control"><i class="fa fa-check pad-r5"></i>Submit</button>
                                                <a href="javascript:window.history.go(-1);"><button type="button" class="button-control" onclick=""><i class="fa fa-arrow-circle-left pad-r5"></i>Back</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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