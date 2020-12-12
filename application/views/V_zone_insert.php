<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Add Zone - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
   
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="add zone, zone Registration, insert zone, Zone, new add zone, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="Super admin can new add zone.">

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
                                <h1>Add Zone</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row form" id="dvUSignup">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <form Id="" action="<?php echo site_url("C_zone/iu_zone"); ?>" method="post" enctype="multipart/form-data">
                            <input name="hdzid" type="hidden" value="<?php
                                                                        if (!empty($zone_info->z_id)) {
                                                                            echo $zone_info->z_id;
                                                                        }
                                                                        ?>" />
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                        <div class="panel-body">
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="">Zone Name <span class="text-danger"> *</span></label>
                                                        <input autocomplete="off" class="form-control" maxlength="50" name="txtzname" type="text" value="<?php
                                                                                                                                                            if (!empty($zone_info->z_name)) {
                                                                                                                                                                echo $zone_info->z_name;
                                                                                                                                                            }
                                                                                                                                                            if (!empty($z_name)) {
                                                                                                                                                                echo $z_name;
                                                                                                                                                            }
                                                                                                                                                            ?>" />
                                                        <span><?php
                                                                if (!empty($ErrZname)) {
                                                                    echo $ErrZname;
                                                                }
                                                                ?></span>
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