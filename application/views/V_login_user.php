<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Login Page - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Login page, Sign-in page, Login, Sign-in, Registation, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="SMCCS in the general login page into all user has to log in the system and according to display the dashboard.">

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

        <!-- Notification View -->
        <div class="page-wrapper innerpages " id="dvMainBody">

            <script src="<?php echo base_url(); ?>/PageScripts/Home/login-validation.js"></script>

            <div class="container">
                <section class="main-section login-section">
                    <section class="inner-section">
                        <div class="row form">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                                <div class="login-wrapper">

                                    <h1>Login</h1>
                                    <div class="contents">
                                        <form action="<?php echo site_url('C_login_user/get_user_type') ?>" id="login-form" method="post">                                            
                                            <div>
                                                <div id="login-details">
                                                    <div class="form-group">
                                                        <label for="txtEmail">Registered Email Address</label>
                                                        <input autocomplete="off" class="form-control" data-val="true" data-val-required="Please enter email address" id="txtEmail" maxlength="50" name="UserName" type="email" value="" />
                                                        <span class="field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="txtPassword">Password</label>
                                                        <input autocomplete="off" class="form-control" data-val="true" data-val-required="Please enter password" id="txtPassword" maxlength="50" name="Password" type="password" value=""/>
                                                        <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                                                    </div>
                                                    <div class="form-group">
                                                        <a href='<?php echo site_url('C_forgot_passwd/'); ?>'>Forgot password?</a>
                                                    </div>
                                                </div>
                                                <input id="ReturnUrl" name="ReturnUrl" type="hidden" value="" />
                                                <button type="submit" class="button-control mar-b15"><i class="fa fa-check-circle pad-r5"></i>Sign in</button>
                                                <button class="button-control inverse" type="reset"><i class="fa fa-refresh pad-r5"></i>Clear</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="seprator">
                                        <div class="OR-text">OR</div>
                                    </div>
                                    <div class="clearfix">
                                        <div class="mar-t20">
                                            <a href='<?php echo site_url('Back'); ?>' class="google-btn mar-b15"><span class="fa fa-google-plus pad-r10"></span>Continue with Google</a>
                                        </div>
                                    </div>
                                    <div class="new-user-signup">
                                        Don't have account? 
                                        <a href="<?php echo site_url('User-Registration'); ?>" class="new-user-signup-btn"><i class="fa fa-plus-circle pad-r10"></i>Create Account</a>
                                    </div>
                                    <div class="mar-t30">
                                        <a href="<?php echo site_url('C_login_user/face_unlock_view'); ?>" class="primary-color text-bold">Click Here </a>to Face Unlock
                                    </div>
                                </div>
                            </div>
                            <div class="hidden-xs hidden-sm col-md-6 col-lg-6 login-slider">
                                <div class="owl-carousel owl-theme owl-loaded" id="login-slider">
                                    <div class="owl-stage-outer">
                                        <div class="owl-stage" style="transform: translate3d(-2214px, 0px, 0px); transition: all 0.25s ease 0s; width: 2952px;">
                                            <div class="owl-item cloned" style="width: 369px; margin-right: 0px;">
                                                <div class="item">
                                                    <img src="https://www.suratmunicipal.gov.in//OnlineServices/images/Login-slider/icon3.png" alt="100% Secure Online Payment">
                                                    <p class="slider-caption">100% Secure<br>Online Payment</p>
                                                </div>
                                            </div>
                                            <div class="owl-item cloned" style="width: 369px; margin-right: 0px;"><div class="item">
                                                    <img src="https://www.suratmunicipal.gov.in//OnlineServices/images/Login-slider/icon4.png" alt="View Transaction History Anytime">
                                                    <p class="slider-caption">View Transaction<br>History Anytime</p>
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 369px; margin-right: 0px;"><div class="item">
                                                    <img src="https://www.suratmunicipal.gov.in//OnlineServices/images/Login-slider/icon1.png" alt="Single Account - Multiple Online Services">
                                                    <p class="slider-caption">Single Account<br>Multiple Online Services</p>
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 369px; margin-right: 0px;"><div class="item">
                                                    <img src="https://www.suratmunicipal.gov.in//OnlineServices/images/Login-slider/icon2.png" alt="Multiple Payment Mode Options Available">
                                                    <p class="slider-caption">Multiple Payment<br>Mode Options Available</p>
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 369px; margin-right: 0px;"><div class="item">
                                                    <img src="https://www.suratmunicipal.gov.in//OnlineServices/images/Login-slider/icon3.png" alt="100% Secure Online Payment">
                                                    <p class="slider-caption">100% Secure<br>Online Payment</p>
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 369px; margin-right: 0px;"><div class="item">
                                                    <img src="https://www.suratmunicipal.gov.in//OnlineServices/images/Login-slider/icon4.png" alt="View Transaction History Anytime">
                                                    <p class="slider-caption">View Transaction<br>History Anytime</p>
                                                </div>
                                            </div>
                                            <div class="owl-item cloned active" style="width: 369px; margin-right: 0px;"><div class="item">
                                                    <img src="https://www.suratmunicipal.gov.in//OnlineServices/images/Login-slider/icon1.png" alt="Single Account - Multiple Online Services">
                                                    <p class="slider-caption">Single Account<br>Multiple Online Services</p>
                                                </div>
                                            </div>
                                            <div class="owl-item cloned" style="width: 369px; margin-right: 0px;"><div class="item">
                                                    <img src="https://www.suratmunicipal.gov.in//OnlineServices/images/Login-slider/icon2.png" alt="Multiple Payment Mode Options Available">
                                                    <p class="slider-caption">Multiple Payment<br>Mode Options Available</p>
                                                </div>
                                            </div>
                                        </div></div><div class="owl-controls"><div class="owl-nav"><div class="owl-prev" style="display: none;">prev</div><div class="owl-next" style="display: none;">next</div></div><div style="" class="owl-dots"><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div></div></div></div>                                
                                <noscript></noscript>
                                <script>
                                    $('#login-slider').owlCarousel({
                                        items: 1,
                                        loop: true,
                                        autoplay: true,
                                        autoplayTimeout: 8000,
                                        autoplayHoverPause: true,
                                        margin: 0,
                                        nav: false,
                                        dots: true,
                                        lazyLoad: true,
                                    })
                                </script>
                                <noscript></noscript>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            <div>
                <input id="dataRepo" type="hidden" />
            </div>
        </div>
        <div id="dialog-confirm">
        </div>
        <!-- Footer -->
        <?php include("footer_bar.php"); ?>
        <!--footer Include-->
        <?php include("footer_include.php"); ?>
        <!--footer Include-->
    </body>
</html>