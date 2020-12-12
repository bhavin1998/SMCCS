<div class="topbar hidden-xs">
    <div class="container text-right">
        
        <a href="#dvMainBody" class="pad-r10">Skip to Main Content</a>
        
        <div class="btn-group btn-group-xs" role="group" aria-label="...">
            <button class="btn btn-default" id="fontdecrease" title="Decrease Website's font size">A-</button>
            <button class="btn btn-default selected" id="fontdefault" title="Normal  Website's font size">A</button>
            <button class="btn btn-default" id="fontincrease" title="Increase Website's font size">A+</button>
        </div>
    </div>
</div>
<?php /* ?>
<div class="main-navigation">
    <nav class="navbar navbar-default" id="main-nav">
        <div class="container">
            <div class="navbar-header">
                <div class="pull-right">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                    <a href="Home/Login.html" title="New user sign up or login" class="visible-xs main-nav-signup">Sign up/Login</a>
                </div>
                <a class="navbar-brand" href='<?php echo base_url(); ?>' title="Back to Home Page"><img src="<?php echo base_url(); ?>static/Images/smc-logo.png" class="img-responsive hidden-xs" alt="Surat Municipal Corporation Logo" /><img src="<?php echo base_url(); ?>static/Images/smc-logo-small.png" alt="Surat Municipal Corporation - Small Logo" class="img-responsive visible-xs" /> </a>
            </div>
            <div class="collapse navbar-collapse" id="main-nav-collapse-1">
                <ul class="nav navbar-nav navbar-right">

                    <li class="devider hidden-xs">|</li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Help <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="<?php echo site_url("Back/faq"); ?>">FAQs</a></li>
                            <li><a href="">User Manual</a></li>
                        </ul>
                    </li>
                    <li class="devider hidden-xs">|</li>
                    <li><a href="<?php echo site_url("Back/contect"); ?>">Contact</a></li>
                    <?php if ($this->session->userdata("logged_in") == FALSE) { ?>
                        <li class="hidden-sm hidden-xs"><a href="<?php echo site_url('User-Registration'); ?>" title="Create Account" class="main-nav-signup-btn">Create Account<i class="fa fa-plus-circle"></i></a></li>
                        <li class="hidden-xs"><a href="<?php echo site_url("Login"); ?>" title="User Login" class="main-nav-login-btn">Login<i class="fa fa-angle-right"></i></a></li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </nav>
</div>*/?>
<div class="main-navigation">
    <nav class="navbar navbar-default" id="main-nav">
        <div class="container">
            <div class="navbar-header">
                <div class="pull-right">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                    <a href="/OnlineServices/Home/Login" title="New user sign up or login" class="visible-xs main-nav-signup">Sign up/Login</a>
                </div>
                <a class="navbar-brand" href='<?php echo base_url(); ?>' title="Back to Home Page"><img src="<?php echo base_url(); ?>static/Images/smc-logo.png" class="img-responsive hidden-xs" alt="Surat Municipal Corporation Logo" /><img src="<?php echo base_url(); ?>static/Images/smc-logo-small.png" alt="Surat Municipal Corporation - Small Logo" class="img-responsive visible-xs" /> </a> </div>
            <div class="collapse navbar-collapse" id="main-nav-collapse-1">
                <ul class="nav navbar-nav navbar-right">                    
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Help <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="<?php echo site_url("Back/faq"); ?>">FAQs</a></li>
                            <li><a href="">User Manual</a></li>
                        </ul>
                    </li>
                    <li class="devider hidden-xs">|</li>
                    <li><a href="<?php echo site_url("Back/contect"); ?>">Contact</a></li>
                    <?php if ($this->session->userdata("logged_in") == FALSE) { ?>
                        <li class="hidden-sm hidden-xs"><a href="<?php echo site_url('User-Registration'); ?>" title="Create Account" class="main-nav-signup-btn">Create Account<span class="fa fa-plus-circle"></span></a></li>
                        <li class="hidden-xs"><a href="<?php echo site_url("Login"); ?>" title="User Login" class="main-nav-login-btn">Login<span class="fa fa-angle-right"></span></a></li>
                            <?php } ?>
                </ul>
            </div>
        </div>
    </nav>
</div>