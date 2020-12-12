<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Assign Complaint to High Authority - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="high authority complaint, High authority, Higher authority, Forward complaint, smccs, SMCCS, smc, Surat, complaint, corporations, surat municipal corporations,surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="surat municipal corporation complaint system in citizen can assign the complaint to high authority. if a citizen posted a complaint, not solved.">

    <?php include("header_include.php"); ?>
</head>

<body class="other-pages">
    <!--header--->
    <header>
        <?php include("header_bar.php"); ?>
        <?php include("header_user_menu.php"); ?>
        <input id="UTCDate" name="UTCDate" type="hidden" value="26" />
    </header>
<!--    <div id="dvWait" class="dvLoad">
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
                                <h1 class="alternate">Assign hight authority</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row form" id="dvUSignup">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        <form Id="" action="<?php echo site_url("C_assign_complaint/assign_admin"); ?>" method="post" enctype="multipart/form-data">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <?php if (!empty($msg)) { ?><div class="alert alert-info"><strong>Note:</strong> <?php echo $msg; ?></div><?php } ?>
                                <div class="panel panel-default">
                                    <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                        <div class="panel-body">
                                            <div class="row clearfix">
                                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <input type="hidden" name="cmpid" value="<?php echo $assign_info['cmp_id']; ?>">
                                                        <input type="hidden" name="cid" value="<?php echo $assign_info['c_id']; ?>">
                                                        <label for="">Description <span class="text-danger"></span></label>
                                                        <textarea autocomplete="off" class="form-control" maxlength="50" name="txtdisc" type="text"></textarea>
                                                        <span></span>
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