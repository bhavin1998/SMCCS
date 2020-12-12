<!DOCTYPE html>
<?php

if (empty($chart_info)) {
    $temp_data = "No Complaint Posted Yet.";
} else {
    foreach ($chart_info as $V_chart_info) {
        $dataPoints[] = array("label" => $V_chart_info->status, "y" => $V_chart_info->count);
    }
}
//$dataPoints = array(
//    array("label" => "Chrome", "y" => 64.02),
//    array("label" => "Firefox", "y" => 12.55),
//    array("label" => "IE", "y" => 8.47),
//    array("label" => "Safari", "y" => 6.08),
//    array("label" => "Edge", "y" => 4.29),
//    array("label" => "Others", "y" => 4.59)
//);
?>
<html lang="en">

<head>
    <title>Sector Admin Dashboard - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="Sector admin, Sector admin dashboard, Dashboard, Home page, Home screen, Main Screen, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="Sector admin login with authentication then display according to the dashboard in SMCCS.">

    <?php include("header_include.php"); ?>
    <script>
        window.onload = function() {


            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {
                    text: "Your sector Panding and completed complaint"
                },
                subtitles: [{
                    text: "November 2019-2020"
                }],
                data: [{
                    type: "pie",
                    yValueFormatString: "#,##0.00\"%\"",
                    indexLabel: "{label} ({y})",
                    dataPoints: <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
                }]
            });
            chart.render();

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

    <div class="page-wrapper innerpages " id="dvMainBody">

        <div class="container">
            <section class="main-section">
                <section class="inner-section">
                    <div class="form">
                        <div class="page-heading">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="page-heading">
                                        <h1 class="page-heading">Dashboard</h1>
                                    </div>

                                    <?php
                                    if (!empty($temp_data)) {
                                    ?>
                                        <div class="user-profile-details">
                                            <div align="center">
                                                <H2>
                                                    <?php
                                                    echo $temp_data;
                                                    ?>
                                                </h2>
                                            </div>
                                        <?php
                                    }
                                        ?>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-md-12">

                                <div class="row">
                                    <div class="row">
                                        <div class="col-sm-12 text-center mar-b30">
                                            <div id="chartContainer" style="height: 570px; width: 100%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    <!-- Footer -->
    <?php include("footer_bar.php"); ?>
    <!--footer Include-->
    <?php include("footer_include.php"); ?>
    <!--footer Include-->
</body>

</html>