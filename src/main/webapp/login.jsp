<%--
  Created by IntelliJ IDEA.
  User: ASUS-VIVOBOOK
  Date: 10/6/2023
  Time: 11:33 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập</title>
    <link rel="icon" type="image/x-icon" href="./img/favicon.png">
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./font-awesome/css/font-awesome.min.css">
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            background: #464444;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Times New Roman', Times, serif;
            height: 100vh;
            margin: -20px 0 50px;
        }

        h1 {
            font-weight: bold;
            margin: 0;
        }

        p {
            font-size: 14px;
            font-weight: 100;
            line-height: 20px;
            letter-spacing: 0.5px;
            margin: 20px 0 30px;
        }

        span {
            font-size: 17px;
        }

        a {
            color: #333;
            font-size: 14px;
            margin: 15px 0;
        }

        button {
            border-radius: 20px;
            border: 1px solid  #5a88ca;
            background-color: #5a88ca;
            color: #FFFFFF;
            font-size: 12px;
            font-weight: bold;
            padding: 12px 45px;
            text-transform: uppercase;
        }

        button:active {
            transform: scale(1.45);
        }

        button:focus {
            outline: none;
        }

        button.ghost {
            background-color: transparent;
            border-color: #FFFFFF;
        }

        form {
            background-color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 50px;
            height: 100%;
            text-align: center;
        }

        input {
            background-color: #eee;
            border: none;
            padding: 12px 15px;
            margin: 8px 0;
            width: 100%;
        }

        .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
            position: relative;
            overflow: hidden;
            width: 768px;
            max-width: 100%;
            min-height: 480px;
        }

        .form-container {
            position: absolute;
            top: 0;
            height: 100%;
            transition: all 0.6s ease-in-out;
        }

        .sign-in-container {
            left: 0;
            width: 50%;
            z-index: 2;
        }

        .container.right-panel-active .sign-in-container {
            transform: translateX(100%);
        }

        .sign-up-container {
            left: 0;
            width: 50%;
            opacity: 0;
            z-index: 1;
        }

        .container.right-panel-active .sign-up-container {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: show 0.6s;
        }


        .overlay-container {
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: transform 0.6s ease-in-out;
            z-index: 100;
        }

        .container.right-panel-active .overlay-container {
            transform: translateX(-100%);
        }

        .overlay {
            background: #f28d00;
            background: -webkit-linear-gradient(to right, #ec410d, #5a88ca);
            background: linear-gradient(to right, #021c41, #f85814);
            color: #FFFFFF;
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            transform: translateX(0);
            transition: transform 0.6s ease-in-out;
        }

        .container.right-panel-active .overlay {
            transform: translateX(50%);
        }

        .overlay-panel {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 40px;
            text-align: center;
            top: 0;
            height: 100%;
            width: 50%;
            transform: translateX(0);
            transition: transform 0.6s ease-in-out;
        }

        .overlay-left {
            transform: translateX(-20%);
        }

        .container.right-panel-active .overlay-left {
            transform: translateX(0);
        }

        .overlay-right {
            right: 0;
            transform: translateX(0);
        }

        .container.right-panel-active .overlay-right {
            transform: translateX(20%);
        }

        .social-container {
            margin: 20px 0;
        }

        .social-container a {
            border: 1px solid #DDDDDD;
            border-radius: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 5px;
            height: 40px;
            width: 40px;
        }
    </style>
    <script>
        $(document).ready(function(){
            function kiemTraEmail(){
                let email = $("#email").val()
                let regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                if(email.trim()==""){
                    $("#erroremail").html("Email không được để trống!")
                    return false
                }
                if(!regexEmail.test(email)){
                    $("#erroremail").html("Tên email sai cú pháp!")
                    return false
                }
                $("#erroremail").html("")
                return true
            }
            function kiemTraEmailDangky(){
                let email = $("#email2").val()
                let regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                if(email.trim()==""){
                    $("#erroremail2").html("Email không được để trống!")
                    return false
                }
                if(!regexEmail.test(email)){
                    $("#erroremail2").html("Tên email sai cú pháp!")
                    return false
                }
                $("#erroremail2").html("")
                return true
            }
            function kiemtraTen(){
                let ten = $("#tendangky").val()
                let regexTen = /^([A-Z][a-zA-Z]*)(\s[A-Z][a-zA-Z]*)*$/
                if(ten.trim()==""){
                    $("#errorten").html("Tên không được để trống!")
                    return false
                }
                if(!regexTen.test(ten)){
                    $("#errorten").html("Kí tự đầu trong tên phải viết hoa!")
                    return false
                }
                $("#errorten").html("")
                return true
            }
            function kiemtraMatKhau(){
                let pass = $("#pass").val()
                let regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                if(pass.trim()==""){
                    $("#errorpass").html("Mật khẩu không được để trống!")
                    return false
                }
                if(!regexPass.test(pass)){
                    $("#errorpass").html("Mật khẩu phải tối thiểu 8 kí tự, ít nhất một chữ cái và một số!")
                    return false
                }
                $("#errorpass").html("")
                return true
            }
            $("#email").blur(kiemTraEmail)
            $("#email2").blur(kiemTraEmailDangky)
            $("#tendangky").blur(kiemtraTen)
            $("#pass").blur(kiemtraMatKhau)
            $("#dangky").click(function(){
                if(!kiemtraTen())
                    return false
                if(!kiemTraEmailDangky())
                    return false
                if(!kiemtraMatKhau())
                    return false
            })
            $("#dangnhap").click(function(){
                if(!kiemTraEmail())
                    return false
            })
        });
    </script>
</head>
<body>
<div class="container" id="container">
    <div class="form-container sign-up-container">
        <form action="#">
            <h1>Đăng ký</h1>
            <div class="social-container">
                <a href="#" class="social"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-google" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
            </div>
            <span>Hoặc sử dụng Email để đăng ký!</span>
            <input type="text" placeholder="Tên" id="tendangky">
            <span id="errorten" class="text-danger font-italic"></span>
            <input type="email" placeholder="Email" id="email2">
            <span id="erroremail2" class="text-danger font-italic"></span>
            <input type="password" placeholder="Mật khẩu" id="pass">
            <span id="errorpass" class="text-danger font-italic"></span>
            <button id="dangky">Đăng ký</button>
        </form>
    </div>
    <div class="form-container sign-in-container">
        <form action="control-servlet?action=login" method="post">
            <h1>Đăng nhập</h1>
            <div class="social-container">
                <a href="#" class="social"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-google" aria-hidden="true"></i></a>
                <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
            </div>
            <span>Hoặc sử dụng tài khoản của bạn</span>
            <input type="email" placeholder="Email" id="email">
            <span id="erroremail" class="text-danger font-italic"></span>
            <input type="password" placeholder="Mật khẩu">
            <span id="errorpassword" class="text-danger font-italic"></span>
            <a href="#">Quên mật khẩu?</a>
            <button id="dangnhap" type="submit">Đăng nhập</button>
        </form>
    </div>
    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-panel overlay-left">
                <h1>Chào mừng khách hàng mới</h1>
                <p>Vui lòng đăng nhập bằng thông tin cá nhân của bạn vừa đăng ký.</p>
                <button class="ghost" id="signIn">Đăng nhập</button>
            </div>
            <div class="overlay-panel overlay-right">
                <h1>Xin chào</h1>
                <p>Nếu bạn chưa có tài khoản vui lòng đăng ký tài khoản để được trải nghiệm về các sản phẩm của chúng tôi.</p>
                <button class="ghost" id="signUp">Đăng ký</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>

<script>
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
</script>