<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include("header_include.php"); ?>
        <script type="text/javascript">
            function search(e)
            {
                var str = e.value;
                var patt = /^[A-Za-z\s\.]+$/gm;
                if (str.match(patt))
                {
                    $.ajax({
                        url: "<?php echo base_url(); ?>C_emergence_cmp_solver/search_emergence_cmp_solver",
                        method: "POST",
                        data: {data: str},
                        success: function (data)
                        {
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
                                        <h1 class="alternate">Manage Emergence Complaine Solver</h1>
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
                                <div class="btn-group" style="float: right;">
                                    <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-tasks text-2x pad-r5"></i>
                                        Option
                                        <i class="fa fa-caret-down pad-l5"></i>
                                    </button>
                                    <div class="dropdown-menu dd">
                                        <div class="top-arrow"></div>
                                        <div class="profile-block">
                                            <div class="row">                                    
                                                <div class="">                                                                                           
                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/add_emergence_cmp_solver'); ?>" class="col-xs-12">Add Emergence cmp solver</a></div>                                                    
                                                </div>
                                            </div>
                                        </div>                            
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <hr>
                                <div class="alert alert-info mar-t20">
                                </div>
                                <ul class="nav nav-tabs" role="tablist">
                                    <!--                                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">My Complaints</a></li>-->
                                </ul>
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane active" id="home" style="overflow: auto;">
                                        <script src="/OnlineServices/Complaint/RecentComplaint?v=ZECIA8MWDmIT4fhtDJyGgB3jsHZRYi02-93okzDuS5c1"></script>
                                        <div id="tblbirthenroll_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                                            <div class="pull-left"><div id="tblbirthenroll_filter" class="dataTables_filter"><label>Search:
                                                        <input type="search" class="form-control input-sm" placeholder="" aria-controls="tblbirthenroll" oninput="search(this);"></label></div></div>
                                            <table id="tblbirthenroll" class="table table-striped table-hover table-bordered table-customized">
                                                <thead>
                                                    <tr>
                                                        <th>id</th>
                                                        <th>Fname </th>
                                                        <th>Lname</th>
                                                        <th>Contact No</th>
                                                        <th>Gender</th>
                                                        <th>Address</th>
                                                        <th>Pin-code</th>
                                                        <th>Job Pin-code</th>
                                                        <th>Is Active</th>                                                                                                        
                                                        <th>Action</th>                                                    
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <?php
                                                    foreach ($emergence_cmp_solver_info as $v_emergence_cmp_solver_info) {
                                                        ?>
                                                        <tr>
                                                            <td class="text-center"><?php echo $v_emergence_cmp_solver_info->ecs_id; ?></td>
                                                            <td class=""><?php echo $v_emergence_cmp_solver_info->ecs_fname; ?></td>
                                                            <td class=""><?php echo $v_emergence_cmp_solver_info->ecs_lname; ?></td>
                                                            <td class=""><?php echo $v_emergence_cmp_solver_info->ecs_contact_no; ?></td>
                                                            <td class=""><?php
                                                                if ($v_emergence_cmp_solver_info->ecs_gender == 'm') {
                                                                    echo 'Male';
                                                                } else {
                                                                    echo 'Female';
                                                                }
                                                                ?>

                                                            </td>
                                                            <td class=""><?php echo $v_emergence_cmp_solver_info->ecs_address; ?></td>
                                                            <td class="text-center"><?php echo $v_emergence_cmp_solver_info->ecs_pincode; ?></td>
                                                            <td class="text-center"><?php echo $v_emergence_cmp_solver_info->ecs_job_pincode; ?></td>
                                                            <td class="text-center">
                                                                <?php
                                                                if ($v_emergence_cmp_solver_info->ecs_is_active == 1) {
                                                                    echo "Active";
                                                                } else {
                                                                    echo "Deactive";
                                                                }
                                                                ?>
                                                            </td> 
                                                            <td class="text-center"><div class="btn-group">
                                                                    <button type="button" class="dropdown-toggle button-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                                                    
                                                                        Action                                                                    
                                                                    </button>
                                                                    <div class="dropdown-menu dd">
                                                                        <div class="top-arrow"></div>
                                                                        <div class="profile-block">
                                                                            <div class="row">                                    
                                                                                <div class="">        

                                                                                    <?php
                                                                                    if ($v_emergence_cmp_solver_info->ecs_is_active == 1) {
                                                                                        ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/status_ecs_solver/') . $v_emergence_cmp_solver_info->ecs_id; ?>/0" class="col-xs-12">Deactive</a></div>
                                                                                        <?php
                                                                                    } else {
                                                                                        ?>
                                                                                        <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/status_ecs_solver/') . $v_emergence_cmp_solver_info->ecs_id; ?>/1" class="col-xs-12">Active</a></div>
                                                                                        <?php
                                                                                    }
                                                                                    ?>
                                                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/add_emergence_cmp_solver/') . $v_emergence_cmp_solver_info->ecs_id; ?>" class="col-xs-12" onclick="">Update</a></div>
                                                                                    <div class="col-xs-12"><a href="<?php echo site_url('C_emergence_cmp_solver/delete_ecs_solver/') . $v_emergence_cmp_solver_info->ecs_id; ?>" class="col-xs-12" onclick="confirm('Are you sure !!!')">Delete</a></div>
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
