<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Home page - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
       
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Home page, Main page, Home screen, Dashborad , First Page, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="This page is Home page display also base information related to SMCCS system.">

        <?php include("header_include.php"); ?>
    </head>

    <body>
        <!--header--->
        <header>
            <?php include("header_bar.php"); ?>
            <?php include("header_user_menu.php"); ?>
            <input id="UTCDate" name="UTCDate" type="hidden" value="26" />
        </header>
        <script>
            $('.main-slider').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                margin: 0,
                nav: true,
                dots: false,
                lazyLoad: true,
                navText: ["<span class='hidden'>Previous Slide</span><i class='fa fa-angle-left'></i>", "<span class='hidden'>Next Slide</span><i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        //items:2   for centering the element
                        items: 1
                    }
                }
            })
            $(window).load(function() {
                $(".slider-1-Caption").fadeIn("slow");
            });
        </script>
        <div class="page-wrapper homepage" id="dvMainBody">
            <div class="create-account-wrapper visible-sm visible-xs">
                <span class="caption">Don't Have Account?</span><a href="<?php echo site_url('User-Registration'); ?>" class="button-control"><i class="fa fa-plus-circle pad-r10"></i>Create Account</a>
            </div>
            <section class="welcome-text text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <p class="highlighted primary-color">Welcome to Profile based <span>Surat Municipal Corporation</span></p>
                        </div>
                        <div class="col-sm-12">
                            <p>With a view to provide easy services to the citizens, SMC has started the profile based online Portal. To benefit from this, you need to register with your email address. Once verified, you can enrol for different type of the complaint post like road issues, garbage issues, water supply problem, Electricity issues, Street light and Covid. The posted complaint will be linked to your profile and will give to regular upadte to the system and also track complaint status. </p>
                            <p class="text-bold">We are look forward to your co-operation for this new profile based Citizen Portal. Various online complaint will be post to this section gradually.</p>

                        </div>
                    </div>
                </div>
            </section>
            <section class="online-services">
                <div class="container">
                    <h2 class="text-center text-uppercase">Online Services</h2>

                    <div class="item">
                        <div class="online-app">
                            <div class="app-icon spin circle"><img src="<?php echo base_url(); ?>static/Images/icons/g/s/Complaint.png" alt="Complaint"></div>
                            <div class="app-details">
                                <h3 class="text-uppercase primary-color mar-t20 mar-b20">Complaint</h3>
                                <p>Not satisfied with the services by SMC, register your complaint and track the complaint status. </p>

                            </div>
                            <div class="app-actions">
                                <div class="btn-group dropup">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>Launch New Complaint</span> <span class="sr-only">Toggle Dropdown</span>
                                        <i class="fa fa-angle-up"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="<?php echo site_url("My-complaint/show/") . $this->session->userdata("c_id"); ?>">My Complaints</a></li>
                                        <li><a href="<?php echo site_url("New-complaint"); ?>">Launch New Complaint</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

            </section>
            <script>
                $('.online-services-list-slider').owlCarousel({
                    loop: false,
                    autoplay: true,
                    autoplayTimeout: 8000,
                    autoplayHoverPause: true,
                    margin: 30,
                    nav: false,
                    dots: false,
                    lazyLoad: true,
                    //center: true, for centering the element
                    navText: ["<span class='hidden'>Previous Slide</span><i class='fa fa-angle-left'></i>", "<span class='hidden'>Next Slide</span><i class='fa fa-angle-right'></i>"],
                    responsive: {
                        0: {
                            items: 1,
                            nav: false,
                            dots: true
                        },
                        400: {
                            items: 1,
                            nav: false,
                            dots: true,
                            margin: 40
                        },
                        600: {
                            items: 2,
                            nav: false,
                            dots: true
                        },
                        1100: {
                            items: 3,
                            nav: true
                        },
                        1400: {
                            items: 4,
                            nav: true
                        }
                    }
                })
                $(window).load(function() {
                    $(".slider-1-Caption").fadeIn("slow");
                });
            </script>
            <section class="howitworks">
                <div class="container">
                    <h2 class="text-center">How It Works</h2>
                    <div class="clearfix">
                        <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
                            <p class="text-center">Manage all your Property Tax, Professional Tax, Property Ledger Details, Shop and Establishment Registration/Renewal and many more in our profile based Virtual Civic Center(Online Services) :: Surat Municipal Corporation - Citizen Portal</p>
                        </div>
                    </div>
                    <ul class="list-inline text-center">
                        <li><img src="<?php echo base_url(); ?>static/Images/HowItWorks-Step1.png" alt="How It Works - Step 1" /></li>
                        <li><img src="<?php echo base_url(); ?>static/Images/HowItWorks-Step2.png" alt="How It Works - Step 2" /></li>
                        <li><img src="<?php echo base_url(); ?>static/Images/HowItWorks-Step3.png" alt="How It Works - Step 3" /></li>
                        <li><img src="<?php echo base_url(); ?>static/Images/HowItWorks-Step4.png" alt="How It Works - Step 4" /></li>
                    </ul>
                </div>
            </section>

            <section class="imp-links">
                <div class="container">
                    <ul class="list-inline">
                        <li>
                            <a href="https://www.suratmunicipal.gov.in/" target="_blank" rel="nofollow"><img src="<?php echo base_url(); ?>static/Images/imp-link-smc.png" alt="Surat Municipal Corporation Logo" class="hidden-xs" /><img src="<?php echo base_url(); ?>static/Images/smc-portal.png" alt="Surat Municipal Corporation Logo" class="visible-xs-inline-block" /></a>
                        </li>
                        <li>
                            <a href="http://gujaratindia.com/" target="_blank" rel="nofollow"><img src="<?php echo base_url(); ?>static/Images/imp-link-gujarat.png" alt="Gujarat Government Portal Logo" class="hidden-xs" /><img src="<?php echo base_url(); ?>static/Images/gujarat-portal.png" alt="Gujarat Government Portal Logo" class="visible-xs-inline-block" /></a>
                        </li>
                        <li>
                            <a href="http://smartcities.gov.in/" target="_blank" rel="nofollow"><img src="<?php echo base_url(); ?>static/Images/imp-link-smartcity.png" alt="Smart Cities - Government of India Logo" class="hidden-xs" /><img src="<?php echo base_url(); ?>static/Images/smartcity-portal.png" alt="Smart Cities - Government of India Logo" class="visible-xs-inline-block" /></a>
                        </li>
                        <li>
                            <a href="https://india.gov.in/" target="_blank" rel="nofollow"><img src="<?php echo base_url(); ?>static/Images/imp-link-india.png" alt="Indian Government Portal Logo" class="hidden-xs" /><img src="<?php echo base_url(); ?>static/Images/india-portal.png" alt="Indian Government Portal Logo" class="visible-xs-inline-block" /></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <!-- Footer -->
        <?php include("footer_bar.php"); ?>
        <!--footer Include-->
        <?php include("footer_include.php"); ?>
        <!--footer Include-->
    </body>

</html>