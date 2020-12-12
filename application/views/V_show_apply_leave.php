<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>View My Leave - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="Manage, Manage leave, Accept leave, approve leave, grant leave, leave, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="Sector admin manage the leave for accept leave or rejected leave.">

    <?php include("header_include.php"); ?>
    <script type="text/javascript">
        function search(e) {
            var str = e.value;
            var patt = /^[A-Za-z\s\.]+$/gm;
            if (str.match(patt)) {
                $.ajax({
                    url: "<?php echo base_url(); ?>C_sector/search_sector",
                    method: "POST",
                    data: {
                        data: str
                    },
                    success: function(data) {
                        $('#tblbirthenroll').html(data);
                    }
                });
            }
        }
    </script>
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
                                    <h1 class="page-heading">View Leave</h1>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="other-options">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row form">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12 custom-tab">
                            <!--                                <div class="text-right"><a class="button-control "><i class="fa fa-plus-circle pad-r10"></i>Lodge New Complaint</a></div>-->

                            <div class="clearfix"></div>
                            <ul class="nav nav-tabs" role="tablist">
                                <!--                                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">My Complaints</a></li>-->
                            </ul>
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="home" style="overflow: auto;">
                                    <script src="/OnlineServices/Complaint/RecentComplaint?v=ZECIA8MWDmIT4fhtDJyGgB3jsHZRYi02-93okzDuS5c1"></script>
                                    <div id="tblbirthenroll_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                                        <div class="pull-left">
                                            <div id="tblbirthenroll_filter" class="dataTables_filter"><label>Search
                                                    <input type="search" id="ttt" class="form-control input-sm" placeholder="" aria-controls="tblbirthenroll" oninput="search(this);">
                                                </label></div>
                                        </div>
                                        <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <?php
                                                    if (!empty($this->session->userdata("sec_o_id"))) {
                                                    ?>
                                                        <th>worker Name</th>
                                                    <?php
                                                    }
                                                    ?>

                                                    <th>Leave Start Date</th>
                                                    <th>Leave End Date</th>
                                                    <th>Leave Reason</th>
                                                    <th>Leave status</th>
                                                    <?php
                                                    if (!empty($this->session->userdata("sec_o_id"))) {
                                                    ?>
                                                        <th>Action</th>
                                                    <?php
                                                    }
                                                    ?>

                                                </tr>
                                            </thead>
                                            <tfoot id="tfoot">
                                                <?php
                                                foreach ($leave_info as $v_leave_info) {
                                                ?>
                                                    <tr>
                                                        <td class="text-center"><?php echo $v_leave_info->l_id; ?></td>
                                                        <?php
                                                        if (!empty($this->session->userdata("sec_o_id"))) {
                                                        ?>
                                                            <td class=""><?php echo $v_leave_info->sec_fname."  ".$v_leave_info->sec_lname; ?></td>
                                                        <?php
                                                        }
                                                        ?>

                                                        <td class="text-center"><?php
                                                                                echo date("d-m-Y  h:i:sa", strtotime($v_leave_info->s_date));
                                                                                ?>
                                                        <td class="text-center"><?php
                                                                                echo date("d-m-Y  h:i:sa", strtotime($v_leave_info->e_date));
                                                                                ?></td>
                                                        <td class="text-center"><?php
                                                                                echo $v_leave_info->l_description;
                                                                                ?></td>
                                                        <td class="text-center"><?php
                                                                                if ($v_leave_info->status == 0) {
                                                                                    echo "pedding";
                                                                                } else {
                                                                                    echo "approved";
                                                                                }
                                                                                ?>
                                                        </td>
                                                        <?php if (!empty($this->session->userdata("sec_o_id"))) { ?>
                                                            <td class="text-center">
                                                                <div class="btn-group">
                                                                    <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        Action
                                                                    </button>
                                                                    <div class="dropdown-menu dd">
                                                                        <div class="top-arrow"></div>
                                                                        <div class="profile-block">
                                                                            <div class="row">
                                                                                <div class="">
                                                                                    <?php
                                                                                    if ($v_leave_info->status == 0) {
                                                                                    ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('C_apply_leave/status_of_leave/') . $v_leave_info->l_id; ?>/1" class="col-xs-12">Accept</a></div>
                                                                                    <?php
                                                                                    }
                                                                                    if ($v_leave_info->status == 1) {
                                                                                    ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('C_apply_leave/status_of_leave/') . $v_leave_info->l_id . '/0'; ?>" class="col-xs-12">pending</a></div>
                                                                                    <?php
                                                                                    }
                                                                                    ?>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        <?php
                                                        }
                                                        ?>
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