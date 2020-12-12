<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Sector admin forward to worker complaint - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Sector admin forward to worker, Forward complaint to worker, Re-Assign complaint, make note, assign a worker to task, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="SMCCS in Sector admin assign complaint to worker and take the not of the complaint. Why this complaint is not solved in time.?">

        <?php
        include("header_include.php");
        ?>

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
                                        <h1 class="alternate">Edit profile</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <?php if (!empty($msg)) { ?><div class="alert alert-info"><strong>Note:</strong><?php echo $msg; ?></div><?php } ?>
                        <div class="row form userprofile">
                            <div class="col-sm-12">
                                <div class="block">
                                    <div class="user-profile-wrapper">
                                        <?php
                                        foreach ($sec_w_cmp as $v_sec_w_cmp) {
                                            ?>
                                            <div class="user-profile-details">
                                                <div class="form-group mar-b30">
                                                    <div class="row clearfix mar-b30">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="FirstName">Assign ID <span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->cmp_asg_sec_wrk_id; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Complain ID <span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->post_cmp_id; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Sector Admin ID <span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->sec_adm_id; ?></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group mar-b30">
                                                    <div class="row clearfix mar-b30">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="FirstName">Assign Date <span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->cmp_asn_date; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Complainer<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->Complainer; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Complain Status<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->status; ?></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="row clearfix mar-b30">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="FirstName">Description<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->description; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Citizen id<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->cit_id; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4s col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Complain Description<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_sec_w_cmp->cmp_desc; ?></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="action-contents transactions">
                                                    <ul class="list-unstyled action-btns">
                                                        <li>
                                                            <div class="btn-group">
                                                                <?php
                                                                if ($v_sec_w_cmp->status != "completed") {
                                                                    ?>
                                                                    <a href="<?php echo site_url('C_complaint/status_cmp/') . $v_sec_w_cmp->post_cmp_id; ?>/completed">
                                                                        <button type="button" class="button-control">
                                                                            completed
                                                                        </button>
                                                                    </a>
                                                                    <?php
                                                                }
                                                                ?>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <?php
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
        <?php include("footer_bar.php"); ?>
        <!--footer Include-->
        <?php include("footer_include.php"); ?>

    </body>

</html>