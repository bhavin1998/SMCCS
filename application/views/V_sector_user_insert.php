<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Sector Admin insert page - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="New Sector admin, Registration sector admin, Add new sector admin, sector admin, Add sector user, New user, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="Super admin add new sector admin into the system and sector admin can access our SMCCS web application.">

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
                                    <h1>New Sector Officer Registration</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form" id="dvUSignup">
                        <form Id="" action="<?php echo site_url('C_sector_officer/iu_sector_user'); ?>" method="post">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input name="hdsid" type="hidden" value="<?php
                                if (!empty($sec_user_info->sec_o_id)) {
                                    echo $sec_user_info->sec_o_id;
                                }
                                ?>" />
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                            <div class="panel-body">
                                                <div class="row clearfix">
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">First Name <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtfname" type="text" value="<?php
                                                            if (!empty($sec_user_info->sec_fname)) {
                                                                echo $sec_user_info->sec_fname;
                                                            }
                                                            if (!empty($sec_fname)) {
                                                                echo $sec_fname;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errsec_fname)) {
                                                                    echo $Errsec_fname;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Last Name <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtlname" type="text" value="<?php
                                                            if (!empty($sec_user_info->sec_lname)) {
                                                                echo $sec_user_info->sec_lname;
                                                            }
                                                            if (!empty($sec_lname)) {
                                                                echo $sec_lname;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errsec_lname)) {
                                                                    echo $Errsec_lname;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Contact No <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtcontect" type="text" value="<?php
                                                            if (!empty($sec_user_info->sec_contact_no)) {
                                                                echo $sec_user_info->sec_contact_no;
                                                            }
                                                            if (!empty($sec_contact_no)) {
                                                                echo $sec_contact_no;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errsec_contact_no)) {
                                                                    echo $Errsec_contact_no;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Gendar <span class="text-danger"> *</span></label><br>
                                                            <label class="radio-inline">
                                                                <input name="rbgendar" type="radio" value="m" <?php
                                                                if (!empty($sec_user_info->sec_gender) && $sec_user_info->sec_gender == 'm') {
                                                                    echo "checked";
                                                                }
                                                                if (!empty($sec_gender) && $sec_gender == 'm') {
                                                                    echo "checked";
                                                                }
                                                                ?>> Male
                                                            </label>
                                                            <label class="radio-inline">
                                                                <input name="rbgendar" type="radio" value="f" <?php
                                                                if (!empty($sec_user_info->sec_gender) && $sec_user_info->sec_gender == 'f') {
                                                                    echo "checked";
                                                                }
                                                                if (!empty($sec_gender) && $sec_gender == 'f') {
                                                                    echo "checked";
                                                                }
                                                                ?>> Female
                                                            </label>
                                                            <span><?php
                                                                if (!empty($Errsec_gender)) {
                                                                    echo $Errsec_gender;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Pin-code No <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtpincode" type="text" value="<?php
                                                            if (!empty($sec_user_info->sec_pincode)) {
                                                                echo $sec_user_info->sec_pincode;
                                                            }
                                                            if (!empty($sec_pincode)) {
                                                                echo $sec_pincode;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errsec_pincode)) {
                                                                    echo $Errsec_pincode;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Sec Job Pin-code No <span class="text-danger"> *</span></label>
                                                            <select autocomplete="off" class="form-control" name="txtsecjobpincode">
                                                                <?php
                                                                if (!empty($sec_user_info->sec_job_pincode)) {
                                                                    ?>
                                                                    <option value="<?php echo $sec_user_info->sec_job_pincode; ?>"><?php echo $sec_user_info->sec_job_pincode; ?></option>
                                                                    <?php
                                                                }
                                                                if (!empty($sec_job_pincode)) {
                                                                    ?>
                                                                    <option value="<?php echo $sec_job_pincode; ?>"><?php echo $sec_job_pincode; ?></option>
                                                                    <?php
                                                                }

                                                                foreach ($sector_info as $v_sector_info) {
                                                                    ?>
                                                                    <option value="<?php echo $v_sector_info->sec_pincode; ?>"><?php echo $v_sector_info->sec_name; ?></option>
                                                                    <?php
                                                                }
                                                                ?>
                                                            </select>

                                                            <span><?php
                                                                if (!empty($Errsec_job_pincode)) {
                                                                    echo $Errsec_job_pincode;
                                                                }
                                                                ?></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">Email Address <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtemail" type="Email" value="<?php
                                                            if (!empty($sec_user_info->lgn_email_id)) {
                                                                echo $sec_user_info->lgn_email_id;
                                                            }
                                                            if (!empty($lgn_email_id)) {
                                                                echo $lgn_email_id;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errlgn_email_id)) {
                                                                    echo $Errlgn_email_id;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Password <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtpass" type="password" value="<?php
                                                            if (!empty($sec_user_info->lgn_pwd)) {
                                                                echo $sec_user_info->lgn_pwd;
                                                            }
                                                            if (!empty($lgn_pwd)) {
                                                                echo $lgn_pwd;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errlgn_pwd)) {
                                                                    echo $Errlgn_pwd;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Address <span class="text-danger"> *</span></label>
                                                            <textarea class="form-control" name="txtaddress"><?php
                                                                if (!empty($sec_user_info->sec_address)) {
                                                                    echo $sec_user_info->sec_address;
                                                                }
                                                                if (!empty($sec_address)) {
                                                                    echo $sec_address;
                                                                }
                                                                ?></textarea>
                                                            <span><?php
                                                                if (!empty($Errsec_address)) {
                                                                    echo $Errsec_address;
                                                                }
                                                                ?></span>
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