<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Citizen user - surat municipal corporation complaint system</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
       
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="citizen user display, view details, view profile, Manage citizen, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="This page in high authorities manage the citizen.">
        <?php include("header_include.php"); ?>
        <script type="text/javascript">
            function search(e) {
                var str = e.value;
                var patt = /^[0-9A-Za-z\s\.]+$/gm;
                if (str.match(patt)) {
                    $.ajax({
                        url: "<?php echo base_url(); ?>C_citizen_user/search_citizen",
                        method: "POST",
                        data: {
                            data: str
                        },
                        success: function (data) {
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
                                        <h1 class="page-heading">View citizen list</h1>
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
                                <div class="clearfix"></div>
                                <ul class="nav nav-tabs" role="tablist">
                                    <!--                                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">My Complaints</a></li>-->
                                </ul>
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane active" id="home" style="overflow: auto;">
                                        <script src="/OnlineServices/Complaint/RecentComplaint?v=ZECIA8MWDmIT4fhtDJyGgB3jsHZRYi02-93okzDuS5c1"></script>
                                        <div id="tblbirthenroll_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                                            <div class="pull-left">
                                                <div id="tblbirthenroll_filter" class="dataTables_filter"><label>Search:
                                                        <input type="search" class="form-control input-sm" placeholder="" aria-controls="tblbirthenroll" oninput="search(this);"></label></div>
                                            </div>
                                            <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
                                                <thead>
                                                    <tr class="text-center">
                                                        <th>No</th>
                                                        <th>Citizen fisrt name</th>
                                                        <th>Citizen last name</th>
                                                        <th>Citizen contact number</th>
                                                        <th>Citizen gender</th>
                                                        <th class="text-center" width="15%">Citizen address</th>
                                                        <th>Citizen pincode</th>
                                                        <th>Citizen status</th>
                                                        <th>Action</th>
                                                        <!--                                                    <th class="text-center" width="15%"></th>-->
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <?php
                                                    foreach ($ciz_user_info as $v_ciz_user_info) {
                                                        ?>
                                                        <tr class="text-center">
                                                            <td class="text-center"><?php echo $v_ciz_user_info->c_id; ?></td>
                                                            <td class=""><?php echo $v_ciz_user_info->c_fname; ?></td>
                                                            <td class=""><?php echo $v_ciz_user_info->c_lname; ?></td>
                                                            <td class=""><?php echo $v_ciz_user_info->c_contact_no; ?></td>
                                                            <td class=""><?php
                                                                if ($v_ciz_user_info->c_gender == 'm') {
                                                                    echo 'Male';
                                                                } else {
                                                                    echo 'Female';
                                                                }
                                                                ?>

                                                            </td>
                                                            <td class=""><?php echo $v_ciz_user_info->c_address; ?></td>
                                                            <td class=""><?php echo $v_ciz_user_info->c_pincode; ?></td>

                                                            <td class="text-center">
                                                                <?php
                                                                if ($v_ciz_user_info->c_is_active == 1) {
                                                                    echo "Active";
                                                                } else {
                                                                    echo "Deactive";
                                                                }
                                                                ?>
                                                            </td>
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
                                                                                    if ($v_ciz_user_info->c_is_active == 1) {
                                                                                        ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('C_citizen_user/status_sector_user/') . $v_ciz_user_info->c_id; ?>/0" class="col-xs-12">Deactive</a></div>
                                                                                        <?php
                                                                                    } else {
                                                                                        ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('C_citizen_user/status_sector_user/') . $v_ciz_user_info->c_id; ?>/1" class="col-xs-12">Active</a></div>
                                                                                        <?php
                                                                                    }
                                                                                    /*
                                                                                      ?>
                                                                                      <div class="col-xs-12"><a href="<?php echo site_url('C_citizen_user/add_sector_user/') . $v_ciz_user_info->c_id; ?>" class="col-xs-12" onclick="">Update</a></div>
                                                                                      <div class="col-xs-12"><a href="<?php echo site_url('C_citizen_user/delete_sector_user/') . $v_ciz_user_info->c_id; ?>" class="col-xs-12" onclick="confirm('Are you sure !!!')">Delete</a></div><?php */
                                                                                    ?>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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