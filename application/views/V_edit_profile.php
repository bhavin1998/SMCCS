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
                            <div class="row form userprofile">
                                <div class="col-sm-4">
                                    <div class="user-profile-wrapper">
                                        <div class="user-profile-details">
                                            <div class="form-group mar-b30">
                                                <label>Full Name</label>
                                                <div class="details"><?php echo ucfirst($citizen_info->c_fname) . " " . ucfirst($citizen_info->c_lname); ?></div>
                                            </div>
                                            <div class="form-group mar-b30">
                                                <label>Registered Email Address</label>
                                                <div class="details"><?php echo $citizen_email->lgn_email_id; ?></div>
                                            </div>
                                            <div class="form-group">
                                                <label>Registered Mobile Number</label>
                                                <div class="details"><?php echo $citizen_info->c_contact_no; ?></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="block">
                                        <input id="UserID" name="UserID" type="hidden" value="<?php echo $citizen_info->c_id; ?>" />
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
                                            <!-- <div class="row clearfix mar-b30">
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="Gender">Gender <span class="text-danger">*</span></label>
                                                        <div>
                                                            <label class="radio-inline form-height">
                                                                <input data-val="true" data-val-required="Required" id="chkM" name="gender" type="radio" value="m" <?php
                                            // if ($citizen_info->c_gender == "m") {
                                            //     echo "checked";
                                            // }
                                            // 
                                            ?> />Male
                                                            </label>
                                                            <label class="radio-inline form-height">
                                                                <input id="chkF" name="gender" type="radio" value="f" <?php
                                            // if ($citizen_info->c_gender == "f") {
                                            //     echo "checked";
                                            // }
                                            // 
                                            ?> />Female
                                                            </label>
                                                            <span class="field-validation-valid" data-valmsg-for="Gender" data-valmsg-replace="true"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <br />
                                            <br />
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
                                                            <option selected="" value="">Select Sector</option>
                                                            <?php
                                                            foreach ($sector as $v_sector) {
                                                                ?>
                                                                <option value="<?php echo $v_sector->sec_pincode; ?>"><?php echo $v_sector->sec_name; ?></option>
                                                                <?php
                                                            }
                                                            ?>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="action-contents transactions" style="padding: 22px 0;">
                                                <ul class="list-unstyled action-btns">
                                                    <li>
                                                        <button type="submit" class="button-control"><i class="fa fa-check-circle pad-r5"></i>Update profile details</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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