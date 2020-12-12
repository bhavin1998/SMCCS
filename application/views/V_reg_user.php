<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Sign up page - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="Sign-up, registration, Registration new user, Signup page, create new user, new signup user, sign-up new user, Second time password, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="SMCCS in citizen can registration self and create a new account in application and post complaint.">

    <?php include("header_include.php"); ?>
    <script>
        //            function OpenOTPDiv()
        //            {
        //                document.getElementById("aa").click();
        //            }
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
                                <form Id="fmLoginDetails" action="<?php echo site_url("C_reg_user/setdata"); ?>" method="post">
                                    <input name="" type="hidden" value="" />
                                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="userregistration-details-heading">
                                                <div class="panel-title">
                                                    <a role="button" href="javascript:void(0)">
                                                        <span class="primary-color pad-r10">Step 1:</span> User Login Details
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="" class="" role="" aria-labelledby="">
                                                <div class="panel-body">
                                                    <div class="alert alert-info">Please enter the valid email address and mobile number, it will be used for OTP verification and login.</div>
                                                    <div class="row clearfix">
                                                        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label for="exampleInputEmail1">Email Address <span class="text-danger"> *</span></label>
                                                                <input autocomplete="off" class="form-control" maxlength="50" name="txtemail" type="Email" value="<?php
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
                                                                <label for="exampleInputPassword1">Password<span class="text-danger"> *</span></label>
                                                                <input autocomplete="off" class="form-control" maxlength="50" name="txtpass" type="password" value="<?php
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
                                                                <label for="exampleInputPassword1">Confirm Password Number <span class="text-danger"> *</span></label>
                                                                <input autocomplete="off" class="form-control" maxlength="50" name="txtconpass" type="password" value="<?php
                                                                                                                                                                        if (!empty($txtconpass)) {
                                                                                                                                                                            echo $txtconpass;
                                                                                                                                                                        }
                                                                                                                                                                        ?>" />
                                                                <span><?php
                                                                        if (!empty($Errconpass)) {
                                                                            echo $Errconpass;
                                                                        }
                                                                        ?>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="checkbox">
                                                        <label id="chkTermsService">
                                                            <input name="cbagree" type="checkbox" value="true" /><input name="IsTermServiceChecked" type="hidden" value="false" />
                                                            <span class="text-danger">*</span>By creating an account you agree to our <a href="" title="Terms and Service" target="_blank">Terms of Service</a>
                                                            and our <a href="" target="_blank">Privacy Policy</a>
                                                        </label>
                                                        <br />
                                                        <span style="color: red;font-weight: 600"><?php
                                                                                                    if (!empty($Errcbagree)) {
                                                                                                        echo $Errcbagree;
                                                                                                    }
                                                                                                    ?>
                                                        </span>
                                                    </div>
                                                    <button type="submut" id="btnLoginDetail" class="button-control"><i class="fa fa-check pad-r5"></i>Submit</button>
                                                    <button type="button" id="btnBack" class="button-control" onclick=""><i class="fa fa-arrow-circle-left pad-r5"></i>Back</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="hidden-xs hidden-sm col-md-4 col-lg-4">
                                <div class="text-center online-services-concept-image">
                                    <img src="../Images/icon-usersignup.png" alt="New User Signup" class="img-responsive" />
                                </div>
                                <div class="alert alert-tip">
                                    <p class="mar-b10">Dear Citizen ,</p>
                                    <p>Step-3 - <strong>E-mail Verification</strong> is mandatory to complete user registration. </p>
                                    <p>Please do not forget to verify the e-mail account by clicking on the verification sent to your email address. </p>
                                </div>
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