<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Complaint launch - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
          
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Post new complaint, Create new complaint, Complaint, Add Complaint, Raised complaint , Complaint, Photo upload, Video upload, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="Citizen can post new complaint according own society problem there upload Photos and video with.">

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

        <script type="text/javascript">
            $(document).ready(function () {
<?php
if (!empty($msg)) {
    echo $msg;
}
?>
                $('#category').on('change', function () {
                    var categoryID = $(this).val();
                    // alert(countryID);
                    if (categoryID) {
                        //alert(categoryID);
                        $.ajax({
                            type: 'POST',
                            url: '<?php echo site_url("C_getdata/get_subcate"); ?>',
                            data: 'id=' + categoryID,
                            success: function (html) {
                                //alert(html);
                                $('#subcategory').html(html);
                            }
                        });
                    }
                });
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
        <div class="header-print text-center">
            <img src="/OnlineServices/Images/smc-logo.png" alt="Surat Municipal Corporation Logo" />
        </div>
        <header>
            <?php include("header_bar.php"); ?>
            <?php include("header_user_menu.php"); ?>
        </header>
        <!-- Notification View -->
        <!-- Dynamic Page Body goes here -->
        <div class="container">
            <section class="main-section with-min-height">
                <section class="inner-section">
                    <div class="page-heading">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-heading">
                                    <h1>Lodge New Complaint</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="<?php echo site_url('c_complaint/post_complain') ?>" enctype="multipart/form-data" id="Complaint-form" method="post">
                        <div class=" form form-complaint">
                            <input type="hidden" name="hcitizen" value="<?php echo $this->session->userdata("c_id"); ?>" />
                            <div id="advanced-search">
                                <div class="container">
                                    <div class="main-section-padding">
                                        <div id="complaint-details" class="mar-b25">
                                            <div class="group-heading hline secondary-color">Fill complaint details</div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="ddlComplaintCate"><span class="text-danger">*</span> Complaint Category</label>
                                                        <select id="category" name="ddlcat" class="form-control">
                                                            <option selected="" value="">Select Category</option>
                                                            <?php
                                                            foreach ($category as $v_category) {
                                                                ?>
                                                                <option value="<?php echo $v_category->cmp_id; ?>" <?php
                                                                if (!empty($cit_id)) {
                                                                    if ($v_category->cmp_id == $cat_id) {
                                                                        echo "selected";
                                                                    }
                                                                }
                                                                ?>><?php echo $v_category->cmp_type; ?>
                                                                </option>
                                                                <?php
                                                            }
                                                            ?>
                                                        </select>
                                                        <span class=""><?php
                                                            if (!empty($Errcat_id)) {
                                                                echo $Errcat_id;
                                                            }
                                                            ?></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                            <div class="form-group">
                                                                <label for="ComplaintCode"><span class="text-danger">*</span> Complaint Code</label>
                                                                <select name="ddlsubcat" class="form-control" id="subcategory">
                                                                    <option value="">Select Sub-Category</option>
                                                                </select>
                                                                <span class=""><?php
                                                                    if (!empty($Errsub_ctg_id)) {
                                                                        echo $Errsub_ctg_id;
                                                                    }
                                                                    ?></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row clearfix">
                                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label for="ZoneCode"><span class="text-danger">*</span> Zone</label>
                                                                <select name="ddlzone" class="form-control" id="zone">
                                                                    <option selected="" value="">Select zone</option>
                                                                    <?php
                                                                    foreach ($zone as $v_zone) {
                                                                        ?>
                                                                        <option value="<?php echo $v_zone->z_id; ?>"><?php echo $v_zone->z_name; ?></option>
                                                                        <?php
                                                                    }
                                                                    ?>
                                                                </select>
                                                                <span class=""><?php
                                                                    if (!empty($Errz_id)) {
                                                                        echo $Errz_id;
                                                                    }
                                                                    ?></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                            <div class="form-group">
                                                                <label for="ddlWards"><span class="text-danger">*</span> Ward</label>
                                                                <select class="form-control" id="Wards" name="ddlsector">
                                                                    <option value="">Select Sector</option>
                                                                </select>
                                                                <span class=""><?php
                                                                    if (!empty($Errsec_id)) {
                                                                        echo $Errsec_id;
                                                                    }
                                                                    ?></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div class="form-group">
                                                        <label for="complaintlocation">
                                                            Complaint Location
                                                            <!--                                                    <input type="button" class="button-control btnOpenPooup" data-toggle="modal" value="Select Location From Map" onclick="fnOpenLocationMapPopup()" />-->
                                                        </label>
                                                        <textarea class="form-control" name="txtcmploc" id="ComplaintLocation" cols="20" rows="4"></textarea>

                                                        <div class="row clearfix">
                                                            <div class="col-sm-12">
                                                                <span class=""><?php
                                                                    if (!empty($Errcmp_location)) {
                                                                        echo $Errcmp_location;
                                                                    }
                                                                    ?></span>
                                                            </div>
                                                            <div class="col-sm-7"></div>
                                                            <div class="col-sm-5 text-right">
                                                                <div class="text-danger">Remaining Characters <span id="charLeft"> 500</span> </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div class="form-group">
                                                        <label for="ComplaintDescription">Complaint Description</label>
                                                        <!--                                                <input type="checkbox" id="checkboxId" onclick="javascript: checkboxClickHandler()" style="display: none;" />-->
                                                        <textarea class="form-control" cols="20" id="ComplaintDescription" maxlength="500" name="txtcomdisc" rows="5"></textarea>

                                                        <div class="row clearfix">
                                                            <div class="col-sm-12">
                                                                <span class=""><?php
                                                                    if (!empty($Errcmp_desc)) {
                                                                        echo $Errcmp_desc;
                                                                    }
                                                                    ?></span>
                                                            </div>
                                                            <div class="col-sm-7"></div>
                                                            <div class="col-sm-5 text-right">
                                                                <div class="text-danger">Remaining Characters <span id="char_Left"> 500</span> </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="ComplaintDescription">Complaint Photo</label>
                                                        <span class="form-help">(By pressing Ctrl you can upload maximum 2 photos of maximum 2 MB size.)</span>
                                                        <div>
                                                            <input type="file" id="ComplaintPhotos" name="ComplaintPhotos[]" multiple style="display:inline-block;" />
                                                            <a href="javascript:void(0)" class="iClear">Clear</a>
                                                        </div>
                                                        <div class="row clearfix">
                                                            <div class="col-sm-12">
                                                                <span id="spnMsgComplaintPhoto" class="field-validation-error"></span>
                                                            </div>
                                                            <div class="col-sm-12"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                        <div class="form-group" id="divImgPreview">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="ComplaintDescription">Complaint Video</label>
                                                        <span class="form-help">(upload maximum 2 MB size. Only upload .mp4 files)</span>
                                                        <div>
                                                            <input type="file" id="ComplaintVideo" name="ComplaintVideo[]" multiple style="display:inline-block;" />
                                                            <a href="javascript:void(0)" class="vClear">Clear</a>
                                                        </div>
                                                        <div class="row clearfix">
                                                            <div class="col-sm-12">
                                                                <span id="spnMsgComplaintVideo" class="field-validation-error"></span>
                                                            </div>
                                                            <div class="col-sm-12"></div>
                                                        </div>
                                                    </div>
                                                    <span class="" data-valmsg-for="ComplaintDescription" data-valmsg-replace="true"></span>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                                    <div class="form-group" id="divVideoPreview">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="personal-details" class="bg-gray">
                                    <div class="container">
                                        <div class="main-section-padding">
                                            <div class="group-heading hline primary-color">Complainer's Personal Details</div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label for="ComplainerFName"><span class="text-danger">*</span> First Name</label>
                                                        <input class="form-control" id="ComplainerFName" maxlength="50" name="ComplainerFName" type="text" value="<?php echo $citizen->c_fname; ?>" />
                                                        <span class=""><?php
                                                            if (!empty($ErrCfname)) {
                                                                echo $ErrCfname;
                                                            }
                                                            ?></span>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label for="ComplainerLName"><span class="text-danger">*</span> Last Name</label>
                                                        <input class="form-control" data-val="true" id="ComplainerLName" maxlength="50" name="ComplainerLName" type="text" value="<?php echo $citizen->c_lname; ?>" />
                                                        <span class=""><?php
                                                            if (!empty($ErrClname)) {
                                                                echo $ErrClname;
                                                            }
                                                            ?></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label for="ComplainerAddress1"><span class="text-danger">*</span> Address</label>

                                                        <input class="form-control" id="ComplainerAddress1" maxlength="49" name="ComplainerAddress1" placeholder="Address Line 1" type="text" value="<?php echo $citizen->c_address; ?>" />
                                                        <span class=""><?php
                                                            if (!empty($ErrCaddress)) {
                                                                echo $ErrCaddress;
                                                            }
                                                            ?></span>
                                                    </div>
                                                </div>

                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label for="AreaName">Area</label>
                                                        <input class="form-control" id="AreaName" maxlength="49" name="AreaName" placeholder="Area Name" type="text" value="<?php echo $citizen->c_address; ?>" />
                                                        <span class=""><?php
                                                            if (!empty($ErrCarea)) {
                                                                echo $ErrCarea;
                                                            }
                                                            ?></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label for="Phone"><span class="text-danger">*</span> Mobile</label>

                                                        <input class="form-control" id="Mobile No." name="Phone" readonly="readonly" type="text" value="<?php echo $citizen->c_contact_no; ?>" />

                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <label for="EMail"><span class="text-danger">*</span> Email Address</label>

                                                        <input class="form-control" id="EMail" maxlength="50" name="EMail" readonly="readonly" type="text" value="<?php echo $citizen->lgn_email_id; ?>" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="main-section-padding">
                                    <div class="action-contents transactions">
                                        <div class="row clearfix">
                                            <div class="col-lg-6">

                                            </div>
                                            <div class="col-lg-6">
                                                <ul class="list-unstyled action-btns">
                                                    <li>
                                                        <button class="button-control inverse" id="btnClear" type="reset"><i class="fa fa-refresh pad-r5"></i>Clear Form</button>
                                                    </li>
                                                    <li>
                                                        <button class="button-control" id="" type="submit"><i class="fa fa-check-circle pad-r5"></i>Submit Complaint</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <!-- Modal -->
                    <div id="mdlLocationPopup" class="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
                        <div class="modal-dialog modal-lg">
                            <!-- Modal content-->
                            <div class="modal-content" style="height:100%; width:100%;">
                                <div class="modal-header">
                                    <h4 class="modal-title">Complaint Location</h4>
                                </div>
                                <div class="modal-body" style="height:100%; width:100%;">
                                    <div class="map-wrapper">
                                        <div class="pac-card" id="pac-card">
                                            <div>
                                                <div id="title">
                                                    Search your Location here
                                                </div>
                                            </div>
                                            <div id="pac-container">
                                                <input id="pac-input" type="text" placeholder="Enter a location">
                                            </div>
                                        </div>
                                        <div id="map"></div>
                                        <div id="infowindow-content">
                                            <img src="" width="16" height="16" id="place-icon">
                                            <span id="place-name" class="title"></span><br>
                                            <span id="place-address"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <span>To finish selection click <button id="btnGetLocation" type="button" class="btn btn-primary">OK</button> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input id="dataPartRepo" type="hidden" />
                    </div>

                    </div>
                    <div id="dialog-confirm">
                    </div>
                    <!-- Footer -->


                    <?php include("footer_bar.php"); ?>
                    <!--footer Include-->
                    <?php include("footer_include.php"); ?>

                    <script src="<?php echo base_url(); ?>static/js/oprations.js"></script>
                    </body>

                    </html>