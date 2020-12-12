<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Category insert page - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="category, complaint category, Road issues category, Garbage and Cleanliness category, Roads and Footpath category, Water Supply category, Drainage and Storm Drain category, Street light category,smccs, smc, Surat, complaint, corporations, surat municipal corporations,surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="surat municipal corporation complaint system in only an authorized person can add a new category.">

        <?php include("header_include.php"); ?>
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
                                    <h1>Add Category</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form" id="dvUSignup">
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <form Id="" action="<?php echo site_url("C_category/iu_category"); ?>" method="post" enctype="multipart/form-data">
                                <input name="hdcid" type="hidden" value="<?php
                                if (!empty($cat_info->cmp_id)) {
                                    echo $cat_info->cmp_id;
                                }
                                ?>" />
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                            <div class="panel-body">
                                                <div class="row clearfix">
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="form-group">
                                                            <label for="">Category Type Name <span class="text-danger"> *</span></label>
                                                            <input autocomplete="off" class="form-control" maxlength="50" name="txttype" type="text" value="<?php
                                                            if (!empty($cat_info->cmp_type)) {
                                                                echo $cat_info->cmp_type;
                                                            }
                                                            if (!empty($cmp_type)) {
                                                                echo $cmp_type;
                                                            }
                                                            ?>" />
                                                            <span><?php
                                                                if (!empty($Errcmp_type)) {
                                                                    echo $Errcmp_type;
                                                                }
                                                                ?></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" id="" class="button-control"><i class="fa fa-check pad-r5"></i>Submit</button>
                                                <a href="<?php echo site_url('C_category'); ?>"><button type="button" class="button-control" onclick=""><i class="fa fa-arrow-circle-left pad-r5"></i>Back</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <?php if (!empty($insert_info->succes)) {
                        ?>
                        <div>
                            <div class="alert alert-info alert-dismissible fade in" id="success-alert">
                                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                            </div>
                        </div>
                    <?php }
                    ?>
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