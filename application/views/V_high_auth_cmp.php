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
            <section class="main-section">
                <section class="inner-section">
                    <div class="form">
                        <div class="page-heading">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="page-heading">
                                        <h1 class="alternate">Citizen Forwarded Complaints</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row form">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12 custom-tab">
                                <div class="clearfix"></div>
                                <hr>
                                <?php if (!empty($msg)) { ?><div class="alert alert-info"><strong>Note:</strong><?php echo $msg; ?></div><?php } ?>
                                <ul class="nav nav-tabs" role="tablist">
                                </ul>
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane active" id="home" style="overflow: auto;">
                                        <div id="tblbirthenroll_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                                            <div class="pull-left">
                                                <div id="tblbirthenroll_filter" class="dataTables_filter">
                                                    <label>Search:  <input type="search" class="form-control input-sm" placeholder="" aria-controls="tblbirthenroll" oninput="search(this);"></label>
                                                </div>
                                            </div>
                                            <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
                                                <thead>
                                                    <tr>
                                                        <th>Assign ID</th>
                                                        <th>Complain ID </th>

                                                        <th>Assign Date</th>
                                                        <th>Complainer</th>

                                                        <th>Description</th>
                                                        <th>Sector Name</th>
                                                        <th>Sector Pincode</th>   
                                                        <th>Complain Status</th>
                                                        <th>Assign</th>                                                    
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <?php
                                                    foreach ($admin_assign_cmp as $v_admin_assign_cmp) {
                                                        ?>
                                                        <tr>
                                                            <td class="text-center"><?php echo $v_admin_assign_cmp->cmp_asgn_hgr_id; ?></td>
                                                            <td class=""><?php echo $v_admin_assign_cmp->post_cmp_id; ?></td>

                                                            <td class=""><?php echo $v_admin_assign_cmp->cmp_asn_date; ?></td>
                                                            <td class=""><?php echo $v_admin_assign_cmp->Complainer; ?></td>

                                                            <td class="text-center"><?php echo $v_admin_assign_cmp->description; ?></td>
                                                            <td class="text-center"><?php echo $v_admin_assign_cmp->sec_name; ?></td>
                                                            <td class="text-center"><?php echo $v_admin_assign_cmp->sec_pincode; ?></td> 
                                                            <td class=""><?php echo $v_admin_assign_cmp->status; ?></td>
                                                            <td class="text-center">
                                                                <?php
                                                                if ($v_admin_assign_cmp->status != 'completed') {
                                                                    ?>
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
                                                                    <?php
                                                                } else {
                                                                    echo "No Action found";
                                                                }
                                                                ?>

                                                            </td>

                                                        </tr>
                                                        <?php
                                                    }
                                                    ?>
                                                </tfoot>
                                            </table>
                                            <div class="pull-right">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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