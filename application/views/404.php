<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$uri_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri_segments = explode('/', $uri_path);
if($uri_segments[2]!=="404")
{
    $location= "http://localhost/smccs/404";
    header("Location: $location"); 
}
?><!DOCTYPE html>
<html lang="en">
    <head>
        <?php include("header_include.php"); ?>

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

        <!-- Notification View -->
        <div class="page-wrapper innerpages " id="dvMainBody">

            <script src="<?php echo base_url(); ?>/PageScripts/Home/login-validation.js"></script>

            <div class="container">
                <section class="main-section login-section">
                    <section class="inner-section" >
                        <div class="row form" >
                            <center style="">
                                <h1 style="font-size: 76px;padding: 100px 0px 100px 0px;" >404</h1>
                                <h2>This Page not Found</h2>
                                <h4>Click Home Page link </h4>
                                <h4><a href="<?php echo base_url(); ?>"><button class="btn btn-dark">Home</button></a></h4>
                            </center>
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
