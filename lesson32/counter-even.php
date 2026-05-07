
<?php 

$nums = [1,2,3,5,6,7,7,22,11,66,46];
for ($index = 0; $index < count($nums); $index++) {
    if ($nums[$index] % 2 == 0) {
        echo $nums[$index];
    }
}

?>