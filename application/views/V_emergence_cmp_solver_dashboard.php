<!DOCTYPE html>
<?php
//if (empty($chart_info)) {
//    $temp_data = "No Complaint Posted Yet.";
//} else {
//    foreach ($chart_info as $V_chart_info) {
//        $dataPoints[] = array("label" => $V_chart_info->status, "y" => $V_chart_info->count);
//    }
//}
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
        
        <?php include("header_include.php"); ?>
        <script>
            window.onload = function () {


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
<!--        <div id="dvWait" class="dvLoad">
            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i><span>Loading...</span>
        </div>-->
        <!--header--->

        <div class="page-wrapper innerpages " id="dvMainBody">

            <div class="container">
                <section class="main-section">
                    <section class="inner-section">
                        <div class="form">
                            <div class="page-heading">
                                <div class="row">
                                    <?php /* ?><div class="col-sm-12">
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
                                    </div><?php */ ?>
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