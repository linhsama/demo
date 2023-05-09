<?php
    session_start();

    if(isset($_SESSION['admin'])){
        require 'home.php';
    }else{
        header('Location:auth/login');
    }

?>