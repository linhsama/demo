<?php
    if(isset($_GET['page'])){
        switch($_GET['page']){
            case 'dashboard':
                require 'dashboard.php';
                break;

        }
    }
?>