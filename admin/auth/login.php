<?php session_start();?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Kim Đồng">
    <meta name="keywords" content="Kim Đồng">
    <meta name="author" content="Kim Đồng">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="refresh" content="30">
    <title>Login</title>

    <!-- start css -->
    <link rel="stylesheet" href="../assets/vendor/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="../assets/css/login.css">
    <!-- end css -->
</head>

<body>

    <div class="form-container">
        <div class="login-logo">
            <img src="../assets/img/logo.png" alt="logo">
        </div>
        <label for="">Login</label>
        <form action="" method="post" enctype="multipart/form-data">
            <input type="hidden" name="auth" value="admin">
            <div class="input-group">
                <input type="text" id="username" name="username" required>
                <label for="">Username</label>
            </div>
            <div class="input-group">
                <input type="password" id="password" name="password" required>
                <label for="">Password</label>
                <span class="toggle-password">
                    <i class="fa fa-eye fa-eye-slash" id="toggle-eye"></i>
                </span>
            </div>

            <div class="button-group">
                <button class="button-submit" name="login">Submit</button>
            </div>
        </form>
    </div>

    <!-- start js -->
    <script src="../assets/vendor/jquery/jquery.js"></script>
    <script src="../assets/vendor/fontawesome/js/all.min.js"></script>
    <script src="../assets/vendor/sweetalert2/sweetalert2@11.js"></script>
    <script src="../assets/js/login.js"></script>

    <?php
        if(isset($_POST['login'])){
            $username = $_POST['username'];
            $password = $_POST['password'];
            
            if($username != 'admin'){
                echo "<script>
                Swal.fire(
                    'Đăng nhập thất bại',
                    'Thông tin đăng nhập không đúng hoặc đã bị khóa',
                    'error'
                  )
                </script>";
            }else{
                $_SESSION['admin'] = $username;
                header('location: ../admin/');
            }
        }
    ?>
    <!-- end js -->
</body>

</html>