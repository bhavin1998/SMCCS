<!DOCTYPE html>
<html lang="en">

    <head>
        <title>High Authority to sector admin Complaint forward - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="high authority forward to secter admin, Forward complaint to sector admin, Re-Assign complaint, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="SMCCS in Super admin(Manager) assign complaint to Sector admin and take the not of the complaint. Why this complaint is not solved in time.?">

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
                                        <h1 class="page-heading">Show High Authority forwarded Complain</h1>
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
                                        if (empty($empty_array)) {
                                            foreach ($sec_assign_cmp as $v_sec_assign_cmp) {
                                                ?>
                                                <div class="user-profile-details">
                                                    <div class="form-group mar-b30">
                                                        <div class="row clearfix mar-b30">
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="FirstName">Assign ID <span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->cmp_asg_sec_id; ?></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="LastName">Complain ID <span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->post_cmp_id; ?></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="LastName">Super Admin ID <span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->sec_id; ?></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mar-b30">
                                                        <div class="row clearfix mar-b30">
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="FirstName">Assign Date <span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->cmp_asn_date; ?></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="LastName">Complainer<span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->Complainer; ?></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="LastName">Complain Status<span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->status; ?></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row clearfix mar-b30">
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="FirstName">Description<span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->description; ?></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="LastName">Citizen id<span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->cit_id; ?></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-md-4s col-lg-4">
                                                                <div class="form-group">
                                                                    <label for="LastName">Complain Description<span class="text-danger"></span></label>
                                                                    <div class="details"><?php echo $v_sec_assign_cmp->cmp_desc; ?></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="action-contents transactions">
                                                        <ul class="list-unstyled action-btns">
                                                            <li>
                                                                <div class="btn-group">
                                                                    <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        Assign
                                                                    </button>
                                                                    <div class="dropdown-menu dd">
                                                                        <div class="top-arrow"></div>
                                                                        <div class="profile-block">
                                                                            <div class="row">
                                                                                <div class="">
                                                                                    <?php
                                                                                    foreach ($workar_officer_info as $v_workar_officer_info) {
                                                                                        ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('C_assign_complaint/assign_workar' . "/$v_workar_officer_info->w_id/$v_sec_assign_cmp->cmp_asg_sec_id"); ?>" class="col-xs-12" onclick=""><?php echo $v_workar_officer_info->w_fname . " " . $v_workar_officer_info->w_lname; ?></a></div>
                                                                                        <?php
                                                                                    }
                                                                                    ?>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <?php
                                            }
                                        } else {
                                            ?>
                                            <div class="user-profile-details">
                                                <div align="center">
                                                    <h2><?php echo $empty_array; ?></h2>
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