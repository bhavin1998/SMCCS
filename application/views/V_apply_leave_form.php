<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Worker apply leave</title>

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta name="author" content="surat municipal corporation complaint system">
        <meta name="keywords" content="Apply leave, Apply for leave, How to apply for leave, Hrms leave apply, Apply for sick leave, Ehrms leave apply online, Apply for one day leave, Apply leave for personal reasons, Leave apply form Applying leave for festival, How to apply for a leave of absence, Applying leave in office, smccs, smc, surat, complaint, corporations, surat municipal corporations,surat municipal corporation complaint system, leave, apply leave, holiday, reason, emergency work, online payment, property tax, professional tax, shops &amp; establishment license, online renewal, gujarat, india, asia, virtual civic center, e-governance, information technology">
        <meta name="description" content="surat municipal corporation complaint system in worker can apply leave for worker need to leave.">

        <?php include("header_include.php"); ?>
        <script type="text/javascript">

            $(document).ready(function ()
            {
                $('#zone').on('change', function ()
                {
                    var zoneID = $(this).val();
                    // alert(countryID);
                    if (zoneID)
                    {
                        //alert(categoryID);
                        $.ajax({
                            type: 'POST',
                            url: '<?php echo site_url("C_getdata/get_sector"); ?>',
                            data: 'zid=' + zoneID,
                            success: function (html)
                            {
                                //alert(html);
                                $('#Wards').html(html);
                            }
                        });
                    }
                });
            });
        </script>
    </head>
    <body class="other-pages">
        <header>
            <?php include("header_bar.php"); ?>
            <?php include("header_user_menu.php"); ?>
        </header>

        <!-- Notification View -->

        <!-- Dynamic Page Body goes here -->
        <div class="page-wrapper innerpages " id="dvMainBody">
            <div class="container">
                <section class="main-section">
                    <section class="inner-section">
                        <div class="page-heading">
                            <div class="row">
                                <div class="ol-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="page-heading">
                                        <h1 class="alternate">Edit profile</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <form action="<?php echo site_url('C_apply_leave/apply_leave'); ?>" id="profile-form" method="post">            
                            <?php if (!empty($msg)) { ?><div class="alert alert-info"><strong>Note:</strong> <?php echo $msg; ?></div><?php } ?>
                            <div class="row form userprofile">
                                <div class="col-sm-8">
                                    <div class="block">
                                        <div id="user-details">
                                            <div class="row clearfix mar-b30">
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="FirstName">From Date <span class="text-danger">*</span></label>
                                                        <input autocomplete="off" class="form-control datepicker" data-val="true" data-val-required="Required" id="DateOfBirth" maxlength="10" name="sdate" placeholder="dd-MM-yyyy" type="date" value="">
                                                        <span class="field-validation-valid" data-valmsg-for="FirstName" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="form-group">
                                                        <label for="LastName">To Date <span class="text-danger">*</span></label>
                                                        <input autocomplete="off" class="form-control datepicker" data-val="true" data-val-required="Required" id="DateOfBirth" maxlength="10" name="edate" placeholder="dd-MM-yyyy" type="date" value="">
                                                        <span class="field-validation-valid" data-valmsg-for="LastName" data-valmsg-replace="true"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row clearfix mar-b30">
                                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div class="form-group">
                                                        <label for="cAddress">Reason</label>
                                                        <textarea id="leaveDescription" autocomplete="off" class="form-control" data-val="true" data-val-regex="Invalid input characters." data-val-regex-pattern="^[^<>!'&quot;`~\-<|>]+$" maxlength="75" name="txtdis" type="text" required></textarea>
                                                    </div>
                                                    <div class="col-sm-7"></div>
                                                    <div class="col-sm-5 text-right"><div class="text-danger">Remaining Characters <span id="char_Left"> 75</span> </div></div>
                                                </div>
                                            </div>    
                                            <div class="action-contents transactions" style="padding: 22px 0;">
                                                <ul class="list-unstyled action-btns">
                                                    <li>
                                                        <button type="submit" class="button-control"><i class="fa fa-check-circle pad-r5"></i>Apply Leave</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                </section>
            </div>
        </div>
        <?php include("footer_bar.php"); ?>
        <!--footer Include-->
        <?php include("footer_include.php"); ?>
        <script src="<?php echo base_url(); ?>static/js/oprations.js"></script>
    </body>
</html>
