<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
    <head>
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
            <section class="main-section with-min-height">
                <section class="inner-section">
                    <div class="page-heading">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-heading">
                                    <h1 class="alternate">Emergence Cmp solver Registration</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form" id="dvUSignup">
                        <form Id="" action="<?php echo site_url('C_emergence_cmp_solver/iu_cmp_solver_user'); ?>" method="post">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input name="hdeid" type="hidden" value="<?php
                                if (!empty($emergence_cmp_solver_info->ecs_id)) {
                                    echo $emergence_cmp_solver_info->ecs_id;
                                }
                                ?>" /> 
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="alert alert-info"><strong>Note:</strong></div>
                                    <div class="panel panel-default">
                                        <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                            <div class="panel-body">
                                                <div class="row clearfix">
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">First Name <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtfname" type="text" value="<?php
                                                            if (!empty($emergence_cmp_solver_info->ecs_fname)) {
                                                                echo $emergence_cmp_solver_info->ecs_fname;
                                                            }
                                                            if (!empty($ecs_fname)) {
                                                                echo $ecs_fname;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errecs_fname)) {
                                                                    echo $Errecs_fname;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Last Name <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtlname" type="text" value="<?php
                                                            if (!empty($emergence_cmp_solver_info->ecs_lname)) {
                                                                echo $emergence_cmp_solver_info->ecs_lname;
                                                            }
                                                            if (!empty($ecs_lname)) {
                                                                echo $ecs_lname;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errecs_lname)) {
                                                                    echo $Errecs_lname;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Contact No <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtcontect" type="text" value="<?php
                                                            if (!empty($emergence_cmp_solver_info->ecs_contact_no)) {
                                                                echo $emergence_cmp_solver_info->ecs_contact_no;
                                                            }
                                                            if (!empty($ecs_contact_no)) {
                                                                echo $ecs_contact_no;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errecs_contact_no)) {
                                                                    echo $Errecs_contact_no;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Gendar <span class="text-danger"> *</span></label><br>
                                                            <label class="radio-inline">
                                                                <input name="rbgendar" type="radio" value="m" <?php
                                                                if (!empty($emergence_cmp_solver_info->ecs_gender) && $emergence_cmp_solver_info->ecs_gender == 'm') {
                                                                    echo "checked";
                                                                }
                                                                if (!empty($ecs_gender) && $ecs_gender == 'm') {
                                                                    echo "checked";
                                                                }
                                                                ?>> Male
                                                            </label>
                                                            <label class="radio-inline">
                                                                <input name="rbgendar" type="radio" value="f" <?php
                                                                if (!empty($emergence_cmp_solver_info->ecs_gender) && $emergence_cmp_solver_info->ecs_gender == 'f') {
                                                                    echo "checked";
                                                                }
                                                                if (!empty($ecs_gender) && $ecs_gender == 'f') {
                                                                    echo "checked";
                                                                }
                                                                ?>> Female
                                                            </label>
                                                            <span><?php
                                                                if (!empty($Errecs_gender)) {
                                                                    echo $Errecs_gender;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Pin-code No <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtpincode" type="text" value="<?php
                                                            if (!empty($emergence_cmp_solver_info->ecs_pincode)) {
                                                                echo $emergence_cmp_solver_info->ecs_pincode;
                                                            }
                                                            if (!empty($ecs_pincode)) {
                                                                echo $ecs_pincode;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errecs_pincode)) {
                                                                    echo $Errecs_pincode;
                                                                }
                                                                ?></span>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Sec Job Pin-code No <span class="text-danger"> *</span></label>
                                                            <select autocomplete="off" class="form-control" name="txtsecjobpincode">
                                                                <?php
                                                                if (!empty($emergence_cmp_solver_info->ecs_job_pincode)) {
                                                                    ?>
                                                                    <option value="<?php echo $emergence_cmp_solver_info->ecs_job_pincode; ?>"><?php echo $emergence_cmp_solver_info->ecs_job_pincode; ?></option>
                                                                    <?php
                                                                }
                                                                if (!empty($ecs_job_pincode)) {
                                                                    ?>
                                                                    <option value="<?php echo $ecs_job_pincode; ?>"><?php echo $ecs_job_pincode; ?></option>
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
                                                                if (!empty($Errecs_job_pincode)) {
                                                                    echo $Errecs_job_pincode;
                                                                }
                                                                ?></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">Email Address <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txtemail" type="Email" value="<?php
                                                            if (!empty($emergence_cmp_solver_info->lgn_email_id)) {
                                                                echo $emergence_cmp_solver_info->lgn_email_id;
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
                                                            if (!empty($emergence_cmp_solver_info->lgn_pwd)) {
                                                                echo $emergence_cmp_solver_info->lgn_pwd;
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
                                                                if (!empty($emergence_cmp_solver_info->ecs_address)) {
                                                                    echo $emergence_cmp_solver_info->ecs_address;
                                                                }
                                                                if (!empty($ecs_address)) {
                                                                    echo $ecs_address;
                                                                }
                                                                ?></textarea>
                                                            <span><?php
                                                                if (!empty($Errecs_address)) {
                                                                    echo $Errecs_address;
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
