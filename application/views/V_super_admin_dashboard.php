<!DOCTYPE html>
<?php
?>
<html lang="en">

    <head>
        <title>Super admin dashboard - surat municipal corporation complaint system</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Dashboard, view dashboard, view complaint graph, see dashboard, super admin dashboard, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
        <meta name="description" content="Super admin view dashboard and see how many complaint raised in which zone and display in graphical form.">

        <?php include("header_include.php"); ?>
        <?php
        
        foreach ($r_panding as $v) {
            if ($v->z_id == "1") {
                $dataPoints2[1] = array("label" => "west", "y" => $v->count);
            } else {
                $dataPoints2[1] = array("label" => "west", "y" => 0);
            }
            if ($v->z_id == "2") {
                $dataPoints2[2] = array("label" => "central", "y" => $v->count);
            } else {
                $dataPoints2[2] = array("label" => "central", "y" => 0);
            }
            if ($v->z_id == "3") {
                $dataPoints2[3] = array("label" => "north", "y" => $v->count);
            } else {
                $dataPoints2[3] = array("label" => "north", "y" => 0);
            }
            if ($v->z_id == "4") {
                $dataPoints2[4] = array("label" => "south", "y" => $v->count);
            } else {
                $dataPoints2[4] = array("label" => "south", "y" => 0);
            }
            if ($v->z_id == "5") {
                $dataPoints2[5] = array("label" => "east", "y" => $v->count);
            } else {
                $dataPoints2[5] = array("label" => "east", "y" => 0);
            }
            if ($v->z_id == "6") {
                $dataPoints2[6] = array("label" => "South West", "y" => $v->count);
            } else {
                $dataPoints2[6] = array("label" => "South West", "y" => 0);
            }
        }
        foreach ($r_completed as $vc) {
            if ($vc->z_id == "1") {
                $dataPoints1[1] = array("label" => "west", "y" => $vc->count);
            } else {
                $dataPoints1[1] = array("label" => "west", "y" => 0);
            }
            if ($vc->z_id == "2") {
                $dataPoints1[2] = array("label" => "central", "y" => $vc->count);
            } else {
                $dataPoints1[2] = array("label" => "central", "y" => 0);
            }
            if ($vc->z_id == "3") {
                $dataPoints1[3] = array("label" => "north", "y" => $vc->count);
            } else {
                $dataPoints1[3] = array("label" => "north", "y" => 0);
            }
            if ($vc->z_id == "4") {
                $dataPoints1[4] = array("label" => "south", "y" => $vc->count);
            } else {
                $dataPoints1[4] = array("label" => "south", "y" => 0);
            }
            if ($vc->z_id == "5") {
                $dataPoints1[5] = array("label" => "east", "y" => $vc->count);
            } else {
                $dataPoints1[5] = array("label" => "east", "y" => 0);
            }
            if ($vc->z_id == "6") {
                $dataPoints1[6] = array("label" => "South West", "y" => $vc->count);
            } else {
                $dataPoints1[6] = array("label" => "South West", "y" => 0);
            }
        }
       
      
        ?>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const chart = Highcharts.chart('container', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Solved vs Unsolved Complaint'
                    },
                    xAxis: {
                        categories: ['West zone', 'Central zone', 'North zone','South zone','East zone','South West zone']
                    },
                    yAxis: {
                        title: {
                            text: 'Complent'
                        }
                    },
                    series: [{
                            name: 'Solved',
                            data: [<?php echo $dataPoints2[1]['y']; ?>, <?php echo $dataPoints2[2]['y']; ?>, <?php echo $dataPoints2[3]['y']; ?>,<?php echo $dataPoints2[4]['y']; ?>,<?php echo $dataPoints2[5]['y']; ?>,<?php echo $dataPoints2[6]['y']; ?>]
                        }, {
                            name: 'Unsolved',
                            data: [<?php echo $dataPoints1[1]['y']; ?>, <?php echo $dataPoints1[2]['y']; ?>, <?php echo $dataPoints1[3]['y']; ?>,<?php echo $dataPoints1[4]['y']; ?>,<?php echo $dataPoints1[5]['y']; ?>,<?php echo $dataPoints1[6]['y']; ?>]
                        }]
                });
            });
            let chart; // globally available
            document.addEventListener('DOMContentLoaded', function () {
                chart = Highcharts.stockChart('container', {
                    rangeSelector: {
                        selected: 1
                    },
                    series: [{
                            name: 'USD to EUR',
                            data: usdtoeur // predefined JavaScript array
                        }]
                });
            });
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
                                            <h1 class="alternate">Dashboard</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-md-12">
                                    <div class="row">
                                        <div class="row">
                                            <div class="col-sm-12 text-center mar-b30">
                                                <img src="<?php echo base_url(); ?>static/map.png">
                                                <br>
                                                <br>
                                                <br>
                                                <div id="container" style="width:100%; height:400px;"></div>
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