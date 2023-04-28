<?php
    if(isset($_GET['route'])){
        switch($_GET['route']){
            case 'admin':
                require 'admin/index.php';
                break;
        }
    }
?>