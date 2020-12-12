<!DOCTYPE html>

<html lang="en">

    <head>
        <title>Edit Profile - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Edit Profile, view Profile, Profile, Best Profile, Profile, Beautiful profile, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="This page is edit profile all our system user on the profile.">

        <?php include("header_include.php"); ?>
        <script type="text/javascript">
            $(document).ready(function () {
                $('#zone').on('change', function () {
                    var zoneID = $(this).val();
                    // alert(countryID);
                    if (zoneID) {
                        //alert(categoryID);
                        $.ajax({
                            type: 'POST',
                            url: '<?php echo site_url("C_getdata/get_sector"); ?>',
                            data: 'zid=' + zoneID,
                            success: function (html) {
                                //alert(html);
                                $('#Wards').html(html);
                            }
                        });
                    }
                });
            });
        </script>
    </head>

    <body class="other-pages">
        <header>
            <?php include("header_bar.php"); ?>
            <?php include("header_user_menu.php"); ?>
        </header>

        <!-- Notification View -->

        <!-- Dynamic Page Body goes here -->
        <div class="page-wrapper innerpages " id="dvMainBody">
            <div class="container">
                <section class="main-section">
                    <section class="inner-section">
                        <div class="page-heading">
                            <div class="row">
                                <div class="ol-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-heading">
                                        <h1 class="page-heading">EDIT PROFILE</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="<?php echo site_url('C_editprofile/update_data'); ?>" id="profile-form" method="post">
                            <div class="block">
                                <div class="text-center">
                                    <div class="user-profile-wrapper">
                                        <div class="clearfix">
                                            <div class="pull-left">
                                                <img src="https://www.suratmunicipal.gov.in/OnlineServices/Images/man.jpg" alt="Gender Profile Image" class="img-circle mar-r30 mar-b10 img-thumbnail">
                                            </div>
                                            <div class="pull-left">
                                                <div class="text-3x text-bold mar-b10"><?php echo ucfirst($citizen_info->c_fname) . " " . ucfirst($citizen_info->c_lname); ?></div>
                                                <div class="mar-b5"><span class="text-bold"><?php echo $citizen_email->lgn_email_id; ?></span> (Registered Email)</div>
                                                <div class="mar-b20"><span class="text-bold"><?php echo $citizen_info->c_contact_no; ?></span> (Registered Mobile)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <a href="<?php echo site_url('C_editprofile/upload_user_img_view/' . $this->session->userdata("c_id")); ?>" title="Redirect to Change Profile photo" class="text-bold primary-color">Change Profile Image</a> 
                                    | 
                                    <a href="" title="Redirect to Change Password Page" class="text-bold primary-color">Change Password</a>
                                </div>
                                <hr>
                                <div id="user-details">
                                    <h2 class="mar-b30">Personal Details</h2>
                                    <div class="row clearfix mar-b30">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="FirstName">First Name <span class="text-danger">*</span></label>
                                                <input autocomplete="off" class="form-control" data-val="true" data-val-regex="Please enter alphabetic letter" data-val-regex-pattern="[A-Za-z ]*" data-val-required="Required" id="FirstName" maxlength="50" name="txtfname" type="text" value="<?php echo $citizen_info->c_fname; ?>" />
                                                <span class="field-validation-valid" data-valmsg-for="FirstName" data-valmsg-replace="true"></span>

                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="LastName">Last Name <span class="text-danger">*</span></label>
                                                <input autocomplete="off" class="form-control" data-val="true" data-val-regex="Please enter alphabetic letter" data-val-regex-pattern="[A-Za-z ]*" data-val-required="Required" id="LastName" maxlength="50" name="txtlname" type="text" value="<?php echo $citizen_info->c_lname; ?>" />
                                                <span class="field-validation-valid" data-valmsg-for="LastName" data-valmsg-replace="true"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix mar-b30">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <fieldset class="form-group">
                                                <legend>Gender <span class="text-danger">*</span></legend>
                                                <div>
                                                    <label class="radio-inline form-height" for="chkM">
                                                        <input <?php
                                                        if ($citizen_info->c_gender == 'm') {
                                                            echo "checked='checked'";
                                                        } else {
                                                            echo '';
                                                        }
                                                        ?> data-val="true" data-val-required="Required" id="chkM" name="gender" type="radio" value="M">Male
                                                    </label>
                                                    <label class="radio-inline form-height" for="chkF">
                                                        <input <?php
                                                        if ($citizen_info->c_gender == 'f') {
                                                            echo "checked='checked'";
                                                        } else {
                                                            echo '';
                                                        }
                                                        ?> id="chkF" name="gender" type="radio" value="f">Female
                                                    </label>                                                    
                                                    <span class="field-validation-valid" data-valmsg-for="Gender" data-valmsg-replace="true"></span>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="DateOfBirth">Date Of Birth <span class="text-danger">*</span></label>
                                                <input autocomplete="off" class="form-control datepicker" data-val="true" data-val-required="Required" id="DateOfBirth" maxlength="10" name="DateOfBirth" placeholder="dd-MM-yyyy" type="text" value="21-06-1997">
                                                <span class="field-validation-valid" data-valmsg-for="DateOfBirth" data-valmsg-replace="true"></span>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <br>
                                    <br>
                                    <h2 class="mar-b30">Current Address Details</h2>
                                    <div class="row clearfix mar-b30">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group">
                                                <label for="cAddress">Address</label>
                                                <textarea autocomplete="off" class="form-control" data-val="true" data-val-regex="Invalid input characters." data-val-regex-pattern="^[^<>!'&quot;`~\-<|>]+$" id="cAddress" maxlength="50" name="txtaddress" type="text"><?php echo $citizen_info->c_address; ?></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row clearfix mar-b30">
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="cZone">Sector Name</label>
                                                <select class="form-control" id="zone" name="ddlsector">
                                                    <option value="">Select Sector</option>
                                                    <?php
                                                    foreach ($sector as $v_sector) {
                                                        ?>
                                                        <option value="<?php echo $v_sector->sec_pincode; ?>" <?php
                                                        if ($citizen_info->c_pincode == $v_sector->sec_pincode) {
                                                            echo "selected";
                                                        }
                                                        ?>><?php echo $v_sector->sec_name; ?></option>
                                                                <?php
                                                            }
                                                            ?>
                                                </select>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                            <div class="action-contents transactions">
                                <ul class="list-unstyled action-btns">
                                    <li>
                                        <button type="submit" class="button-control"><span class="fa fa-check-circle pad-r5"></span>Update profile details</button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </section>
                </section>
            </div>
        </div>
        <?php include("footer_bar.php"); ?>
        <!--footer Include-->
        <?php include("footer_include.php"); ?>

    </body>

</html>