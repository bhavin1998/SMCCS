<!DOCTYPE html>
<?php
if ($this->session->userdata('type_id') == 1) {
    $fname = $citizen_info->sup_fname;
    $lname = $citizen_info->sup_lname;
    $email = $citizen_email->lgn_email_id;
    $contect = $citizen_info->sup_contact_no;
} elseif ($this->session->userdata('type_id') == 2) {
    $fname = $citizen_info->sec_fname;
    $lname = $citizen_info->sec_lname;
    $email = $citizen_email->lgn_email_id;
    $contect = $citizen_info->sec_contact_no;
} elseif ($this->session->userdata('type_id') == 3) {
    $fname = $citizen_info->c_fname;
    $lname = $citizen_info->c_lname;
    $email = $citizen_email->lgn_email_id;
    $contect = $citizen_info->c_contact_no;
} elseif ($this->session->userdata('type_id') == 4) {
    $fname = $citizen_info->w_fname;
    $lname = $citizen_info->w_lname;
    $email = $citizen_email->lgn_email_id;
    $contect = $citizen_info->w_contact_no;
} elseif ($this->session->userdata('type_id') == 5) {
    $fname = $citizen_info->ecs_fname;
    $lname = $citizen_info->ecs_lname;
    $email = $citizen_email->lgn_email_id;
    $contect = $citizen_info->ecs_contact_no;
}
?>
<html lang="en">

    <head>
        <title>Edit Profile - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Edit Profile, view Profile, Profile, Best Profile, Profile, Beautiful profile, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="This page is edit profile all our system user on the profile.">

        <?php include("header_include.php"); ?>       
        <style>
            .imgPreview {
                max-height: 200px;
                max-width: 200px;
                border: 1px solid #ccc;
                /*margin-bottom: 2px;*/
            }

            .divImgPreviewParent {
                text-align: center;
                display: block;
                float: left;
                margin: 0 5px 5px 0;
            }

            a.aClear {
                color: red;
                text-decoration: underline;
            }

            .map-wrapper {
                position: relative;
                z-index: 9;
                height: 500px;
                overflow-y: auto;
            }

            .btnOpenPooup {
                padding: 5px 10px;
            }

            /* Always set the map height explicitly to define the size of the div
                    * element that contains the map. */
            #map {
                height: 100%;
            }

            /* Optional: Makes the sample page fill the window. */
            /*html, body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }
            
                #description {
                    font-family: Roboto;
                    font-size: 15px;
                    font-weight: 300;
                }*/

            #infowindow-content .title {
                font-weight: bold;
            }

            #infowindow-content {
                display: none;
            }

            #map #infowindow-content {
                display: inline;
            }

            .pac-card {
                margin: 10px 10px 0 0;
                border-radius: 2px 0 0 2px;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                outline: none;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                background-color: #fff;
                font-family: Roboto;
                z-index: 999;
                width: 40%;
            }

            #pac-container {
                padding: 12px;
            }

            .pac-container {
                z-index: 2147483647 !important;
            }

            .pac-controls {
                display: inline-block;
                padding: 5px 11px;
            }

            .pac-controls label {
                font-family: Roboto;
                font-size: 13px;
                font-weight: 300;
            }

            #pac-input {
                background-color: #fff;
                font-family: Roboto;
                font-size: 15px;
                font-weight: 300;
                padding: 2px 5px;
                text-overflow: ellipsis;
                width: 100%;
            }

            #pac-input:focus {
                border-color: #4d90fe;
            }

            #title {
                color: #fff;
                background-color: #4d90fe;
                font-size: 15px;
                font-weight: 500;
                padding: 6px 12px;
            }
        </style>

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
                        <form action="<?php echo site_url('C_editprofile/upload_user_img') ?>" id="profile-form" method="post" enctype="multipart/form-data">
                            <div class="block">
                                <div class="text-center">
                                    <div class="user-profile-wrapper">
                                        <div class="clearfix">
                                            <div class="pull-left">
                                                <div class="text-3x text-bold mar-b10"><?php echo ucfirst($fname) . " " . ucfirst($lname); ?></div>
                                                <div class="mar-b5"><span class="text-bold"><?php echo $email; ?></span> (Registered Email)</div>
                                                <div class="mar-b20"><span class="text-bold"><?php echo $contect; ?></span> (Registered Mobile)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <a href="" title="Redirect to Change Password Page" class="text-bold primary-color">Change Password</a>
                                </div>
                                <hr>
                                <div id="user-details">
                                    <h2 class="mar-b30">Change Image</h2>
                                    <div class="row clearfix mar-b30" style="margin-left: 25%;margin-right: 25%;">
                                        <div align="center" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group">
                                                <label for="FirstName">
                                                    <div class="pull-left">

                                                        <div id="divImgPreview">
                                                            <img src="<?php echo base_url(); ?>/static/Images/man.jpg" alt="Gender Profile Image" class="img-circle mar-r30 mar-b10 img-thumbnail">
                                                        </div>
                                                    </div>
                                                </label>
                                                <input class="form-control" name="ProfilePhoto" type="file" value="" id="ProfilePhoto" style="display:inline-block;" />
                                                <br><br>
                                                <button class="pClear button-control inverse" type="reset"><i class="fa fa-refresh pad-r5"></i>Clear</button>
                                                <span class="field-validation-valid" data-valmsg-for="FirstName" data-valmsg-replace="true"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="action-contents transactions">
                                <ul class="list-unstyled action-btns">
                                    <li>
                                        <button type="submit" class="button-control"><span class="fa fa-check-circle pad-r5"></span>Update profile Photo</button>
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
        <script src="<?php echo base_url(); ?>static/js/oprations.js"></script>
    </body>
</html>