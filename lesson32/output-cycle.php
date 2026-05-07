<?php 

function printTegFor ($tag, $content, $num) {
    for ($num; $num > 0; $num--) {
        echo "<{$tag}>{$content}</{$tag}>";
    }
    
}


?>