<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Feedback form - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
       
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Feedback form, Online feedback form, citizen feedback form sample, Simple feedback form, Client feedback form, Conference feedback form, citizen feedback form pdf, complaint feedback form, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="SMCCS provides facilities to citizen can posted complaint related given the feedback.">

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
                                    <h1 class="alternate">Feedback</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form" id="dvUSignup">
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <form Id="" action="<?php echo site_url("Feedback/apply"); ?>" method="post" enctype="multipart/form-data">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <?php
                                    if (!empty($insert_status)) {
                                        if ($insert_status == 1) {
                                            ?>
                                            <div class="alert alert-info"><strong>Thank you for your feedback .</strong></div>
                                            <?php
                                        }
                                    } else {
                                        ?>
                                        <div class="panel panel-default">
                                            <div id="userregistration-details" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="userregistration-details-heading">
                                                <div class="panel-body">
                                                    <div class="row clearfix">
                                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                            <div class="form-group">
                                                                <label for="">Feedback Description <span class="text-danger"> *</span></label>
                                                                <input type="hidden" name="hdcid" value="<?php echo $this->session->userdata("c_id"); ?>">
                                                                <textarea class="form-control" cols="40" id="ComplaintDescription" maxlength="500" name="txtdiscription" rows="8" required></textarea>
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
                                                    <button type="submit" id="" class="button-control"><i class="fa fa-check pad-r5"></i>Submit</button>
                                                    <a href="javascript:window.history.go(-1);"><button type="button" class="button-control" onclick=""><i class="fa fa-arrow-circle-left pad-r5"></i>Back</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    <?php } ?>
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
        <script src="<?php echo base_url(); ?>static/js/oprations.js"></script>
        <!--footer Include-->
    </body>

</html>