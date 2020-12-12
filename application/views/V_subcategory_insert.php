<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Add sub categories - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="categories, Add new sub categories, Edit categories, add sub categories, Register sub categories, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="Sector admin can add new categories and manage the all categories and sub categories.">

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
                                <h1>Add Sub category</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row form" id="dvUSignup">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <form Id="" action="<?php echo site_url("C_subcategory/iu_subcategory"); ?>" method="post" enctype="multipart/form-data">
                            <input name="hdscid" type="hidden" value="<?php
                                                                        if (!empty($subcat_info->sub_ctg_id)) {
                                                                            echo $subcat_info->sub_ctg_id;
                                                                        }
                                                                        ?>" />
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                        <div class="panel-body">
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="">Select Category <span class="text-danger"> </span></label>
                                                        <select class="form-control" name="ddlcat">
                                                            <option value="">Select Category</option>
                                                            <?php
                                                            foreach ($cat_info as $v_cat_info) {
                                                                if ($subcat_info->zone_id == $v_cat_info->cmp_id) {
                                                            ?>
                                                                    <option value="<?php echo $v_cat_info->cmp_id; ?>" selected><?php echo ucwords($v_cat_info->cmp_type); ?></option>
                                                                <?php
                                                                } else {
                                                                ?>
                                                                    <option value="<?php echo $v_cat_info->cmp_id; ?>"><?php echo ucwords($v_cat_info->cmp_type); ?></option>
                                                            <?php
                                                                }
                                                            }
                                                            ?>
                                                        </select>
                                                        <span><?php
                                                                if (!empty($Errcmp_id)) {
                                                                    echo $Errcmp_id;
                                                                }
                                                                ?></span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Sub-Category Name <span class="text-danger"> *</span></label>
                                                        <input autocomplete="off" class="form-control" maxlength="50" name="txtscname" type="text" value="<?php
                                                                                                                                                            if (!empty($subcat_info->sub_name)) {
                                                                                                                                                                echo $subcat_info->sub_name;
                                                                                                                                                            }
                                                                                                                                                            if (!empty($sub_name)) {
                                                                                                                                                                echo $sub_name;
                                                                                                                                                            }
                                                                                                                                                            ?>" />
                                                        <span><?php
                                                                if (!empty($ErrSsub_name)) {
                                                                    echo $Errsub_name;
                                                                }
                                                                ?></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" id="" class="button-control"><i class="fa fa-check pad-r5"></i>Submit</button>
                                            <a href="<?php echo site_url('C_subcategory'); ?>"><button type="button" class="button-control" onclick=""><i class="fa fa-arrow-circle-left pad-r5"></i>Back</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- <form method="post" id="import_form" enctype="multipart/form-data">
                            <input type="file" name="file" id="file" required accept=".xls, .xlsx" /></p>
                            <br />
                            <input type="submit" name="import" value="Import" />
                        </form> -->
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