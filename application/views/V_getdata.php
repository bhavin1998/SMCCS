<?php

if (!empty($subcategory)) {
    ?>
    <option value="">Select Sub-Category</option>
    <?php
    foreach ($subcategory as $v_subcate) {
        ?>
        <option value="<?php echo $v_subcate->sub_ctg_id; ?>"><?php echo $v_subcate->sub_name; ?></option>
        <?php
    }
}
if (!empty($sector)) {
    ?>
    <option value="">Select Sector</option>
    <?php
    foreach ($sector as $v_sector) {
        ?>
        <option value="<?php echo $v_sector->sec_id; ?>"><?php echo $v_sector->sec_name; ?></option>
        <?php
    }
}
?>