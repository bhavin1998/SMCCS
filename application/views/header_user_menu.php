
<?php
if ($this->session->userdata("logged_in") == TRUE) {
    if (!empty($this->session->userdata("sup_id"))) {
        ?>
        <div class="userbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5 left-links hidden-xs">
                        Welcome super Admin, <span class="pad-r20 text-bold"><?php echo ucfirst($this->session->userdata("sup_fname")) . " " . $this->session->userdata("sup_lname"); ?> </span>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-md-7 col-lg-7 text-right">
                        <!-- Single button -->

                        <div class="user-menu btn-group"> 
                            <a href="<?php echo site_url('C_super_admin'); ?>" class="link"><i class="fa fa-dashboard pad-r5 hidden-xs"></i>Dashboard</a>
                        </div>                        
                        <div class="user-menu btn-group">
                        </div>                        
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user-o text-2x pad-r5"></i>
                                Acters
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu dd">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">                                    
                                        <div class="">                                       
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_super_admin/sector_admin_get'); ?>" class="col-xs-12">sector officer</a></div>                                            
                                            <div class="mywidth100"><a href="<?php echo site_url('C_super_admin/citizen_user_get'); ?>" class="col-xs-12">Citizen</a></div>
                                            <div class="mywidth100"><a href="<?php echo site_url('C_emergence_cmp_solver/ecs_info'); ?>" class="col-xs-12">Emergence cmp solver</a></div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-table text-2x pad-r5"></i>
                                Manage
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu dd">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">                                    
                                        <div class="">                                       
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_complaint'); ?>" class="col-xs-12">View Complaints</a></div>
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_assign_complaint/high_auth_complaint_show'); ?>" class="col-xs-12">Citizen Forwarded Complaints</a></div>
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_sector'); ?>" class="col-xs-12">View Sector</a></div>
                                            <div class="mywidth100"><a href="<?php echo site_url('C_zone'); ?>" class="col-xs-12">View Zone</a></div>
                                            <div class="mywidth100"><a href="<?php echo site_url('C_category'); ?>" class="col-xs-12">View Category</a></div>
                                            <div class="mywidth100"><a href="<?php echo site_url('C_subcategory'); ?>" class="col-xs-12">View Sub-category</a></div>
                                            <div class="mywidth100"><a href="<?php echo site_url('c_feedback'); ?>" class="col-xs-12">View Feedback</a></div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>                     
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user-circle text-2x pad-r5"></i>
                                My Account
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">
                                        <div class="col-xs-4 col-sm-4">
                                            <div class="user-profile-photo">
                                                <a href="javascript:void()">
                                                    <img src="<?php
                                                    if (!empty(get_cookie("user_image"))) {
                                                        echo get_cookie("user_image");
                                                    } else {
                                                        echo base_url() . "static/Images/man.jpg";
                                                    }
                                                    ?>" class="img-circle img-responsive" alt="Gender Profile Image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xs-8 col-sm-8">
                                            <div class="user-name"><?php echo ucfirst($this->session->userdata("sup_fname")) . " " . $this->session->userdata("sup_lname"); ?></div>
                                            <div class="user-email"><?php echo $this->session->userdata("email") ?></div>     
                                            <div class="edit-profile"><a href="<?php echo site_url('C_editprofile/upload_user_img_view/' . $this->session->userdata("sup_id")); ?>" class="text-bold text-uppercase"><span class="fa fa-pencil-square-o pad-r5"></span>Change Profile Image</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="logout-block">
                                    <div class="row clear-fix">
                                        <div class="col-xs-12 col-sm-12 text-center">
                                            <a id="lbLogout" href="<?php echo site_url('C_login_user/logout'); ?>" class="button-control small"><i class="fa fa-power-off pad-r10"></i>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <?php
    } elseif (!empty($this->session->userdata("sec_o_id"))) {
        ?>
        <div class="userbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5 left-links hidden-xs">
                        Welcome Sector officer, <span class="pad-r20 text-bold"><?php echo ucfirst($this->session->userdata("sec_fname")) . " " . $this->session->userdata("sec_lname"); ?> </span>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-md-7 col-lg-7 text-right">
                        <!-- Single button -->
                        <a href="<?php echo site_url('C_sector_officer'); ?>" class="link"><i class="fa fa-dashboard pad-r5 hidden-xs"></i>Dashboard</a>
                        <div class="user-menu btn-group">                            
                        </div>
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user-o text-2x pad-r5"></i>
                                Acters
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu dd">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">                                    
                                        <div class="">                                                                                   
                                            <div class="mywidth100"><a href="<?php echo site_url('C_worker_user/worker_info'); ?>" class="col-xs-12">View worker</a></div>
                                            <div class="mywidth100"><a href="<?php echo site_url('C_citizen_user/citizen_info'); ?>" class="col-xs-12">View citizen</a></div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-table text-2x pad-r5"></i>
                                Manage
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu dd">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">                                    
                                        <div class="">                                       
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_complaint/cmp_for_sector_officer'); ?>" class="col-xs-12">View Complaints</a></div>
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_assign_complaint/high_auth_sec_cmp_show'); ?>" class="col-xs-12">High Authority Complaints</a></div>
                                            <div class="mywidth100"><a href="<?php echo site_url('C_apply_leave/apply_leave_in_sector'); ?>" class="col-xs-12">View Worker leave</a></div>
                                            <div class="mywidth100"><a href="<?php echo site_url('C_zone'); ?>" class="col-xs-12">View Zone</a></div>
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_sector'); ?>" class="col-xs-12">View Sector</a></div>                                            
                                            <div class="mywidth100"><a href="<?php echo site_url('c_feedback'); ?>" class="col-xs-12">View Feedback</a></div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>                     
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user-circle text-2x pad-r5"></i>
                                My Account
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">
                                        <div class="col-xs-4 col-sm-4">
                                            <div class="user-profile-photo">
                                                <a href="/OnlineServices/Home/UpdateUserProfile">
                                                    <img src="<?php
                                                    if (!empty(get_cookie("user_image"))) {
                                                        echo get_cookie("user_image");
                                                    } else {
                                                        echo base_url() . "static/Images/man.jpg";
                                                    }
                                                    ?>" class="img-circle img-responsive" alt="Gender Profile Image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xs-8 col-sm-8">
                                            <div class="user-name"><?php echo ucfirst($this->session->userdata("sec_fname")) . " " . $this->session->userdata("sec_lname"); ?></div>
                                            <div class="user-email"><?php echo $this->session->userdata("email") ?></div>
                                            <div class="edit-profile"><a href="<?php echo site_url('C_editprofile/upload_user_img_view/' . $this->session->userdata("sec_o_id")); ?>" class="text-bold text-uppercase"><span class="fa fa-pencil-square-o pad-r5"></span>Change Profile Image</a></div>
                                        </div>
                                    </div>

                                </div>
                                <div class="logout-block">
                                    <div class="row clear-fix">
                                        <div class="col-xs-12 col-sm-12 text-center">
                                            <a id="lbLogout" href="<?php echo site_url('C_login_user/logout'); ?>" class="button-control small"><i class="fa fa-power-off pad-r10"></i>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <?php
    } elseif (!empty($this->session->userdata("c_id"))) {
        ?>
        <div class="userbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5 left-links hidden-xs">
                        Welcome citizen, <span class="pad-r20 text-bold"><?php echo ucfirst($this->session->userdata("c_fname")) . " " . ucfirst($this->session->userdata("c_lname")); ?> </span>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-md-7 col-lg-7 text-right">
                        <!-- Single button -->



                        <div class="user-menu btn-group"> 
                            <a href="<?php echo site_url('Citizen'); ?>" class="link"><i class="fa fa-dashboard pad-r5 hidden-xs"></i>Dashboard</a>
                        </div>
                        <div class="user-menu btn-group"> 
                            <a href="<?php echo site_url('My-complaint/show/') . $this->session->userdata("c_id"); ?>" class="link"><i class="fa fa-credit-card-alt pad-r5"></i>Complaints</a>
                        </div>
                        <div class="user-menu btn-group"> 
                            <a href="<?php echo site_url('Feedback/form'); ?>" class="link"><i class="fa fa-comments-o pad-r5"></i>Feedback</a>
                        </div>
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user-circle text-2x pad-r5"></i>
                                My Account
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">
                                        <div class="col-xs-4 col-sm-4">
                                            <div class="user-profile-photo">
                                                <a href="">
                                                    <img src="<?php echo base_url(); ?>static/Images/man.jpg" class="img-circle img-responsive" alt="Gender Profile Image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xs-8 col-sm-8">
                                            <div class="user-name"><?php echo ucfirst($this->session->userdata("c_fname")) . " " . $this->session->userdata("c_lname"); ?></div>
                                            <div class="user-email"><?php echo $this->session->userdata("email") ?></div>
                                            <?php ?>
                                            <div class="edit-profile"><a href="<?php echo site_url('Update-User-profile/' . $this->session->userdata("c_id")); ?>" class="text-bold text-uppercase"><span class="fa fa-pencil-square-o pad-r5"></span>Edit profile</a></div>
                                            <div class="edit-profile"><a href="<?php echo site_url('#/' . $this->session->userdata("c_id")); ?>" class="text-bold text-uppercase"><span class="fa fa-pencil-square-o pad-r5"></span>Change Password</a></div>


                                        </div>
                                    </div>

                                </div>
                                <div class="logout-block">
                                    <div class="row clear-fix">
                                        <div class="col-xs-12 col-sm-12 text-center">
                                            <a id="lbLogout" href="<?php echo site_url('Logout'); ?>" class="button-control small"><i class="fa fa-power-off pad-r10"></i>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <?php
    } else if (!empty($this->session->userdata("w_id"))) {
        ?>
        <div class="userbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5 left-links hidden-xs">
                        Welcome Workers, <span class="pad-r20 text-bold"><?php echo ucfirst($this->session->userdata("w_fname")) . " " . $this->session->userdata("w_lname"); ?> </span>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-md-7 col-lg-7 text-right">
                        <!-- Single button -->
                        <div class="user-menu btn-group">
                            <a href="<?php echo site_url('C_worker_user'); ?>" class="link"><i class="fa fa-dashboard pad-r5 hidden-xs"></i>Dashboard</a>
                        </div>
                        <div class="user-menu btn-group">  
                            <a href="<?php echo site_url('C_apply_leave'); ?>" class="link"><i class="fa fa-home pad-r5 hidden-xs"></i>Apply Leave</a>
                        </div>

                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-table text-2x pad-r5"></i>
                                Manage
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu dd">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">                                    
                                        <div class="">                                       
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_complaint/cmp_for_worker_officer'); ?>" class="col-xs-12">Complaint</a></div>
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_assign_complaint/high_auth_w_cmp_show'); ?>" class="col-xs-12">High auth. Complaint</a></div>
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_apply_leave/apply_leave_show'); ?>" class="col-xs-12">Leave Status</a></div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>                     
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user-circle text-2x pad-r5"></i>
                                My Account
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">
                                        <div class="col-xs-4 col-sm-4">
                                            <div class="user-profile-photo">
                                                <a href="#">
                                                    <img src="<?php echo base_url() ?>static/Images/man.jpg" class="img-circle img-responsive" alt="Gender Profile Image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xs-8 col-sm-8">
                                            <div class="user-name"><?php echo ucfirst($this->session->userdata("w_fname")) . " " . $this->session->userdata("w_lname"); ?></div>
                                            <div class="user-email"><?php echo $this->session->userdata("email") ?></div>
                                            <?php /* ?><div class="mywidth100"><a class="col-xs-12" href="/OnlineServices/Home/UpdateUserProfile">Edit profile</a></div>
                                              <div class="mywidth100"><a class="col-xs-12" href="/OnlineServices/Home/ChangePassword">Change password</a></div>
                                              <div class="mywidth100"><a class="col-xs-12"  href="/OnlineServices/Home/ChangeEmailID">Change EmailID </a></div><?php */ ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="logout-block">
                                    <div class="row clear-fix">
                                        <div class="col-xs-12 col-sm-12 text-center">
                                            <a id="lbLogout" href="<?php echo site_url('C_login_user/logout'); ?>" class="button-control small"><i class="fa fa-power-off pad-r10"></i>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <?php
    } else if (!empty($this->session->userdata("ecs_id"))) {
        ?>
        <div class="userbar">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5 left-links hidden-xs">
                        Welcome Workers, <span class="pad-r20 text-bold"><?php echo ucfirst($this->session->userdata("ecs_fname")) . " " . $this->session->userdata("ecs_lname"); ?> </span>
                    </div>
                    <div class="col-xs-12 col-sm-8 col-md-7 col-lg-7 text-right">
                        <!-- Single button -->
                        <div class="user-menu btn-group">
                            <a href="<?php echo site_url('C_worker_user'); ?>" class="link"><i class="fa fa-dashboard pad-r5 hidden-xs"></i>Dashboard</a>
                        </div>
                        <div class="user-menu btn-group">  
                            <a href="<?php echo site_url('C_apply_leave'); ?>" class="link"><i class="fa fa-home pad-r5 hidden-xs"></i>Apply Leave</a>
                        </div>

                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-table text-2x pad-r5"></i>
                                Manage
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu dd">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">                                    
                                        <div class="">                                       
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_complaint/cmp_for_worker_officer'); ?>" class="col-xs-12">Complaint</a></div>
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_assign_complaint/high_auth_w_cmp_show'); ?>" class="col-xs-12">High auth. Complaint</a></div>
                                            <div class="mywidth100" ><a href="<?php echo site_url('C_apply_leave/apply_leave_show'); ?>" class="col-xs-12">Leave Status</a></div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>                     
                        <div class="user-menu btn-group">
                            <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user-circle text-2x pad-r5"></i>
                                My Account
                                <i class="fa fa-caret-down pad-l5"></i>
                            </button>
                            <div class="dropdown-menu">
                                <div class="top-arrow"></div>
                                <div class="profile-block">
                                    <div class="row">
                                        <div class="col-xs-4 col-sm-4">
                                            <div class="user-profile-photo">
                                                <a href="#">
                                                    <img src="<?php echo base_url() ?>static/Images/man.jpg" class="img-circle img-responsive" alt="Gender Profile Image">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xs-8 col-sm-8">
                                            <div class="user-name"><?php echo ucfirst($this->session->userdata("w_fname")) . " " . $this->session->userdata("w_lname"); ?></div>
                                            <div class="user-email"><?php echo $this->session->userdata("email") ?></div>
                                            <?php /* ?><div class="mywidth100"><a class="col-xs-12" href="/OnlineServices/Home/UpdateUserProfile">Edit profile</a></div>
                                              <div class="mywidth100"><a class="col-xs-12" href="/OnlineServices/Home/ChangePassword">Change password</a></div>
                                              <div class="mywidth100"><a class="col-xs-12"  href="/OnlineServices/Home/ChangeEmailID">Change EmailID </a></div><?php */ ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="logout-block">
                                    <div class="row clear-fix">
                                        <div class="col-xs-12 col-sm-12 text-center">
                                            <a id="lbLogout" href="<?php echo site_url('C_login_user/logout'); ?>" class="button-control small"><i class="fa fa-power-off pad-r10"></i>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}
?>