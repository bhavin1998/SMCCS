<!DOCTYPE html>
<?php
foreach ($pecentag as $v_pecentag) {
    $dataPoints[] = array("label" => $v_pecentag->status, "y" => $v_pecentag->count);
}
?>
<html lang="en">

<head>

    <title>Citizen Dashboard - surat municipal corporation complaint system</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
   
    <meta name="author" content="surat municipal corporation complaint system">
    <meta name="keywords" content="citizen, citizen feedback, citizen post complaint, Citizen View complaint, Office of citizen complaints, Citizen complaint form, Citizen assign complaint to higher authorities, Citizen complaint, smccs, smc, Surat, complaint, corporations, surat municipal corporations, surat municipal corporation complaint system, online payment, shops &amp; gujarat, india, asia, e-governance, information technology">
    <meta name="description" content="surat municipal corporation complaint system in citizen can register then after post complaint related to road issues, light issues, water issues or Drainage and Storm Drain. Citizen tracks the complaint status and gives according to remark.">
    
    <?php include("header_include.php"); ?>
    <script>
        window.onload = function() {
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {
                    text: "complaint chart"
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
        <?php include("header_user_menu.php");
        ?>
        <input id="UTCDate" name="UTCDate" type="hidden" value="26" />
    </header>
<!--    <div id="dvWait" class="dvLoad">
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
                                <div class="col-sm-12">
                                    <div class="page-heading">
                                        <h1 class="page-heading">Dashboard</h1>
                                    </div><hr>
                                </div>
                            </div>
                        </div>
                        <div class="row clearfix">
                            <div class="col-xs-12 col-sm-6 col-md-8 col-md-8">

                                <div class="row">

                                    <div class="row">
                                        <div class="col-sm-12 text-center mar-b30">
                                            <div id="chartContainer" style="height: 570px; width: 100%;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-4 col-md-4">
                                <div class="card-complaint">
                                    <div class="text-right card-link">
                                        <a href="<?php echo site_url("New-complaint"); ?>"><i class="fa fa-plus pad-r5"></i>Lodge New Complaint</a>
                                    </div>
                                    <div class="complaint-dashboard">
                                        <a class="card2 complaint completed-complaints recent" title="Recently Complied Complaints (Reopen Possible) - 0" href="javjavascript:void(0);">
                                            <div class="row">
                                                <div class="count col-xs-3 col-sm-3">
                                                    <?php
                                                    foreach ($total as $v_total) {
                                                        if ($v_total->status == "pending") {
                                                            echo $v_total->count;
                                                        }
                                                    }
                                                    ?>
                                                </div>
                                                <div class="card-text col-xs-9 col-sm-9">
                                                    Pending Complaints
                                                </div>
                                            </div>
                                        </a>
                                        <a class="card2 complaint completed-complaints" title="Complied Complaints - 0" href="javjavascript:void(0);">
                                            <div class="row">
                                                <div class="count col-xs-3 col-sm-3">
                                                    <?php
                                                    foreach ($total as $v_total) {
                                                        if ($v_total->status == "in progress") {
                                                            echo $v_total->count;
                                                        }
                                                    }
                                                    ?>
                                                </div>
                                                <div class="card-text col-xs-9 col-sm-9">
                                                    In-process Complaints
                                                </div>
                                            </div>
                                        </a>
                                        <a class="card2 complaint pending-complaints" title="Pending Complaints - 0" href="javjavascript:void(0);">
                                            <div class="row">
                                                <div class="count col-xs-3 col-sm-3">
                                                    <?php
                                                    foreach ($total as $v_total) {
                                                        if ($v_total->status == "completed") {
                                                            echo $v_total->count;
                                                        }
                                                    }
                                                    ?>
                                                </div>
                                                <div class="card-text col-xs-9 col-sm-9">
                                                    Complied Complaints
                                                </div>
                                            </div>
                                        </a>
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