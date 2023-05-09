<?php

    session_start();
    ob_start();
    if(isset($_GET['logout'])){
        unset($_SESSION['admin']);
    }
    header('location: login.php');

?>