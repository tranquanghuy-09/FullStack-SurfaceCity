<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<%@ page import="vn.edu.iuh.fit.frontend.models.ProductPriceModel" %>
<%@ page import="java.text.DecimalFormat" %>
<%@ page import="vn.edu.iuh.fit.backend.enums.EmployeeStatus" %>
<%@ page import="java.time.LocalDateTime" %>
<%@ page import="vn.edu.iuh.fit.backend.models.*" %><%--
  Created by IntelliJ IDEA.
  User: ASUS-VIVOBOOK
  Date: 10/6/2023
  Time: 7:29 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    List<CartDetail> cartDetailList;
    Object objCartDetailList = session.getAttribute("cartDetailList");
    if(objCartDetailList==null) {
        cartDetailList = new ArrayList<>();
    }else{
        cartDetailList = (List<CartDetail>) objCartDetailList;
    }
    session.setAttribute("cartDetailList", cartDetailList);
    ProductPriceModel productPriceModel = new ProductPriceModel();
    DecimalFormat decimalFormat = new DecimalFormat("#,##0");

//    String address, LocalDateTime dob, String email, String fullname, String phone, EmployeeStatus
//    status
    Employee employee = new Employee(1,"Quy Nhơn", LocalDateTime.of(2002,7,26,0,0,0), "tranquanghuyit09@gmail.com", "Trần Quang Huy", "0338116008", EmployeeStatus.WORKING);
    session.setAttribute("employee", employee);

    Customer customer = (Customer) session.getAttribute("customer");

%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giỏ hàng</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./font-awesome/css/font-awesome.min.css">
    <link rel="icon" type="image/x-icon" href="./img/favicon.png">

    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/products.js"></script>

    <link rel="stylesheet" href="./css/giohang.css">
    <script src="https://kit.fontawesome.com/54f0cb7e4a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">


    <style>
        .slider-product-one-content {
            background-color: #E5322A;
            padding: 5px 12px 12px 12px;
        }

        .product-gallery-one-content-product {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    </style>

</head>

<body>
<nav style="padding-top: 10px; height:75px">
    <div class="container">
        <ul>
            <li><a href="index.jsp"><img src="./img/THAD Mobile-logo.png" alt="" style="width: 200px;height: 40px;"></a>
            </li>
            <li id="adress-form"><a href="#">Đà Nẵng <i class="fa fa-caret-down" aria-hidden="true"></i></a> </li>
            <li><input type="text" placeholder="Bạn tìm gì...."><i class="fa fa-search" aria-hidden="true"></i></li>
            <li>
                <a href="cart.jsp">
                    <button style="position: relative; display: inline-block; padding-left:10px; padding-right: 38px;">
                        Giỏ hàng <i class="fa fa-shopping-cart"></i> &nbsp;
                        <span class="badge badge-danger" style="font-size: 15px; position: absolute; top: -8px;"><%= cartDetailList.size()%></span>
                    </button>
                </a>
            </li>
            <li><a href="">Lịch sử <br> đơn hàng</a></li>
            <li><a href=""> <span class="btn-content"><span class="btn-top"></span></span>Mua thẻ nạp ngay</a></li>
            <li><a href="">14h Công nghệ</a></li>
            <li><a href="">Hỏi đáp</a></li>

            <div class="adress-form">
                <div class="adress-form-content">
                    <h2>Chọn địa chỉ nhận hàng <span id="adress-close">X Đóng</span></h2>
                    <form action="">
                        <p>Chọn đầy đủ địa chỉ nhận hàng để biết chính xác thời gian giao</p>
                        <select name="">
                            <option value="#">-- Chọn địa điểm</option>
                            <option value="#">Đà Nẵng</option>
                            <option value="#" selected>Thành phố Hồ Chí Minh</option>
                            <option value="#">Hà Nội</option>
                        </select>
                        <select name="" class="mt-1">
                            <option value="#" disabled>-- Chọn Quận\Huyện</option>
                            <option value="#">Quận 1</option>
                            <option value="#">TP. Thủ Đức</option>
                            <option value="#">Quận 3</option>
                            <option value="#">Quận 4</option>
                            <option value="#">Quận 5</option>
                            <option value="#">Quận 6</option>
                            <option value="#">Quận 7</option>
                            <option value="#">Quận 8</option>
                            <option value="#">Quận 9</option>
                            <option value="#">Quận Bình Tân</option>
                            <option value="#">Quận Bình Thạnh</option>
                            <option value="#">Quận Gò Vấp</option>
                        </select>
                        <select name="" class="mt-1">
                            <option value="#" disabled>-- Chọn Phường\Xã</option>
                            <option value="#">Phường 1</option>
                            <option value="#">Phường 2</option>
                            <option value="#">Phường 3</option>
                            <option value="#">Phường 4</option>
                        </select>
                        <input type="text" placeholder="Số nhà, tên, đường">
                        <button>Xác nhận</button>
                    </form>
                </div>
            </div>
        </ul>
    </div>
</nav>
<section class="menu-bar" style="margin-top: -10px">
    <div class="container">
        <div class="menu-bar-container">
            <ul>
                <li><a href="index.jsp" style="padding-left: 20px; padding-right: 20px;">Trang chủ</a></li>
                <li><a href="index.jsp" style="padding-left: 20px; padding-right: 20px;"><i class="fa fa-mobile" aria-hidden="true"></i> Điện thoại </a></li>
                <li><a href="phukien.html" style="padding-left: 20px; padding-right: 20px;"><i class="fa fa-headphones" aria-hidden="true"></i> Phụ kiện <i
                        class="fa fa-caret-down" aria-hidden="true"></i></a>
                    <div class="submenu">
                        <ul>
                            <li><a href="">Pin sạc dự phòng</a></li>
                            <li><a href="">Ốp lưng điện thoại</a></li>
                            <li><a href="">Sạc, cáp</a></li>
                            <li><a href="">Tai nghe</a></li>
                            <li><a href="">Loa</a></li>
                            <li><a href="">Miếng dán điện thoại</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="DiaChi.html" style="padding-left: 20px; padding-right: 20px;"> Địa Chỉ</a></li>
                <li><a href="#" style="padding-left: 20px; padding-right: 20px;"> Giới thiệu</a>
                    <div class="submenu">
                        <ul>
                            <li><a href="GioiThieuWeb.html">Giới thiệu trang web</a></li>
                            <li><a href="GioiThieuThanhVien.html">Giới thiệu thành viên</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="dangnhap.html" style="padding-left: 20px; padding-right: 20px;"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Đăng nhập</a>
                </li>


            </ul>
        </div>
    </div>
</section>

<div class="container mt-3" style="height: 750px;">
    <section class="container order" >
        <h2 class="text-success">Mua hàng thành công</h2>
        <h3 class="text-secondary">Cảm ơn anh/chị <%= customer.getName()%> đã mua hàng!</h3>
        <div class="my-5">
            <a href="control-servlet?action=successfulPurchase">
                <button class="btn btn-primary" style="font-size: 20px;">Quay vể trang chủ</button>
            </a>
        </div>
    </section>
</div>


<!-- ---------------------footer thông tin ------------------------------- -->
<footer class="footer">
    <div class="footer-container">
        <!-- <div class="footer-container-content"> -->
        <div class="content-one">
            <ul>
                <li>
                    <h2>Sản phẩm</h2>
                </li>
                <li><a href="">Điện thoại mới</a></li>
                <li><a href="">Điện thoại cũ</a></li>
                <li><a href="">Linh kiện điện thoại mới</a></li>
                <li><a href="">Linh kiện nổi bật</a></li>
            </ul>
        </div>
        <div class="content-two">
            <ul>
                <li>
                    <h2>Thông tin</h2>
                </li>
                <li><a href="">Giới thiệu về công ty</a></li>
                <li><a href="">Chính sách bảo mật</a></li>
                <li><a href="">Chính sách bảo hành</a></li>
                <li><a href="">Khách hàng thân thiết</a></li>
                <li><a href="">Chính sách đổi trả</a></li>
                <li><a href="">Chính sách trả góp</a></li>
            </ul>
        </div>
        <div class="content-three">
            <ul>
                <li>
                    <h2>Tài khoản</h2>
                </li>
                <li><a href="">Lịch sử mua hàng</a></li>
                <li><a href="">Tài khoản của tôi</a></li>
                <li><a href="">Khuyến mãi</a></li>
                <li><a href="">Sản phẩm yêu thích</a></li>
            </ul>
        </div>
        <div class="content-four">
            <ul>
                <li>
                    <h2>Liên hệ với chúng tôi</h2>
                </li>
                <li><a href="">Địa chỉ: Nguyễn Văn Bảo, phường 4, Quận Gò Vấp, thành phố Hồ Chí Minh</a></li>
                <li><a href="">Tư vấn mua hàng: 0368636452</a></li>
                <li><a href="">Tư vấn kĩ thuật: 0327003644</a></li>
                <li><a href="">Email: 20024591.iuh@gmail.com</a></li>
                <li><a href="./html/sitemap.html"> Site Map</a></li>
            </ul>
        </div>
        <!-- </div>  -->
    </div>
</footer>

<script src="./script.js"></script>
<script src="./js/giohang.js"></script>

</body>

</html>