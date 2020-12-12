<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>View my complaint - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="View, view complaint, see complaint status, Post new complaint, view post complaint, Add new complaint, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="A citizen can see the posted complaint.">

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
        <section class="main-section">
            <section class="inner-section">
                <div class="form">
                    <div class="page-heading">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-heading">
                                    <h1>My Complaints</h1>
                                    <div class="text-right card-link">
                                        <a href="<?php echo site_url("New-complaint"); ?>"><i class="fa fa-plus pad-r5"></i>Lodge New Complaint</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row form">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12 custom-tab">


                            <div class="clearfix"></div>
                            <?php
                            $uriSegments = explode("/", parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
                            if (!empty($uriSegments[5])) {
                                $s = $uriSegments[5];
                            } else {
                                $s = NULL;
                            }
                            ?>
                            <ul class="nav nav-tabs" role="tablist">

                            </ul>
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="home" style="overflow: auto;">
                                    <script src="/OnlineServices/Complaint/RecentComplaint?v=ZECIA8MWDmIT4fhtDJyGgB3jsHZRYi02-93okzDuS5c1"></script>
                                    <div id="tblbirthenroll_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                                        <div class="pull-left">
                                            <div id="tblbirthenroll_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="tblbirthenroll"></label></div>
                                        </div>
                                        <form action="" method="post">
                                            <div class="pull-right">
                                                <div id="tblbirthenroll_filter" class="dataTables_filter">
                                                    <select onchange="top.location.href = this.options[this.selectedIndex].value;" name="sort" class="form-control input-sm" placeholder="" aria-controls="tblbirthenroll">

                                                        <option value="#" <?php
                                                                            if (empty($s)) {
                                                                                echo "selected";
                                                                            }
                                                                            ?>>Sort by</option>
                                                        <option value="<?php echo site_url('My-complaint/show/') . $this->session->userdata("c_id"); ?>/desc/" <?php
                                                                                                                                                                if ($s == "desc") {
                                                                                                                                                                    echo "selected";
                                                                                                                                                                }
                                                                                                                                                                ?>>Sort by time descending</option>
                                                        <option value="<?php echo site_url('My-complaint/show/') . $this->session->userdata("c_id"); ?>/asc/" <?php
                                                                                                                                                                if ($s == "asc") {
                                                                                                                                                                    echo "selected";
                                                                                                                                                                }
                                                                                                                                                                ?>>Sort by time ascending</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>

                                        <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
                                            <thead>
                                                <tr>
                                                    <th>Complaint No</th>
                                                    <th>Citizen Name</th>
                                                    <th>Citizen Sector Name</th>
                                                    <th>Complaint Sub Category</th>
                                                    <th>Complaint Description</th>
                                                    <th>Complaint Location</th>
                                                    <th>Complaint Posted Date</th>
                                                    <th>Complaint Status</th>
                                                    <th>Action</th>
                                                    <?php
                                                    if (!empty($this->session->userdata("sec_o_id"))) {
                                                    ?>
                                                        <th>Action</th>
                                                    <?php } ?>

                                                    <!--                                                    <th class="text-center" width="15%"></th>-->
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <?php
                                                foreach ($complaint_info as $v_complaint_info) {
                                                ?>
                                                    <tr>
                                                        <td class="text-center"><?php echo $v_complaint_info->post_cmp_id; ?></td>
                                                        <td class="text-center"><?php echo $v_complaint_info->c_fname . " " . $v_complaint_info->c_lname; ?></td>
                                                        <td class="text-center"><?php echo $v_complaint_info->sec_name; ?></td>
                                                        <td class="text-center"><?php echo $v_complaint_info->sub_name; ?></td>
                                                        <td class="text-center"><?php echo $v_complaint_info->cmp_desc; ?></td>
                                                        <td class="text-center"><?php echo $v_complaint_info->cmp_location; ?></td>
                                                        <td class="text-center"><?php echo $v_complaint_info->cmp_pst_date; ?></td>
                                                        <td class="text-center"><?php echo $v_complaint_info->status; ?></td>
                                                        <td class="text-center">
                                                            <div class="btn-group">
                                                                <?php
                                                                $towdate = strtotime(date('Y-m-d H:i:s', strtotime('2 days', strtotime($v_complaint_info->cmp_pst_date))));
                                                                $curdate = strtotime(date("Y-m-d H:i:s"));
                                                                if ($curdate > $towdate) {
                                                                    if ($v_complaint_info->status != "completed") {
                                                                ?>
                                                                        <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Action
                                                                        </button>
                                                                        <div class="dropdown-menu dd">
                                                                            <div class="top-arrow"></div>
                                                                            <div class="profile-block">
                                                                                <div class="row">
                                                                                    <div class="">
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('C_assign_complaint/citizen_super/' . $v_complaint_info->post_cmp_id); ?>" class="col-xs-12">Assign hight authority</a></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    <?php
                                                                    }
                                                                } else {
                                                                    ?>
                                                                    <button type="button" class="dropdown-toggle button-control" aria-expanded="false" onclick="alert('If the problem not solved in 2 Days, then you can assign it to higher authority');">
                                                                        Action
                                                                    </button>
                                                                <?php
                                                                }
                                                                ?>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                <?php
                                                }
                                                ?>
                                            </tfoot>
                                        </table>
                                        <div class="pull-right">
                                            <?php print($links); ?>
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