<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>PHP Login using Google Account</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

    </head>
    <body>
        <div class="container">
            <br />
            <h2 align="center">PHP Login using Google Account</h2>
            <br />
            <div class="panel panel-default">
                <?php
                if (!empty($this->session->userdata('access_token'))) {
                    echo '<div class="panel-heading">Welcome User</div><div class="panel-body">';
                    echo '<img src="' . $this->session->userdata('user_image') . '" class="img-responsive img-circle img-thumbnail" />';
                    echo '<h3><b>Name :</b> ' . $this->session->userdata('user_first_name') . ' ' . $this->session->userdata('user_last_name') . '</h3>';
                    echo '<h3><b>Email :</b> ' . $this->session->userdata('user_email_address') . '</h3>';
                    echo '<h3><a href="http://localhost/smccs/C_login_user/logout">Logout</h3></div>';
                } else {
                     header('location:http://localhost/smccs/Back');
                }
                ?>
            </div>
        </div>
    </body>
</html>
/------
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>High Authority Complaint - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
       
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="high authority complaint, citizen forward complaint to Manager, citizen send to complaint manager, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="SMCCS is provide facilities to citizen if citizen posted complaint will not solved in time then citizen can forward to high authority.">

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
                                        <h1 class="page-heading">Citizen Forwarded Complaints</h1>
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
                                        foreach ($admin_assign_cmp as $v_admin_assign_cmp) {
                                            ?>
                                            <div class="user-profile-details">
                                                <div class="form-group mar-b30">
                                                    <div class="row clearfix mar-b30">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="FirstName">Assign ID <span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->cmp_asgn_hgr_id; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Complain ID <span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->post_cmp_id; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Citizen ID <span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->cit_id; ?></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group mar-b30">
                                                    <div class="row clearfix mar-b30">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="FirstName">Assign Date <span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->cmp_asn_date; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Complainer<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->Complainer; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Complain Status<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->status; ?></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="row clearfix mar-b30">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="FirstName">Description<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->description; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Sector Name<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->sec_name; ?></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-4s col-lg-4">
                                                            <div class="form-group">
                                                                <label for="LastName">Sector Pincode<span class="text-danger"></span></label>
                                                                <div class="details"><?php echo $v_admin_assign_cmp->sec_pincode; ?></div>
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
                                                                                foreach ($sector_officer_info as $v_sector_officer_info) {
                                                                                    ?>
                                                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_assign_complaint/assign_sector_officer' . "/$v_sector_officer_info->sec_o_id/$v_admin_assign_cmp->cmp_asgn_hgr_id"); ?>" class="col-xs-12" onclick=""><?php echo $v_sector_officer_info->sec_fname . " " . $v_sector_officer_info->sec_lname; ?></a></div>
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