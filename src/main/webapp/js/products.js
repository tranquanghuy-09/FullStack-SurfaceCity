/*
=============
Load sản phẩm
=============
 */
let product1 = {
  ma: 1,
  img: "./img/product/product1/pg1.jpeg",
  ten: "iPhone 11",
  gia: "16.290.000₫",
  giagoc: "",
  tlgiam:"",
  qua: "Quà 400.000₫",
  title: "VNPAY GIẢM 500K",
  hang: "Apple",
  loai: "Điện thoại",
  kinhthuoc: 'IPS LCD, 6.1", Liquid Retina',
  pin: "3110 mAh, 18 W",
  hedieuhanh: "iOS 15",
  chip: "Apple A13 Bionic",
  ram: "4 GB",
  rom: "64 GB",
  camerasau: "2 camera 12 MP",
  cameratruoc: "12 MP",
  sim: "1 Nano SIM & 1 eSIM",
  review: 808,
  data_tieude:"Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.",
  data_noibat:"Nâng cấp mạnh mẽ về camera",
  data_chitiet:"Nói về nâng cấp thì camera chính là điểm có nhiều cải tiến nhất trên thế hệ iPhone mới. Nếu như trước đây iPhone Xr chỉ có một camera thì nay với iPhone 11 chúng ta sẽ có tới hai camera ở mặt sau. Ngoài camera chính vẫn có độ phân giải 12 MP thì chúng ta sẽ có thêm một camera góc siêu rộng và cũng với độ phân giải tương tự. Theo Apple thì việc chuyển đổi qua lại giữa hai ống kính thì sẽ không làm thay đổi màu sắc của bức ảnh.", 
  img_chitiet: "../img/product/product1/chitietpg1.jpeg",
  anh1: "../img/product/product1/product1-1.jpg",
  anh2: "../img/product/product1/product1-2.jpg",
  anh3: "../img/product/product1/product1-3.jpg",
  anh4: "../img/product/product1/product1-4.jpg",
  anh5: "../img/product/product1/product1-5.jpg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' 
};
let product2 = {
  ma: 2,
  img: "../img/product/product2/pg2.jpg",
  ten: "Samsung Galaxy S22 Ultra 5G",
  gia: "30.990.000₫",
  giagoc: "",
  tlgiam:"",
  title: "VNPAY GIẢM 500K",
  qua: "Quà 2.000.000₫",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'Dynamic AMOLED 2X, 6.8", Quad HD+ (2K+)',
  pin: "5000 mAh, 45 W",
  hedieuhanh: "Android 12",
  chip: "Snapdragon 8 Gen 1 8 nhân",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP",
  cameratruoc: "40 MP",
  sim: "2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G",
  review: 14,
  data_tieude:"Galaxy S22 Ultra 5G chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22 series mà Samsung đã cho ra mắt. Tích hợp bút S Pen hoàn hảo trong thân máy, trang bị vi xử lý mạnh mẽ cho các tác vụ sử dụng vô cùng mượt mà và nổi bật hơn với cụm camera không viền độc đáo mang đậm dấu ấn riêng.",
  data_noibat:"Sở hữu một diện mạo đầy nổi bật",
  data_chitiet:"Galaxy S22 Ultra 5G được kế thừa form thiết kế từ những dòng Note trước đây của hãng đem đến cho bạn có cảm giác vừa mới lạ vừa hoài niệm. Trọng lượng của máy khoảng 228 g cho cảm giác cầm nắm đầm tay, khi cầm máy trần thì hơi có cảm giác dễ trượt. Phần mặt lưng được làm nhám nên hạn chế tốt việc bám dấu vân tay, có thiết kế cũng khá đơn giản nhưng vẫn toát lên vẻ sang trọng và cao cấp của chiếc máy. Cụm camera sau trên Galaxy S22 Ultra 5G được thiết kế trần tạo cảm giác gọn gàng và cũng tạo nên một điểm nhấn độc đáo cho chiếc máy.", 
  img_chitiet: "../img/product/product2/chitietpg2.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product3 = {
  ma: 3,
  img: "../img/product/product3/pg3.jpg",
  ten: "Realme C35",
  ten2: "Điện thoại Realme C35 64GB",
  gia: "3.990.000₫",
  giagoc: "",
  tlgiam:"",
  hang: "Realme",
  loai: "Điện thoại",
  kinhthuoc: 'IPS LCD, 6.6", Full HD+',
  pin: "5000 mAh, 18 W",
  hedieuhanh: "Android 11",
  chip: "Unisoc T616 8 nhân",
  ram: "4 GB",
  rom: "64 GB",
  camerasau: "Chính 50 MP & Phụ 2 MP, 0.3 MP",
  cameratruoc: "8 MP",
  sim: "2 Nano SIM",
  review: 67,
  data_tieude:"Realme C35 thuộc phân khúc giá rẻ được nhà Realme cho ra mắt với thiết kế trẻ trung, dung lượng pin lớn cùng camera hỗ trợ nhiều tính năng. Đây sẽ là thiết bị liên lạc, giải trí và làm việc ổn định,… cho các nhu cầu sử dụng của bạn.",
  data_noibat:"Thiết kế thời thượng, màu sắc thời trang",
  data_chitiet:"Realme C35 sở hữu 2 màu sắc trẻ trung: Đen tuyền và xanh huyền ảo với một thiết kế vô cùng độc đáo, khung bezel bo góc làm bằng vật liệu 2D phát sáng linh động, mang đến hiệu ứng màu ấn tượng khi thay đổi góc nhìn. Cùng với đó là khung và mặt lưng làm bằng nhựa giả kính hạn chế bám mồ hôi và vân tay, tuy nhiên do thiết kế khá vuông vức nên tổng thể máy có vẻ hơi sắc cạnh, vì vậy khi cầm cảm giác có hơi cấn nhẹ, khi sử dụng bạn nên đeo ốp lưng vào để cầm được thoải mái hơn.", 
  img_chitiet: "../img/product/product3/chitietpg3.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>'
};
let product4 = {
  ma: 4,
  img: "../img/product/product4/pg4.jpg",
  ten: "OPPO Reno7 Z 5G",
  gia: "10.490.000₫",
  giagoc: "",
  tlgiam:"",
  qua: "",
  title: "VNPAY GIẢM 500K",
  hang: "OPPO",
  loai: "Điện thoại",
  kinhthuoc: 'AMOLED 6.43", Full HD+',
  pin: "4500 mAh, 33 W",
  hedieuhanh: "Android 11",
  chip: "Snapdragon 695 5G 8 nhân",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 64 MP & Phụ 2 MP, 2 MP",
  cameratruoc: "16 MP",
  sim: "2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 5G",
  review: 70,
  data_tieude:"OPPO đã trình làng mẫu Reno7 Z 5G với thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên nghiệp cùng viền sáng kép, máy có một cấu hình mạnh mẽ và đạt chứng nhận xếp hạng A về độ mượt.",
  data_noibat:"Dễ dàng nổi bật giữa đám đông",
  data_chitiet:"Điện thoại OPPO Reno7 Z 5G có khung viền vát phẳng, vuông vức trendy làm cho máy toát lên nét hiện đại và năng động. Bốn góc được bo cong mềm mại tạo cảm giác thoải mái và nhẹ nhàng (chỉ 173 g). Với thiết kế nguyên khối làm tổng thể máy trở nên cực kỳ chắc chắn, không chỉ đẹp mà còn tăng độ bền. Điểm ấn tượng nhất trên Reno7 Z là dùng thiết kế OPPO Glow độc quyền, mang đến một mặt lưng tinh tế, có thể chuyển màu sắc khi thay đổi góc nhìn. Máy có 2 phiên bản màu: Đen Vô Cực sang trọng, tinh tế và Bạc Đa Sắc nổi bật. Dù lựa chọn phiên bản màu nào thì mặt lưng máy cũng được phủ nhám giúp hạn chế tình trạng bám vân tay và mồ hôi, cho điện thoại sẽ luôn giữ được vẻ “sang chảnh” mọi lúc.", 
  img_chitiet: "../img/product/product4/chitietpg4.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product5 = {
  ma: 5,
  img: "../img/product/product5/pg5.jpeg",
  ten: "Xiaomi 11T 5G",
  gia: "10.990.000₫",
  giagoc: "",
  tlgiam:"",
  hang: "Xiaomi",
  loai: "Điện thoại",
  kinhthuoc: 'AMOLED, 6.67", Full HD+',
  pin: "5000 mAh, 67 W",
  hedieuhanh: "Android 11",
  chip: "MediaTek Dimensity 1200",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 108 MP & Phụ 8 MP, 5 MP",
  cameratruoc: "16 MP",
  sim: "2 Nano SIM, Hỗ trợ 5G",
  review: 308,
  data_tieude:"Xiaomi 11T đầy nổi bật với thiết kế vô cùng trẻ trung, màn hình AMOLED, bộ 3 camera sắc nét và viên pin lớn đây sẽ là mẫu smartphone của Xiaomi thỏa mãn mọi nhu cầu giải trí, làm việc và là niềm đam mê sáng tạo của bạn. ",
  data_noibat:"Camera 108 MP siêu sắc nét, làm chủ mọi khung hình",
  data_chitiet:"Xiaomi trang bị cho 11T 3 camera sau gồm camera chính độ phân giải 108 MP, camera góc rộng 8 MP 120 độ và camera telemacro 5 MP cùng hệ thống phần cứng tối tân được trang bị bên trong cực kỳ ấn tượng. Chỉ cần giơ máy lên chụp là bạn đã có những bức ảnh sắc nét đáng kinh ngạc, khả năng thu phóng cũng cực tốt, cho bạn chụp được rõ từng chi tiết dù đối tượng ở khá xa. Chụp phong cảnh, ảnh nhóm dễ dàng nhờ camera góc rộng 120 độ. Chụp ảnh với camera telemacro giúp bạn khám phá một thế giới thu nhỏ đầy thú vị, với tiêu điểm khoảng 3 - 7 cm dễ dàng quan sát được các vật thể nhỏ như giọt sương trên ngọn cỏ, cánh bướm,... ", 
  img_chitiet: "../img/product/product5/chitietpg5.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>'
};
let product6 = {
  ma: 6,
  img: "../img/product/product6/pg6.jpeg",
  ten: "Samsung Galaxy A52s 5G",
  gia: "8.990.000₫",
  giagoc: "",
  tlgiam:"",
  qua:"Quà 1.100.000₫",
  title:"VNPAY GIẢM 500K",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'Super AMOLED, 6.5", Full HD+',
  pin: "4500 mAh, 25 W",
  hedieuhanh: "Android 11",
  chip: "Snapdragon 778G 5G 8 nhân",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
  cameratruoc: "32 MP",
  sim: "2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 5G",
  review: 489,
  data_tieude:"Samsung đã chính thức giới thiệu chiếc điện thoại Galaxy A52s 5G đến người dùng, đây phiên bản nâng cấp của Galaxy A52 5G ra mắt cách đây không lâu, với ngoại hình không đổi nhưng được nâng cấp đáng kể về thông số cấu hình bên trong.",
  data_noibat:"Thiết kế đặc trưng Galaxy A",
  data_chitiet:"Samsung Galaxy A52s tiếp tục sử dụng ngôn ngữ thiết kế nguyên khối theo phong cách trẻ trung với các tuỳ chọn màu sắc như: Đen, trắng, tím và xanh mint. Máy sử dụng màn hình nốt ruồi Super AMOLED kích thước 6.5 inch, độ phân giải Full HD+ cùng thiết kế tràn viền giúp mở rộng tối đa không gian hiển thị. Từ đó người dùng có thể thoải mái tận hưởng những chương trình giải trí cực kỳ hấp dẫn. Máy hỗ trợ tần số quét 120 Hz cùng tấm nền chất lượng giúp mọi trải nghiệm vuốt chạm trên máy được trở nên mượt mà, giúp mọi hình ảnh, thước phim trên điện thoại đều được hiển thị tươi tắn và vô cùng sắc nét. ", 
  img_chitiet: "../img/product/product6/chitietpg6.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' 
};
let product7 = {
  ma: 7,
  img: "../img/product/product7/pg7.jpeg",
  ten: "Xiaomi Redmi Note 11 Pro",
  gia: "7.490.000₫",
  giagoc: "",
  tlgiam:"",
  title:"VNPAY GIẢM 500K",
  qua: "Quà 200.000₫",
  hang: "Xiaomi",
  loai: "Điện thoại",
  kinhthuoc: 'AMOLED, 6.67", Full HD+',
  pin: "5000 mAh, 67 W",
  hedieuhanh: "Android 11",
  chip: "MediaTek Helio G96 8 nhân",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 108 MP & Phụ 8 MP, 2 MP, 2 MP",
  cameratruoc: "16 MP",
  sim: "2 Nano SIM (SIM 2 chung khe thẻ nhớ)",
  review: 151,
  data_tieude:"Xiaomi Redmi Note 11 Pro 4G mang trong mình khá nhiều những nâng cấp cực kì sáng giá. Là chiếc điện thoại có màn hình lớn, tần số quét 120 Hz, hiệu năng ổn định cùng một viên pin siêu trâu.",
  data_noibat:"Hiệu năng ổn định cho mọi tác vụ",
  data_chitiet:"RAM 8 GB là một con số ổn trong thời điểm hiện nay, máy có thể đa nhiệm ổn, ít xảy ra hiện tượng giật lag khi mình bật nhiều ứng dụng. Máy cũng được trang bị công nghệ tản nhiệt LiquidCool đa chiều mới, giúp tản nhiệt một cách khá hiệu quả. Mình có trải nghiệm thực tế khi mình chơi 2 tựa game quen thuộc là Liên Quân và PUBG Mobile và có một số thông tin sau: Với Liên Quân, máy có phần đồ họa mượt, ổn định. Từ khâu chọn tướng cho đến lúc vào trận máy ít xảy ra hiện tượng giật lag. Lúc bắt đầu combat máy không xảy ra hiện tượng drop FPS và luôn có mức FPS ổn định là 60. Sau khi chơi tầm 15 phút máy sẽ khá nóng ở phần mặt lưng, gần cụm camera. Còn về PUBG Mobile, khi mình bật mức đồ họa HD tốc độ khung hình cao, máy cho ra một cái trải nghiệm chưa ổn. Khung hình còn khá là giật lag ở mức 30 FPS có tình trạng bị tụt xuống mức 26, 27 FPS, di chuyển nhân vật hay thao tác nhặt đồ còn khá khó, lúc giao tranh chưa chuẩn xác cho lắm. Khi mình chuyển qua mức đồ họa Cân bằng với tốc độ khung hình Cực cao máy hầu như giải quyết được các vấn đề trên. Đồ hoạ ổn định, vào đấu súng thao tác khá mượt, di chuyển hay đổi súng nhặt đồ không còn giật lag và ổn định ở mức 40 FPS.", 
  img_chitiet: "../img/product/product7/chitietpg7.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product8 = {
  ma: 8,
  img: "../img/product/product8/pg8.jpeg",
  ten: "Vivo Y15s",
  gia: "3.490.000₫",
  giagoc: "",
  tlgiam:"",
  title:"VNPAY GIẢM 100K",
  qua:"",
  hang: "Vivo",
  loai: "Điện thoại",
  kinhthuoc: 'IPS LCD, 6.51", HD+',
  pin: "5000 mAh, 10W",
  hedieuhanh: "Android 11 (Go Edition)",
  chip: "MediaTek Helio P35",
  ram: "3 GB",
  rom: "32 GB",
  camerasau: "Chính 13 MP & Phụ 2 MP",
  cameratruoc: "8 MP",
  sim: "2 Nano SIM",
  review: 74,
  data_tieude:"Vivo vừa mang một chiến binh mới đến phân khúc tầm trung giá rẻ có tên Vivo Y15s, một sản phẩm sở hữu khá nhiều ưu điểm như thiết kế đẹp, màn hình lớn, camera kép, pin cực trâu và còn rất nhiều điều thú vị khác đang chờ đón bạn.",
  data_noibat:"Sáng tạo không ngừng với bộ đôi camera AI",
  data_chitiet:"Vivo Y15s được trang bị bộ đôi camera sau, camera chính có độ phân giải 13 MP khẩu độ f/2.2 hỗ trợ chụp ảnh góc rộng, lấy nét tự động và camera phụ 2 MP khẩu độ f/2.4 hỗ trợ chụp ảnh macro, máy hỗ trợ chụp xóa phông với sự giúp sức của trí tuệ nhân tạo AI, cho bạn sáng tạo không giới hạn trong nhiếp ảnh. Bên cạnh bộ đôi camera sau chuyên nghiệp, camera trước của Vivo Y15s cũng không hề kém cạnh với độ phân giải lên tới 8 MP, hỗ trợ đầy đủ các tính năng làm đẹp bằng trí tuệ nhân tạo AI, để bạn luôn có được những tấm hình tuyệt vời trong từng chi tiết. Trong đó có thể kể tới tính năng bù sáng selfie tự động điều chỉnh để thích ứng với ánh sáng của môi trường xung quanh và công nghệ Face Beauty sẽ gợi ý những điều chỉnh trên gương mặt được thiết kế dành riêng cho bạn để bạn luôn được tỏa sáng trong mọi khung ảnh.", 
  img_chitiet: "../img/product/product8/chitietpg8.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product9 = {
  ma: 9,
  img: "../img/product/product9/pg9.jpeg",
  ten: "iPhone 13 Pro Max",
  gia: "33.990.000₫",
  giagoc: "",
  tlgiam:"",
  title: "VNPAY GIẢM 700K",
  hang: "Apple",
  qua: "Quà 1.400.000₫",
  loai: "Điện thoại",
  kinhthuoc: 'OLED, 6.7", Super Retina XDR',
  pin: "4352 mAh, 20 W",
  hedieuhanh: "iOS 15",
  chip: "Apple A15 Bionic",
  ram: "6 GB",
  rom: "128 GB",
  camerasau: "3 camera 12 MP",
  cameratruoc: "12 MP",
  sim: "1 Nano SIM & 1 eSIM, Hỗ trợ 5G",
  review: "342",
  data_tieude:"iPhone 13 Pro Max 128 GB - siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.",
  data_noibat:"Thiết kế đẳng cấp hàng đầu",
  data_chitiet:"iPhone mới kế thừa thiết kế đặc trưng từ iPhone 12 Pro Max khi sở hữu khung viền vuông vức, mặt lưng kính cùng màn hình tai thỏ tràn viền nằm ở phía trước. Với iPhone 13 Pro Max phần tai thỏ đã được thu gọn lại 20% so với thế hệ trước, không chỉ giải phóng nhiều không gian hiển thị hơn mà còn giúp mặt trước chiếc điện thoại trở nên hấp dẫn hơn mà vẫn đảm bảo được hoạt động của các cảm biến. Điểm thay đổi dễ dàng nhận biết trên iPhone 13 Pro Max chính là kích thước của cảm biến camera sau được làm to hơn và để tăng độ nhận diện cho sản phẩm mới thì Apple cũng đã bổ sung một tùy chọn màu sắc Sierra Blue (màu xanh dương nhạt hơn so với Pacific Blue của iPhone 12 Pro Max).", 
  img_chitiet: "../img/product/product9/chitietpg9.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let product10 = {
  ma: 10,
  img: "../img/product/product10/pg10.jpeg",
  ten: "Samsung Galaxy Z Fold3 5G",
  gia: "37.990.000₫",
  giagoc: "",
  tlgiam:"",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'Dynamic AMOLED 2X, Chính 7.6" & Phụ 6.2", Full HD+',
  pin: "4400 mAh, 25W",
  hedieuhanh: "Android 11",
  chip: "Snapdragon 888",
  ram: "12 GB",
  rom: "256 GB",
  camerasau: "3 camera 12 MP",
  cameratruoc: "10 MP & 4 MP",
  sim: "2 Nano SIM + 1 eSIM, Hỗ trợ 5G",
  review: "27",
  data_tieude:"Galaxy Z Fold3 5G, chiếc điện thoại được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn hình gập đầu tiên trên thế giới có camera ẩn (08/2021). Sản phẩm sẽ là một “cú hit” của Samsung góp phần mang đến những trải nghiệm mới cho người dùng.",
  data_noibat:"Thiết kế nâng tầm smartphone màn hình gập",
  data_chitiet:"Có thể thấy mẫu smartphone Galaxy Z Fold3 lần này vẫn giữ nguyên ngoại hình cùng cơ chế màn hình gập mở dạng quyển sách như của tiền nhiệm, hồ biến chiếc smartphone thành một chiếc máy tính bảng mini một cách dễ dàng và ngược lại. Khung viền sử dụng hợp kim nhôm Armor Aluminum cứng cáp, bền bỉ hơn 10% so với các vật liệu trước đây Samsung từng sản xuất. Với cấu tạo chắc chắn sẽ giúp bạn yên tâm tận hưởng các hoạt động yêu thích một cách trọn vẹn nhất. Bộ khớp nối bản lề được thiết kế mới giúp kết nối bộ khung của Galaxy Z Fold3 hoàn hảo hơn, tăng cao độ bền khi đóng mở liên tục và cố định cực kỳ chắc chắn cho bạn trải nghiệm sử dụng thoải mái nhất.", 
  img_chitiet: "../img/product/product10/chitietpg10.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' +
    '</div>'
};
let product11 = {
  ma: 11,
  img: "../img/product/product11/pg11.jpeg",
  ten: "Samsung Galaxy S22+ 5G",
  gia: "25.990.000₫",
  giagoc: "",
  tlgiam:"",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'Dynamic AMOLED 2X, 6.6", Full HD+',
  pin: "4500 mAh, 45 W",
  hedieuhanh: "Android 12",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP",
  cameratruoc: "40 MP",
  sim: "2 Nano SIM hoặc 1 Nano SIM + 1 eSIMHỗ trợ 5G",
  review: "5",
  data_tieude:"Samsung Galaxy S22+ 5G 128 GB được Samsung cho ra mắt với với ngoại hình không đổi nhưng được nâng cấp đáng kể về thông số cấu hình bên trong và thời gian sử dụng tốt, chắc hẳn sẽ mang lại những trải nghiệm thú vị dành cho bạn.",
  data_noibat:"Thiết kế bền bỉ với khung viền từ hợp kim Armor Aluminum cứng cáp, trang bị kính cường lực Gorilla Glass Victus+.",
  data_chitiet:"Galaxy S22+ 5G thiết kế bền bỉ với khung viền từ hợp kim Armor Aluminum cứng cáp, trang bị kính cường lực Gorilla Glass Victus+. Không chỉ có độ hoàn thiện cao, mẫu điện thoại mới của Samsung còn đạt chỉ số kháng nước và bụi IP68, giúp máy tránh khỏi những hư hỏng khi tiếp xúc với nước trong quá trình sử dụng. Phần cạnh viền vẫn được bo cong dù không quá nhiều, nhưng vẫn cho trải nghiệm cầm khá tốt, trọng lượng nhẹ chỉ 195 g giúp bạn thoải mái mang đi bất cứ đâu.", 
  img_chitiet: "../img/product/product11/chitietpg11.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>'
};
let product12 = {
  ma: 12,
  img: "../img/product/product12/pg12.jpeg",
  ten: "iPhone 13",
  gia: "24.190.000₫",
  giagoc: "",
  tlgiam:"",
  hang: "Apple",
  loai: "Điện thoại",
  kinhthuoc: 'OLED, 6.1", Super Retina XDR',
  pin: "3240 mAh, 20 W",
  hedieuhanh: "iOS 15",
  chip: "Apple A15 Bionic",
  ram: "4 GB",
  rom: "128 GB",
  camerasau: "2 camera 12 MP",
  cameratruoc: "12 MP",
  sim: "1 Nano SIM & 1 eSIM, Hỗ trợ 5G",
  review: "245",
  data_tieude:"Trong khi sức hút đến từ bộ 4 phiên bản iPhone 12 vẫn chưa nguội đi, thì Apple đã mang đến cho người dùng một siêu phẩm mới iPhone 13 - điện thoại có nhiều cải tiến thú vị sẽ mang lại những trải nghiệm hấp dẫn nhất cho người dùng.",
  data_noibat:"Hiệu năng vượt trội nhờ chip Apple A15 Bionic",
  data_chitiet:"Con chip Apple A15 Bionic siêu mạnh được sản xuất trên quy trình 5 nm giúp iPhone 13 đạt hiệu năng ấn tượng, với CPU nhanh hơn 50%, GPU nhanh hơn 30% so với các đối thủ trong cùng phân khúc. Nhờ hiệu năng được cải tiến, người dùng có được những trải nghiệm tốt hơn trên điện thoại khi dùng các ứng dụng chỉnh sửa ảnh hay chiến các tựa game đồ họa cao mượt mà. ", 
  img_chitiet: "../img/product/product12/chitietpg12.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>'
};

//Sản phẩm giảm giá
let product13 = {  
  ma: 13,
  img: "../img/product/product13/pg13.jpeg",
  ten: "Samsung Galaxy Z Flip3 5G",
  gia: "22.990.000₫",
  giagoc: "26.990.000₫",
  tlgiam: " -14%",
  qua: "Quà 500.000₫",
  title: "GIẢM GIÁ SỐC",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'Dynamic AMOLED 2X, Chính 6.7" & Phụ 1.9", Full HD+',
  pin: "3300 mAh, 15 W",
  hedieuhanh: "Android 11",
  chip: "Snapdragon 888",
  ram: "8 GB",
  rom: "256 GB",
  camerasau: "2 camera 12 MP",
  cameratruoc: "10 MP",
  sim: "1 Nano SIM & 1 eSIM, Hỗ trợ 5G",
  review: "28",
  data_tieude:"Nối tiếp thành công của Galaxy Z Flip 5G, trong sự kiện Galaxy Unpacked vừa qua Samsung tiếp tục giới thiệu đến thế giới về Galaxy Z Flip3 5G 256GB. Sản phẩm có nhiều cải tiến từ độ bền cho đến hiệu năng và thậm chí nó còn vượt xa hơn mong đợi của mọi người.",
  data_noibat:"Thiết kế nhỏ gọn đầy lôi cuốn",
  data_chitiet:"Samsung Galaxy Z Flip3 5G dễ dàng lấy lòng phái nữ khi thiết kế của nó được lấy cảm hứng từ hộp đựng phấn trang điểm. Kết hợp với 7 màu sắc khác nhau, giúp bạn thoải mái thể hiện cá tính, từ mạnh mẽ sang trọng đến hiện đại trẻ trung. Thân máy siêu mỏng với 6.9 mm, nhẹ 183 g tạo nên một kiểu dáng đầy sexy. Kết hợp với các góc cạnh được bo cong hoàn hảo mang đến cảm giác cầm nắm thoải mái, thư thái suốt cả ngày. Không những đẹp mắt, máy còn mang đến sự tiện lợi khi được thiết kế màn hình gập độc đáo. Khi gập lại người dùng có thể bỏ vào túi quần hay túi áo một cách một cách dễ dàng mà không gây khó chịu.", 
  img_chitiet: "../img/product/product13/chitietpg13.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};

let product14 = {  
  ma: 14,
  img: "../img/product/product14/pg14.jpeg",
  ten: "iPhone 12",
  gia: "21.790.000₫",
  giagoc: "23.890.000₫",
  tlgiam: " -8%",
  qua: "Quà 500.000₫",
  title: "VNPAY GIẢM 500K",
  hang: "iPhone",
  loai: "Điện thoại",
  kinhthuoc: 'OLED, 6.1", Super Retina XDR',
  pin: "2815 mAh, 20 W",
  hedieuhanh: "iOS 15",
  chip: "Apple A14 Bionic",
  ram: "4 GB",
  rom: "256 GB",
  camerasau: "2 camera 12 MP",
  cameratruoc: "12 MP",
  sim: "1 Nano SIM & 1 eSIM, Hỗ trợ 5G",
  review: "10",
  data_tieude:"iPhone 12 256 GB được Apple cho ra mắt đã đem đến làn sóng mạnh mẽ đối với những ai yêu công nghệ nói chung và “fan hâm mộ” trung thành của iPhone nói riêng, với con chip mạnh, dung lượng lưu trữ lớn cùng thiết kế toàn diện và khả năng hiển thị hình ảnh xuất sắc.",
  data_noibat:"Thiết kế hoàn thiện đến từng chi tiết",
  data_chitiet:"Màn hình Super Retina XDR 6.1 inch sắc nét, màu sắc sống động, đem đến những hình ảnh chi tiết, sắc nét và chân thật. Hoàn thiện bằng khung nhôm tái chế, thân thiện với môi trường, các góc cạnh vuông vức, ít bo tròn, iPhone 12 có kích thước nhỏ hơn so với iPhone 11 nhưng tạo cảm giác cứng cáp và mạnh mẽ hơn. iPhone 12 sử dụng công nghệ kính cường lực mới, lần đầu được giới thiệu bởi Apple với tên gọi Ceramic Shield. Nhờ việc đưa các tinh thể sứ nano vào cấu trúc bên trong, qua đó giảm thiểu tác động của việc rơi vỡ gấp 4 lần, nâng cao độ bền của thiết bị. Bên cạnh đó, Apple còn áp dụng quy trình trao đổi ion kép vào mặt sau của điện thoại giúp tăng cường khả năng chống xước.", 
  img_chitiet: "../img/product/product14/chitietpg14.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product15 = {  
  ma: 15,
  img: "../img/product/product15/pg15.jpeg",
  ten: "Samsung Galaxy S21+ 5G",
  gia: "20.990.000₫",
  giagoc: "25.990.000₫",
  tlgiam: " -19%",
  qua: "Quà 500.000₫",
  title: "GIẢM GIÁ SỐC",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'Dynamic AMOLED 2X, 6.7", Full HD+',
  pin: "4800 mAh, 25 W",
  hedieuhanh: "iOS 15",
  chip: "Exynos 2100",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 12 MP & Phụ 64 MP, 12 MP",
  cameratruoc: "10 MP",
  sim: "2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G",
  review: "145",
  data_tieude:"Ẩn đằng sau thiết kế tuyệt tác của siêu phẩm Galaxy S21+ 5G là cả một kỳ quan công nghệ, mà ở đó bạn có thể trải nghiệm hiệu năng mạnh mẽ nhất, những công nghệ tiên phong, dẫn đầu trào lưu với cụm camera đỉnh cao đến từ Samsung.",
  data_noibat:"Đắm chìm mọi giác quan trong màn hình tràn cạnh",
  data_chitiet:"Màn hình Galaxy S21+ 5G sử dụng thiết kế Infinity-O với camera đục lỗ rất nhỏ nằm sát góc trên, để lại một không gian hiển thị rộng đến 6.7 inch tràn cạnh hoàn hảo với 4 cạnh viền gần như gần bằng nhau. Được phủ lên lớp kính cường lực Corning Gorilla Glass Victus với khả năng chống xước vượt trội, giúp cho Galaxy S21+ tránh được các hư hại mặt kính màn hình trong quá trình sử dụng. Galaxy S21+ trang bị màn hình Dynamic AMOLED 2X cao cấp, độ phân giải Full HD+ hứa hẹn chất lượng hiển vô cùng xuất sắc, tạo nên những khung hình hoàn hảo với màu sắc sống động, màu đen sâu, chi tiết ấn tượng để bạn thật sự đắm chìm vào nội dung giải trí đỉnh cao. ", 
  img_chitiet: "../img/product/product15/chitietpg15.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product16 = {  
  ma: 16,
  img: "../img/product/product16/pg16.jpeg",
  ten: "OPPO Reno7 Pro 5G",
  gia: "16.990.000₫",
  giagoc: "18.990.000₫",
  tlgiam: " -10%",
  qua: "Quà 1.500.000₫",
  title: "HOTSALE",
  hang: "OPPO",
  loai: "Điện thoại",
  kinhthuoc: 'AMOLED, 6.55", Full HD+',
  pin: "4500 mAh, 65 W",
  hedieuhanh: "Android 11",
  chip: "Snapdragon 870 5G",
  ram: "12 GB",
  rom: "256 GB",
  camerasau: "Chính 50 MP & Phụ 16 MP, 13 MP, 2 MP",
  cameratruoc: "32 MP",
  sim: "2 Nano SIM, Hỗ trợ 5G",
  review: "47",
  data_tieude:"OPPO Reno6 Pro 5G - một sản phẩm thuộc dòng Reno6 của OPPO, thỏa mãn những gì người tiêu dùng đã trông đợi với cấu hình khủng cùng hệ thống camera cực ấn tượng và ngoại hình bắt mắt, thật hào hứng mong chờ để được trải nghiệm.",
  data_noibat:"Hiệu năng cực mạnh mẽ với Snapdragon 870",
  data_chitiet:"Reno6 Pro 5G trang bị bộ vi xử lý mạnh mẽ Snapdragon 870 đến từ Qualcomm, đạt tốc độ xử lý cao trên xung nhịp lên đến 3.2 GHz, hiệu suất CPU tăng lên 12% và GPU 10% so với thế hệ chipset tiền nhiệm, mang đến trải nghiệm ấn tượng trên từng tác vụ giải trí lẫn công việc. Đồng thời, Snapdragon 870 cũng tỏa nhiệt ít hơn so với Snapdragon 888 nên bạn sẽ cảm thấy điện thoại trong tình trạng mát mẻ hơn khi dùng lâu. Đi theo chipset mạnh mẽ là bộ nhớ RAM 12 GB gia tăng độ mượt và sự ổn định khi sử dụng giữa các tác vụ được mở, cùng dung lượng 256 GB bộ nhớ trong thoải mái lưu trữ các tựa game yêu thích và tạo kho ảnh chụp, video của riêng bạn. Với cấu hình này, thật đơn giản để chiến các tựa game mobile đình đám như Liên Quân Mobile, PUBG Mobile,... hay thử trải nghiệm các ứng dụng chỉnh sửa ảnh chuyên nghiệp trên smartphone của bạn.", 
  img_chitiet: "../img/product/product16/chitietpg16.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product17 = {  
  ma: 17,
  img: "../img/product/product17/pg17.jpeg",
  ten: "Nokia G21",
  gia: "3.990.000₫",
  giagoc: "4.290.000₫",
  tlgiam: " -6%",
  qua: "",
  title: "TRẢ GÓP 0%",
  hang: "Nokia",
  loai: "Điện thoại",
  kinhthuoc: 'TFT LCD, 6.5", HD+',
  pin: "5050 mAh, 18 W",
  hedieuhanh: "Android 11",
  chip: "Unisoc T606 8 nhân",
  ram: "4 GB",
  rom: "128 GB",
  camerasau: "Chính 50 MP & Phụ 2 MP, 2 MP",
  cameratruoc: "8 MP",
  sim: "2 Nano SIM, Hỗ trợ 4G",
  review: "8",
  data_tieude:"Nokia G21 là thế hệ tiếp theo thuộc G series do Nokia sản xuất với những cải tiến nổi bật với màn hình kích thước lớn, hiệu năng ổn định mang đến trải nghiệm mượt mà trên các tác vụ hằng ngày cùng thời gian sử dụng lâu dài nhờ viên pin khủng được tích hợp trên điện thoại.",
  data_noibat:"Thiết kế trẻ trung",
  data_chitiet:"Mặt lưng được cấu tạo từ vật liệu Polycarbonate cùng kiểu thiết kế vân ngang giúp thiết bị tăng độ bền bỉ, hạn chế trầy xước và bám dấu vân tay trong lúc sử dụng. Sử dụng lối thiết kế nguyên khối cùng trọng lượng 190 g mang đến cảm giác đầm tay, chắc chắn khi mình cầm nắm và sử dụng trên chiếc máy này. Máy trang bị cụm máy ảnh với camera chính 50 MP cùng 2 cảm biến phụ cùng 2 MP giúp bạn thu lại những bức ảnh chất lượng với độ sắc nét cao. Ở phần giọt nước trên màn hình, máy sở hữu camera selfie 8 MP cùng nhiều tính năng làm đẹp giúp bạn tự tin hơn trên từng bức ảnh tự chụp.", 
  img_chitiet: "../img/product/product17/chitietpg17.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product18 = {  
  ma: 18,
  img: "../img/product/product18/pg18.jpeg",
  ten: "iPhone 13 mini",
  gia: "18.490.000₫",
  giagoc: "21.990.000₫",
  tlgiam: " -15%",
  qua: "Online giá rẻ",
  title: "VNPAY GIẢM 500K",
  hang: "iPhone",
  loai: "Điện thoại",
  kinhthuoc: 'OLED, 5.4", Super Retina XDR',
  pin: "2438 mAh, 20 W",
  hedieuhanh: "iOS 15",
  chip: "Apple A15 Bionic",
  ram: "4 GB",
  rom: "128 GB",
  camerasau: "2 camera 12 MP",
  cameratruoc: "12 MP",
  sim: "1 Nano SIM & 1 eSIM, Hỗ trợ 5G",
  review: "30",
  data_tieude:"iPhone 13 mini được Apple ra mắt với hàng loạt nâng cấp về cấu hình và các tính năng hữu ích, lại có thiết kế vừa vặn. Chiếc điện thoại này hứa hẹn là một thiết bị hoàn hảo hướng tới những khách hàng thích sự nhỏ gọn nhưng vẫn giữ được sự mạnh mẽ bên trong. ",
  data_noibat:"Thiết kế cao cấp, mang tầm thương hiệu",
  data_chitiet:"Sản phẩm có kiểu dáng bắt mắt với khung viền nhôm và mặt lưng được hoàn thiện từ kính cường lực bóng bẩy chống xước tốt, kết hợp cùng viền màn hình mỏng tạo nên vẻ đẹp hiện đại cho iPhone 13 mini. Apple vẫn tiếp tục ưu thế về kích thước nhỏ nhắn giống với iPhone 12 mini để bạn dễ dàng mang đi bất cứ đâu. Ngoài ra, Apple cho đi kèm nhiều màu sắc để người dùng có nhiều sự lựa chọn, phù hợp với sở thích cho riêng mình. Thiết bị sẽ có một màn hình kiểu dáng tai thỏ quen thuộc, với phần khuyết được làm tối giản hơn, giúp mặt trước của máy trở nên tinh tế và tạo cảm giác rộng hơn dù màn hình iPhone 13 mini chỉ lớn 5.4 inch. Có một sự thay đổi nhỏ ở phần camera sau là các mắt được đặt chéo thay vì đặt dọc như ở iPhone 12 mini, tạo nên điểm nhấn độc đáo khi mới nhìn vào cũng như tạo sự khác biệt cho máy khi so sánh với tiền nhiệm.", 
  img_chitiet: "../img/product/product18/chitietpg18.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product19 = {  
  ma: 19,
  img: "../img/product/product19/pg19.jpeg",
  ten: "Samsung Galaxy Note 20",
  gia: "15.990.000₫",
  giagoc: "23.990.000₫",
  tlgiam: " -33%",
  qua: "Quà 700.000₫",
  title: "SALE LỚN",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'Super AMOLED Plus, 6.7", Full HD+',
  pin: "4300 mAh, 25 W",
  hedieuhanh: "Android 10",
  chip: "Exynos 990",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 12 MP & Phụ 64 MP, 12 MP",
  cameratruoc: "12 MP",
  sim: "2 Nano SIM hoặc 1 Nano SIM + 1 eSIM",
  review: "247",
  data_tieude:"Tháng 8/2020, Galaxy Note 20 chính thức được lên kệ, với thiết kế camera trước nốt ruồi quen thuộc, cụm camera hình chữ nhật mới lạ cùng với vi xử lý Exynos 990 cao cấp của chính Samsung chắc hẳn sẽ mang lại một trải nghiệm thú vị cùng hiệu năng mạnh mẽ.",
  data_noibat:"Công nghệ màn hình Super AMOLED Plus, độ phân giải Full HD+",
  data_chitiet:"Màn hình Samsung Galaxy Note 20 sử dụng tấm nền Super AMOLED Plus 60Hz cho màu sắc chân thực, gần với thực tế mang đến những khung hình sống động và cực kì chi tiết, độ sáng màn hình cao hơn nên khi sử dụng dưới điều kiện nắng gắt cũng không ảnh hưởng nhiều đến chất lượng hiển thị. Máy được tranh bị kính cảm ứng cường lực Gorilla Glass 5 cùng chuẩn chống nước và chống bụi là IP68, giúp cho người dùng có thể yên tâm khi dùng điện thoại ngoài đường hay vô tình tiếp xúc với nước.", 
  img_chitiet: "../img/product/product19/chitietpg19.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let product20 = {  
  ma: 20,
  img: "../img/product/product20/pg20.jpeg",
  ten: "Realme C35",
  gia: "4.690.000₫",
  giagoc: "4.990.000₫",
  tlgiam: " -6%",
  qua: "",
  title: "SALE LỚN",
  hang: "Realme",
  loai: "Điện thoại",
  kinhthuoc: 'IPS LCD, 6.6", Full HD+',
  pin: "5000 mAh, 18 W",
  hedieuhanh: "Android 11",
  chip: "Unisoc T616 8 nhân",
  ram: "4 GB",
  rom: "128 GB",
  camerasau: "Chính 50 MP & Phụ 2 MP, 0.3 MP",
  cameratruoc: "8 MP",
  sim: "2 Nano SIM",
  review: "15",
  data_tieude:"Realme C35 là một trong những sản phẩm thuộc phân khúc giá rẻ mới nhất của nhà Realme (4/2022), ra mắt với thiết kế vuông vức, viên pin cho bạn thoải mái sử dụng cả ngày cùng camera có độ phân giải lớn, đây sẽ là một chiếc smartphone có thể đáp ứng được các nhu cầu cơ bản của mọi đối tượng người dùng.",
  data_noibat:"Giải trí đã mắt trên màn hình 6.6 inch sắc nét",
  data_chitiet:"Tuy thuộc phân khúc giá rẻ nhưng Realme thật sự ưu ái cho chiếc điện thoại này khi trang bị màn hình 6.6 inch trên tấm nền IPS LCD độ phân giải Full HD+, mang đến trải nghiệm xem hình ảnh sắc nét, màu sắc sống động và độ chi tiết cao. Tấm nền IPS LCD trên Realme C35 kết hợp cùng độ sáng lên đến 600 nits giúp chất lượng màu sắc hiển thị trở nên tươi tắn hơn, thể hiện những khung hình chân thực và tự nhiên ở môi trường nhiều ánh sáng. Người dùng có thể xem TikTok, YouTube và nội dung giải trí nhiều màu sắc như các MV Kpop thì chắc chắn sẽ cực ưng. ", 
  img_chitiet: "../img/product/product20/chitietpg20.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
};
let product21 = {  
  ma: 21,
  img: "../img/product/product21/pg21.jpeg",
  ten: "OPPO A16",
  gia: "3.790.000₫",
  giagoc: "3.990.000₫",
  tlgiam: " -5%",
  qua: "",
  title: "VNPAY GIẢM 100K",
  hang: "Oppo",
  loai: "Điện thoại",
  kinhthuoc: 'IPS LCD, 6.52", HD+',
  pin: "5000 mAh, 10 W",
  hedieuhanh: "Android 11",
  chip: "MediaTek Helio G35",
  ram: "3 GB",
  rom: "32 GB",
  camerasau: "Chính 13 MP & Phụ 2 MP, 2 MP",
  cameratruoc: "8 MP",
  sim: "2 Nano SIM",
  review: "60",
  data_tieude:"OPPO A16 - sản phẩm giá rẻ đến từ nhà OPPO, đây là một chiếc điện thoại cân bằng ở mọi khía cạnh trong tầm giá, máy có thiết kế đẹp mắt, sử dụng CPU gaming đến từ MediaTek cùng viên pin siêu trâu.",
  data_noibat:"Thiết kế đẹp, chất lượng hoàn thiện tốt",
  data_chitiet:"Ngay từ lần tiếp xúc đầu tiên thì mình thấy khá ấn tượng với vẻ ngoài của thiết bị này, mỏng 8.4 mm cùng khối lượng 190 g tuy không thuộc tiêu chuẩn điện thoại mỏng, nhẹ nhưng khi cầm vào cũng cho tay một cảm giác khá gọn gàng. OPPO A16 có thiết kế nguyên khối, mặt lưng và khung viền được chế tác từ nhựa có độ hoàn thiện tốt, không có chi tiết thừa. Mọi đường nét đều được uốn cong nhẹ nhàng, tương tự nhiều sản phẩm ở phân khúc giá cao hơn. Mặt lưng có hiệu ứng chuyển màu khi thay đổi góc nhìn, bề mặt phủ lớp nhám mờ, với thiết kế này sẽ giúp hạn chế bám dấu vân tay, tuy nhiên trường hợp này vẫn xuất hiện khi bạn sử dụng thiết bị trong một khoảng thời gian dài và bạn có thể dễ dàng làm sạch máy để mang lại vẻ đẹp ban đầu.", 
  img_chitiet: "../img/product/product21/chitietpg21.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product22 = {  
  ma: 22,
  img: "../img/product/product22/pg22.jpeg",
  ten: "Samsung Galaxy A03",
  gia: "3.490.000₫",
  giagoc: "3.290.000₫",
  tlgiam: " -5%",
  qua: "Quà 450.000₫",
  title: "SALE LỚN",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'PLS LCD, 6.5", HD+',
  pin: "5000 mAh, 7.75 W",
  hedieuhanh: "Android 11",
  chip: "Unisoc T606 8 nhân",
  ram: "4 GB",
  rom: "64 GB",
  camerasau: "Chính 48 MP & Phụ 2 MP",
  cameratruoc: "5 MP",
  sim: "2 Nano SIM",
  review: "60",
  data_tieude:"Samsung Galaxy A03 4GB có thiết kế vân đan chéo trẻ trung, sở hữu camera độ phân giải đến 48 MP, pin thoải mái sử dụng trong một ngày và đây cũng là sản phẩm dòng A đầu tiên ra mắt năm 2022 của Samsung tại thị trường Việt Nam.",
  data_noibat:"Thỏa sức sáng tạo với camera xịn sò",
  data_chitiet:"Cụm camera được đặt trong mô-đun gọn gàng, gồm camera chính 48 MP và camera xóa phông 2 MP hỗ trợ các tính năng AI giúp bạn dễ dàng chụp những khoảnh khắc. Galaxy A03 là smartphone giá rẻ đầu tiên của Samsung sở hữu camera chính 48 MP. Ảnh chụp trong điều kiện đủ sáng cho chi tiết tốt, màu sắc thu lại tươi hơn so với thực tế. Chế độ chụp đêm giúp chụp trong môi trường thiếu sáng vẫn tái hiện được một số chi tiết. Camera selfie 5 MP có các tính năng làm đẹp cho bức hình selfie chuẩn nét, rạng rỡ.", 
  img_chitiet: "../img/product/product22/chitietpg22.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product23 = {  
  ma: 23,
  img: "../img/product/product23/pg23.jpeg",
  ten: "Realme 8 ",
  gia: "7.290.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "Quà 750.000₫",
  title: "VNPAY GIẢM 100K",
  hang: "Samsung",
  loai: "Điện thoại",
  kinhthuoc: 'Super AMOLED, 6.4", Full HD+',
  pin: "5000 mAh, 30 W",
  hedieuhanh: "Android 11",
  chip: "MediaTek Helio G95",
  ram: "8 GB",
  rom: "128 GB",
  camerasau: "Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP",
  cameratruoc: "16 MP",
  sim: "2 Nano SIM",
  review: "160",
  data_tieude:"Điện thoại Realme 8 được ra mắt nằm trong phân khúc tầm trung, có thiết kế đẹp mắt đặc trưng của Realme, smartphone trang bị hiệu năng bên trong đầy mạnh mẽ và có dung lượng pin tương đối lớn.",
  data_noibat:"Lan tỏa năng lượng tích cực",
  data_chitiet:"Realme 8 gây ấn tượng với trọng lượng chỉ 177 g, Realme đã kỳ công trong thiết kế để cho ra sản phẩm smartphone gọn nhẹ nhất, các cạnh viền bo cong tinh tế tạo cảm giác thoải mái và siêu dễ chịu trong tay bạn. Chiếc điện thoại có 2 phiên bản màu được sáng chế để tạo ra hiệu ứng chói sáng và trong suốt như một tấm gương phản chiếu cho người dùng lựa chọn theo sở thích là: Màu ánh bạc dưới mặt kính lấp lánh sang trọng và màu đen đầy thanh lịch. ", 
  img_chitiet: "../img/product/product23/chitietpg23.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
let product24 = {  
  ma: 24,
  img: "../img/product/product24/pg24.jpeg",
  ten: "iPhone XR 128GB",
  gia: "13.490.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "",
  title: "VNPAY GIẢM 500K",
  hang: "Apple",
  loai: "Điện thoại",
  kinhthuoc: 'IPS LCD, 6.1", Liquid Retina',
  pin: "2942 mAh, 15 W",
  hedieuhanh: "iOS 15",
  chip: "Apple A12 Bionic",
  ram: "3 GB",
  rom: "128 GB",
  camerasau: "12 MP",
  cameratruoc: "7 MP",
  sim: "1 Nano SIM & 1 eSIM",
  review: "49",
  data_tieude:"Được xem là phiên bản iPhone giá rẻ đầy hoàn hảo, iPhone Xr 128GB khiến người dùng có nhiều sự lựa chọn hơn về màu sắc đa dạng nhưng vẫn sở hữu cấu hình mạnh mẽ và thiết kế sang trọng.",
  data_noibat:"Màn hình tràn viền công nghệ LCD - True Tone",
  data_chitiet:"Thay vì sở hữu màn hình OLED truyền thống, chiếc smartphone này sở hữu màn hình LCD. Bù lại với công nghệ True Tone cùng màn hình tràn viền rộng tới 6.1 inch, mọi trải nghiệm trên máy vẫn đem lại sự thích thú và hoàn hảo, như dòng cao cấp khác của Apple. Ngoài ra, Apple cũng giới thiệu rằng, iPhone Xr được trang bị một loại công nghệ mới có tên Liquid Retina. Máy có độ phân giải 1792 x 828 Pixels cùng 1.4 triệu điểm ảnh.", 
  img_chitiet: "../img/product/product24/chitietpg24.jpeg",
  danhgia: '<div>' + 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>' +
    '</div>',
  danhgia2: 
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star-o" aria-hidden="true"></i>'
};
//---------------Accessory---------------
let accessory1 = {
  ma: 1,
  img: "../img/accessory/accessory1/acs1.jpeg",
  ten: "Tai nghe Bluetooth AirPods 3 Apple MME73 Trắng",
  gia: "4.990.000₫",
  giagoc: "5.490.000₫",
  tlgiam: " -18%",
  qua: "",
  khuyenmai: "Giảm ngay <b>100.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 500K",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Kiểu dáng hiện đại, gọn đẹp, đeo thoải mái đến bất kỳ nơi nào. </li>' +
    '<li>Âm thanh vòm sống động cùng <b>Spatial audio</b> và <b>chip H1</b> mạnh mẽ.</li>' +
    '<li>Kết nối không dây <b>Bluetooth 5.0</b> mượt mà xa đến <b>10 m.</b> </li>' +
    '<li>Điều chỉnh âm thanh phù hợp ống tai của bạn nhờ hỗ trợ <b>Adaptive EQ</b>.</li>' +
    '<li>Tai nghe cho thời gian nghe nhạc <b>6 giờ</b>, hộp sạc <b>24 giờ</b>.</li>' +
    '<li>Hỗ trợ sạc nhanh, cho thời gian sử dụng <b>1 giờ</b> chỉ với <b>5 phút sạc</b>.</li>' +
    '<li>Trang bị chuẩn chống nước <b>IPX4</b>, bảo vệ tai nghe an toàn dưới mưa nhỏ và mồ hôi.</li>',
  review: 53,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory2 = {
  ma: 2,
  img: "../img/accessory/accessory2/acs2.jpeg",
  ten: "Tai nghe Bluetooth AirPods 2 Apple MV7N2",
  gia: "2.990.000₫",
  giagoc: "4.390.000₫",
  tlgiam: " -31%",
  qua: "",
  khuyenmai: "Giảm ngay <b>100.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 250K",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Thiết kế đơn giản, thời trang và nhỏ gọn.</li>' +
    '<li>Trang bị <b>chip H1</b> hoàn toàn mới, cho tốc độ kết nối, chuyển đổi giữa các thiết bị nhanh chóng.</li>' +
    '<li>Kích hoạt nhanh trợ lý ảo Siri bằng cách nói "Hey, Siri".</li>' +
    '<li>Có thể sử dụng nghe nhạc lên đến <b>5 giờ (âm lượng 50%)</b> cho mỗi một lần sạc đầy.</li>' +
    '<li>Tích hợp công nghệ sạc nhanh hiện đại. Sạc nhanh <b>15 phút</b> có thể nghe nhạc <b>3 giờ (âm lượng 50%)</b>.</li>' +
    '<li>Sử dụng song song với hộp sạc có thể dùng được lên đến <b>24 giờ</b>.</li>' +
    '<li>Tính năng nhận cuộc gọi, kích hoạt Siri, nghe hoặc tạm dừng đoạn nhạc đang phát.</li>',
  review: 148,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory3 = {
  ma: 3,
  img: "../img/accessory/accessory3/acs3.jpeg",
  ten: "Tai nghe Bluetooth True Wireless Galaxy Buds Pro",
  gia: "3.990.000₫",
  giagoc: "4.990.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>100.000₫</b>",
  tinhtrang: "NEW",
  title: "SALE LỚN",
  hang: "Samsung",
  uudaithem: "- Tặng suất mua xe đạp Giảm đến 30% (không kèm khuyến mãi khác).",
  dacdiemnoibat: 
    '<li>Nâng tầm trải nghiệm âm và chất lượng cuộc gọi với <b>chống ồn chủ động (ANC)</b>.</li>' +
    '<li>Kết nối không dây <b>Bluetooth 5.0</b> dễ dàng với các thiết bị ngoài, đường truyền ổn định.</li>' +
    '<li>Chuẩn âm thanh studio với <b>loa 2 chiều AKG</b> mạnh mẽ.</li>' +
    '<li>Tận hưởng <b>âm thanh vòm</b> lôi cuốn, chuẩn điện ảnh từ <b>360 Audio</b>.</li>' +
    '<li>Loa <b></b>2 chiều (loa trầm 11mm, loa bổng 6.5mm).</li>' +
    '<li>Khả năng kháng nước hiệu quả cùng xếp hạng kháng nước <b>IPX7</b>.</li>' +
    '<li>Thời gian sử dụng <b>5 giờ</b> và <b>13 giờ</b> cùng hộp sạc (bật chống ồn), sử dụng <b>8 giờ</b> và <b>20 giờ</b> cùng hộp sạc (tắt chống ồn).</li>',
  review: 14,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory4 = {
  ma: 4,
  img: "../img/accessory/accessory4/acs4.jpeg",
  ten: "Adapter sạc 2 cổng Type C PD QC3.0 18W",
  gia: "210.000₫",
  giagoc: "350.000₫",
  tlgiam: " -40%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "SALE LỚN",
  hang: "X-mobile",
  uudaithem: "- FREEship đơn hàng từ 300.000đ",
  dacdiemnoibat: 
    '<li>Thiết kế đơn giản, không chiếm nhiều diện tích.</li>' +
    '<li>Sử dụng công nghệ sạc nhanh <b>QC 3.0</b>, PD tân tiến nhất hiện nay với công suất lên đến 18 W.</li>' +
    '<li>Nguồn ra USB QC: 5V - 3A | 9V - 2A | 12V - 1.5A.</li>' +
    '<li>Nguồn ra Type-C PD: 5V - 3A | 9V - 2A | 12V - 1.5A.</li>' +
    '<li>Có thể sạc cùng lúc cho 2 thiết bị.</li>',
  review: 9,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory5 = {
  ma: 5,
  img: "../img/accessory/accessory5/acs5.jpeg",
  ten: "Ốp lưng MagSafe iPhone 13 Pro Nhựa Apple MM2Y3",
  gia: "795.000₫",
  giagoc: "1.590.000₫",
  qua: "",
  tlgiam: " -50%",
  khuyenmai: "Giảm ngay <b>90.000₫</b>",
  tinhtrang: "NEW",
  title: "SALE LỚN",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Tôn lên vẻ đẹp thời thượng của <b>iPhone 13 Pro (2021)</b> với ốp lưng trong suốt.</li>' +
    '<li>Giảm sốc tốt cho máy nhờ chế tác vừa vặn, ôm khít. </li>' +
    '<li>Tương thích sạc không dây <b>MagSafe</b> cho thao tác sạc nhanh, không cần tháo ốp.</li>' +
    '<li>Chất liệu nhựa tốt bền chắc, dễ lắp ốp vào máy và tháo ra. </li>' +
    '<li>Hàng chính hãng của Apple 100%.</li>',
  review: "200",
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
    '<i class="fa fa-star" aria-hidden="true"></i>'
};
let accessory6 = {
  ma: 6,
  img: "../img/accessory/accessory6/acs6.jpeg",
  ten: "Cáp Type C - Lightning 1m Apple MM0A3 Trắng",
  gia: "501.000₫",
  giagoc: "590.000₫",
  qua: "",
  tlgiam: " -15%",
  khuyenmai: "Giảm ngay <b>70.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Cáp sạc <b>màu trắng sang trọng</b>, có chiều dài <b>1 m</b>, phù hợp dùng tại nhà, công ty.</li>' +
    '<li>Sạc pin mạnh mẽ với mức công suất lên đến <b>87 W</b>. </li>' +
    '<li>Đồng bộ hóa dữ liệu hiệu quả giữa điện thoại và laptop. </li>' +
    '<li><b>Đầu vào Type-C</b> và <b>đầu ra Lightning</b> sử dụng với các thiết bị Apple, adapter sạc, sạc dự phòng.</li>' +
    '<li>Mẫu dây cáp Apple MM0A3 giống Apple MX0K2, chỉ khác mã lô.</li>' +
    '<li>Hàng chính hãng Apple, nguyên seal 100%.</li>',
  review: 19,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory7 = {
  ma: 7,
  img: "../img/accessory/accessory7/acs7.jpeg",
  ten: "Adapter sạc 3 cổng USB Type C PD 65W",
  gia: "1.190.000₫",
  giagoc: "1.490.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>90.000₫</b>",
  tinhtrang: "NEW",
  title: "SALE LỚN",
  hang: "Samsung",
  uudaithem: "- Nhập mã THAD20 giảm 20% tối đa 100.000đ khi thanh toán",
  dacdiemnoibat: 
    '<li>Mang một thiết kế hoàn thiện kết hợp màu đen đầy tinh tế.</li>' +
    '<li>Hiệu suất sạc siêu nhanh cho một loạt thiết bị công nghệ.</li>',
  review: 23,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' 
};
let accessory8 = {
  ma: 8,
  img: "../img/accessory/accessory8/acs8.jpeg",
  ten: "Gậy Chụp Ảnh Bluetooth Cosano HD-P7",
  gia: "75.000₫",
  giagoc: "150.000₫",
  tlgiam: " -50%",
  qua: "",
  khuyenmai: "Giảm ngay <b>20.000₫</b>",
  tinhtrang: "NEW",
  title: "SALE LỚN",
  hang: "",
  uudaithem: "- FREEship đơn hàng từ 300.000đ",
  dacdiemnoibat: 
    '<li>Gậy chụp ảnh có kích thước lớn, thiết kế tỉ mỉ, màu sắc đẹp mắt.</li>' +
    '<li>Đầu giữ điện thoại có kích thước dưới 6 inch.</li>' +
    '<li>Nút ấn nhanh nhạy, dùng được cho <b>iOS, Android</b>.</li>' +
    '<li>Chiều dài gậy 80 cm.</li>',
  review: 52,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory9 = {
  ma: 9,
  img: "../img/accessory/accessory9/acs9.jpeg",
  ten: "OPPO PBV02 10.000 mAh Type C PD",
  gia: "1.260.000₫",
  giagoc: "1.800.000₫",
  tlgiam: " -30%",
  qua: "",
  khuyenmai: "Giảm ngay <b>90.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 100K",
  hang: "Oppo",
  uudaithem: "- Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên",
  dacdiemnoibat:
    '<li>Dung lượng lớn 10.000 mAh, hiệu suất sạc 65%.</li>' +
    '<li>Tích hợp chuẩn sạc nhanh chuẩn VOOC 30W qua dòng điện thoại Oppo.</li>' +
    '<li>Sạc nhanh hơn qua công nghệ Qualcomm Quick Charge và Power Delivery trên cổng Type-C.</li>' +
    '<li>Thiết kế sang trọng, tinh tế, vỏ nhựa bền tốt.</li>' +
    '<li>An toàn khi dùng với lõi pin Polymer.</li>' +
    '<li>Nguồn vào cổng Type-C PD.</li>' +
    '<li>Tương thích với nhiều loại điện thoại và máy tính bảng với 2 nguồn ra (USB và Type-C).</li>',
  review: 103,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory10 = {
  ma: 10,
  img: "../img/accessory/accessory10/acs10.jpeg",
  ten: "Adapter Sạc USB Hydrus",
  gia: "200.000₫",
  giagoc: "80.000₫",
  tlgiam: " -60%",
  qua: "",
  khuyenmai: "Giảm ngay <b>90.000₫</b>",
  tinhtrang: "NEW",
  title: "SALE LỚN",
  hang: "Hydrus",
  uudaithem: "- FREEship đơn hàng từ 300.000đ",
  dacdiemnoibat: 
    '<li>Chất liệu vỏ được làm cách điện, an toàn khi thao tác cắm sạc.</li>' +
    '<li>Tích hợp chấu 2 chân gắn dễ dàng với nhiều ổ cắm tại nhà và công cộng.</li>',
  review: 35,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' 
};
let accessory11 = {
  ma: 11,
  img: "../img/accessory/accessory11/acs11.jpeg",
  ten: "Apple Watch S6 40mm viền nhôm",
  gia: "8.490.000₫",
  giagoc: "9.990.000₫",
  tlgiam: " -15%",
  qua: "Quà 200.000₫",
  khuyenmai: "Giảm ngay <b>200.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 700K",
  hang: "Apple",
  uudaithem: "- Giảm ngay 666.000đ khi tham gia thu cũ đổi mới (Không áp dụng kèm giảm giá qua VNPay, Moca)",
  dacdiemnoibat:
    '<li>Thiết kế sang trọng, hiện đại, là phụ kiện thời trang khẳng định đẳng cấp.</li>' +
    '<li>Công nghệ mới giúp bạn quản lý và theo dõi sức khỏe của bản thân dễ dàng, khoa học hơn.</li>' +
    '<li>Chip xử lý <b>S6</b> nhanh hơn tới 20% so với S5.</li>' +
    '<li>Hệ điều hành WatchOS 7 mang đến nhiều tính năng mới hỗ trợ người dùng tối ưu.</li>' +
    '<li>Màn hình <b>OLED Retina</b> luôn luôn hiển thị giúp bạn xem giờ và thông báo thuận tiện.</li>' +
    '<li>Nhận thông báo và <b>nghe gọi trên đồng hồ</b> một cách thuận tiện.</li>' +
    '<li>Pin dung lượng lớn, sạc đầy nhanh chóng.</li>' +
    '<li>Quản lý sức khỏe của bản thân tốt hơn.</li>' +
    '<li>Hỗ trợ người dùng tốt hơn với <b>trợ lý ảo Siri</b>.</li>' +
    '<li>Tắm, bơi ở vùng nước nông với chỉ số chống nước <b>5 ATM</b>.</li>',
  review: 30,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory12 = {
  ma: 12,
  img: "../img/accessory/accessory12/acs12.jpeg",
  ten: "Samsung Galaxy Watch 4 40mm Vàng Hồng",
  gia: "5.190.000₫",
  giagoc: "6.490.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>200.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 300K",
  hang: "Samsung",
  uudaithem: "- Giảm đến 2,000,000đ + TG 0% khi mua kèm xe đạp giá từ 7,000,000đ (không áp dụng kèm khuyến mãi khác)",
  dacdiemnoibat: 
    '<li>Thiết kế liền mạch, sành điệu.</li>' +
    '<li>Cấu hình mạnh mẽ.</li>' +
    '<li>Định vị <b>GPS</b> chính xác.</li>' +
    '<li>Nhiều tiện tích sức khoẻ.</li>' +
    '<li><b>Sạc không dây</b> tiện lợi.</li>',
  review: 19,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory13 = {
  ma: 13,
  img: "../img/accessory/accessory13/acs13.jpeg",
  ten: "Tai nghe Bluetooth AirPods Pro Wireless Charge Apple MWP22",
  gia: "4.890.000₫",
  giagoc: "6.790.000₫",
  tlgiam: " -27%",
  qua: "",
  khuyenmai: "Giảm ngay <b>200.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD5 giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab",
  dacdiemnoibat: 
    '<li>Thiết kế in-ear hoàn toàn mới và độc đáo.</li>' +
    '<li>Tích hợp công nghệ <b>chống ồn chủ động</b> (Active Noise Cancellation).</li>' +
    '<li>Chip H1 mạnh mẽ, xử lý âm thanh kỹ thuật số với <b>độ trễ gần như bằng không</b>.</li>' +
    '<li>Nghe nhạc đến 4.5 giờ khi bật chống ồn, 5 giờ khi tắt chống ồn.</li>' +
    '<li>Sử dụng song song với hộp sạc có thể dùng được đến 24 giờ nghe nhạc.</li>' +
    '<li>Hỗ trợ sạc nhanh, cho thời gian <b>sử dụng đến 1 giờ chỉ với 5 phút sạc</b>.</li>' +
    '<li>Hộp sạc <b>hỗ trợ sạc không dây</b> chuẩn Qi, tiện lợi khi sạc lại.</li>' +
    '<li>Trang bị <b>chuẩn chống nước IPX4</b>, bảo vệ tai nghe an toàn dưới mưa nhỏ và mồ hôi.</li>' +
    '<li>Sản phẩm chính hãng Apple, nguyên seal 100%.</li>', 
  review: 57,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory14 = {
  ma: 14,
  img: "../img/accessory/accessory14/acs14.jpeg",
  ten: "Ốp lưng MagSafe iPhone 13 Pro Nhựa dẻo Apple",
  gia: "795.000₫",
  giagoc: "1.590.000₫",
  tlgiam: " -50%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD5 giảm 5% tối đa 400.000đ cho đơn hàng từ 1.000.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab",
  dacdiemnoibat: 
    '<li>Tạo phong cách trẻ trung cho bạn với tông xanh tươi tắn.</li>' +
    '<li>Sạc pin đơn giản hơn nhờ tương thích sạc không dây <b>MagSafe</b>.</li>' +
    '<li>Hình dạng ốp lưng hoàn toàn vừa vặn với dòng <b>iPhone 13 Pro</b>.</li>' +
    '<li>Làm bằng <b>nhựa dẻo</b> cho phụ kiện bền đẹp, tháo lắp dễ dàng khi cần.</li>' +
    '<li>Uy tín về chất lượng với sản phẩm 100% chính hãng Apple.</li>',
  review: 2,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory15 = {
  ma: 15,
  img: "../img/accessory/accessory15/acs15.jpeg",
  ten: "Tai nghe nhét trong EarPods Lightning Apple MMTN2",
  gia: "632.000₫",
  giagoc: "790.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD10 giảm 10% tối đa 10.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Thiết kế hiện đại, đầu tai nghe tròn theo hình dáng của tai.</li>' +
    '<li>Có phím điều chỉnh âm lượng, nghe/nhận cuộc gọi.</li>' +
    '<li>Cổng lightning phù hợp với đa số iPhone, iPad...</li>' +
    '<li>Sản phẩm chính hãng nguyên seal 100%.</li>',
  review: 52,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory16 = {
  ma: 16,
  img: "../img/accessory/accessory16/acs16.jpeg",
  ten: "Ốp lưng iPhone 11 Nhựa dẻo Spigen Crystal Hybrid Quartz",
  gia: "503.000₫",
  giagoc: "839.000₫",
  tlgiam: " -40%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD10 giảm 10% tối đa 10.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Kiểu dáng thời trang và đẹp mắt.</li>' +
    '<li>Thiết kế vừa vặn và ôm sát thân máy.</li>' +
    '<li>Dễ dàng tháo/lắp ốp vào máy.</li>',
  review: 20,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' 
};
let accessory17 = {
  ma: 17,
  img: "../img/accessory/accessory17/acs17.jpeg",
  ten: "Chuột Bluetooth Apple MK2E3 Trắng",
  gia: "1.992.000₫",
  giagoc: "2.490.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>100.000₫</b>",
  tinhtrang: "NEW",
  title: "SALE LỚN",
  hang: "Apple",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Công nghệ <b>Multi-Touch</b>, cổng sạc <b>Lightning</b>.</li>' +
    '<li>Thiết kế siêu nhẹ và tính ứng dụng cao hơn.</li>' +
    '<li>Sản phẩm nhỏ gọn, trọng lượng chỉ khoảng <b>80 g, bề mặt đa cảm ứng</b> giúp cho bạn sử dụng nhanh nhạy đa điểm hơn.</li>'+
    '<li>Tương thích máy Mac hỗ trợ Bluetooth với <b>hệ điều hành Mac OS</b>.</li>' +
    '<li><b>Sản phẩm chính hãng Apple.</b></li>',
  review: 5,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory18 = {
  ma: 18,
  img: "../img/accessory/accessory18/acs18.jpeg",
  ten: "Xmobile P66D",
  gia: "600.000₫",
  giagoc: "750.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "X-mobile",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat: 
    '<li>Thiết kế <b>gọn nhẹ</b>, lớp vỏ nhám <b>chống trơn trượt</b>.</li>' +
    '<li>Chuẩn Qi tương thích với các thiết bị có sạc không dây</li>' +
    '<li><b>Dung lượng pin 10.000 mAh</b>, hiệu suất sạc 65%.</li>'+
    '<li>Hỗ trợ 2 cổng ra (output) Type-C PD: 5V - 3A, 9V - 2A, 12V - 1.5A, USB: 5V - 3A, 9V - 2A, 12V - 1.5A.</li>' +
    '<li>Công nghệ sạc thông minh Power Delivery <b>điều chỉnh dòng điện</b> phù hợp với các thiết bị, <b>giúp sạc nhanh hơn, hiệu quả hơn</b>.</li>'+
    '<li>Cổng sạc nhanh USB Quick Charge 3.0 tương thích với nhiều thiết bị.</li>' +
    '<li><b>Công suất sạc không dây 10 W, sạc nhanh lên tới 18 W.</b></li>' +
    '<li>Trang bị 2 cổng sạc vào (input) Micro USB và Type C giúp cho việc lựa chọn cáp sạc dễ dàng hơn.</li>'+
    '<li>Đèn <b>led thông báo tình trạng pin</b>, mỗi vạch tương ứng với 25% mức pin.</li>',
  review: 103,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory19 = {
  ma: 19,
  img: "../img/accessory/accessory19/acs19.jpeg",
  ten: "Xmobile PowerLite P106WD",
  gia: "600.000₫",
  giagoc: "750.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "X-mobile",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat:
    '<li>Thiết kế gọn nhẹ, chất liệu Fabric phủ lên mặt trước giúp chống bám vân tay, hạn chế trầy xước.</li>' +
    '<li>Trang bị cổng sạc nhanh Type C Power Delivery cho cả 2 cổng ra và cổng vào.</li>' +
    '<li>Cổng ra USB trang bị sạc nhanh Quick Charge 3.0.</li>'+
    '<li>Lõi pin Polymer chất lượng cao, dung lượng lớn 10.000 mAh.</li>' +
    '<li>Sạc cho nhiều loại điện thoại và máy tính bảng. </li>',
  review: 40,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory20 = {
  ma: 20,
  img: "../img/accessory/accessory20/acs20.jpeg",
  ten: "Samsung EB-P3300",
  gia: "891.000₫",
  giagoc: "990.000₫",
  tlgiam: " -10%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Samsung",
  uudaithem: "- Nhập mã THAD5 giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab",
  dacdiemnoibat: 
    '<li>Thiết kế nhỏ gọn, mỏng, trọng lượng nhẹ.</li>' +
    '<li>Trang bị công nghệ sạc nhanh <b>Super Fast Charging</b> và <b>Power Delivery</b>.</li>' +
    '<li>Dung lượng pin cao 10.000 mAh, lõi pin Polymer an toàn.</li>'+
    '<li>Nguồn ra tối đa cổng Type C 25W, cổng USB 18W.</li>' +
    '<li>Tương thích với nhiều loại thiết bị.</li>',
  review: 16,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory21 = {
  ma: 21,
  img: "../img/accessory/accessory21/acs21.jpeg",
  ten: "HyperJuice HJ-WL61TC",
  gia: "872.000₫",
  giagoc: "1.090.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>70.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Hyper",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat: 
    '<li><b>Sạc không dây</b> với phụ kiện từ tính an toàn.</li>' +
    '<li>Sạc dự phòng Hyper có thể sạc cùng lúc 2 thiết bị (không dây + USB-C).</li>' +
    '<li>Hỗ trợ sạc không dây thông qua ngay cả khi pin hết dung lượng.</li>'+
    '<li>Đèn LED chỉ báo mức pin.</li>',
  review: 103,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory22 = {
  ma: 22,
  img: "../img/accessory/accessory22/acs22.jpeg",
  ten: "Xmobile PowerBox P72D",
  gia: "720.000₫",
  giagoc: "900.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>70.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "X-mobile",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Thiết kế hiện đại, chất liệu Fabric bao phủ giúp chống bám vân tay, hạn chế trầy xước hiệu quả.</li>' +
    '<li>Hỗ trợ 3 cổng ra (output) Type C Power Delivery và USB <b>Quick Charge 3.0</b> giúp sạc nhanh, an toàn với nhiều thiết bị.</li>' +
    '<li>2 cổng vào (input) Micro USB và Type C giúp cho việc lựa chọn cáp sạc dễ dàng hơn.</li>'+
    '<li>Lõi pin Polymer độ bền cao, dung lượng lớn <b>15.000 mAh</b>.</li>' +
    '<li>Sạc nhanh cho nhiều loại điện thoại và máy tính bảng.</li>',
  review: 44,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory23 = {
  ma: 23,
  img: "../img/accessory/accessory23/acs23.jpeg",
  ten: "Anker PowerCore Essential A1287",
  gia: "1.260.000₫",
  giagoc: "1.400.000₫",
  tlgiam: " -10%",
  qua: "",
  khuyenmai: "Giảm ngay <b>90.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 100K",
  hang: "Anker",
  uudaithem: "- Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên",
  dacdiemnoibat: 
    '<li>Hỗ trợ chuẩn <b>sạc nhanh Power Delivery</b> với công suất sạc tới <b>20 W</b>.</li>' +
    '<li>Sạc được nhiều thiết bị với dung lượng pin lớn đến <b>20.000 mAh</b>.</li>' +
    '<li>Lõi pin Polymer tuổi thọ cao, có đèn báo dung lượng pin dễ quan sát. </li>'+
    '<li>Có <b>1 cổng ra/vào Type-C</b> và <b>1 cổng ra USB</b> thông dụng.</li>' +
    '<li>Kiểu dáng hiện đại, gọn gàng, thiết kế hạn chế trầy xước. </li>',
  review: 13,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory24 = {
  ma: 24,
  img: "../img/accessory/accessory24/acs24.jpeg",
  ten: "Belkin Pocket Powver BPB002",
  gia: "1.520.000₫",
  giagoc: "1.900.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>100.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Belkin",
  uudaithem: "- Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên",
  dacdiemnoibat: 
    '<li>Thiết kế chắc chắn, có <b>2 phiên bản màu</b>: đen, trắng.</li>' +
    '<li>Dung lượng pin lớn <b>20.000 mAh</b>, lõi pin <b>Polymer</b> an toàn.</li>' +
    '<li>Cổng <b>Type C</b> trang bị công nghệ sạc nhanh <b>Power Delivery 30W</b> cho cả nguồn ra và nguồn vào.</li>'+
    '<li>Tương thích với nhiều loại điện thoại và máy tính bảng.</li>',
  review: 3,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' 
};
let accessory25 = {
  ma: 25,
  img: "../img/accessory/accessory25/acs25.jpeg",
  ten: "Belkin Pocket Power BP001",
  gia: "760.000₫",
  giagoc: "950.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "Belkin",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat: 
    '<li>Thiết kế chắc chắn, thời trang.</li>' +
    '<li>Dung lượng pin lớn <b>10.000 mAh</b>, lõi pin <b>Polymer</b> an toàn.</li>' +
    '<li>Cổng <b>Type C</b> trang bị công nghệ sạc nhanh <b>Power Delivery 18 W</b> cho cả nguồn ra và nguồn vào.</li>'+
    '<li>Tương thích với nhiều loại điện thoại và máy tính bảng.</li>',
  review: 43,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory26 = {
  ma: 26,
  img: "../img/accessory/accessory26/acs26.jpeg",
  ten: "Energizer QE10007PQ",
  gia: "800.000₫",
  giagoc: "1.000.000₫",
  tlgiam: " -20%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "X-mobile",
  uudaithem: "- Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên",
  dacdiemnoibat: 
    '<li>Thiết kế vỏ nhựa, kích thước nhỏ gọn.</li>' +
    '<li>Hỗ trợ sạc thông minh Power Delivery 18W, <b>sạc đầy 50% pin trong vòng 30 phút</b>, giúp sạc nhanh cho các thiết bị.</li>' +
    '<li>Công nghệ thông minh Multi Protocol Fast Charging (Sạc nhanh đa nền tảng), <b>hỗ trợ tất cả các chuẩn sạc nhanh</b>.</li>'+
    '<li>Tích hợp cổng ra (Ouput) USB-C, USB & <b>Sạc không dây Qi 10W</b>.</li>' +
    '<li>Cổng vào (Input) Type - C giúp sạc cho pin nhanh chóng hơn.</li>'+
    '<li>Tích hợp công nghệ Auto Voltage Sensing - Tự động cảm biến điện áp giúp <b>tương thích với mọi thiết bị di động</b>.</li>' +
    '<li><b>Chứng nhận về an toàn & chống cháy nổ</b>: CE, FCC, ETL, CB, EAC, RoHS, Reach, ERP6, DOE6.</li>',
  review: 25,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory27 = {
  ma: 27,
  img: "../img/accessory/accessory27/acs27.jpeg",
  ten: "Sạc 4 cổng Xmobile DS931-WB",
  gia: "199.000₫",
  giagoc: "450.000₫",
  tlgiam: " -55%",
  qua: "",
  khuyenmai: "Giảm ngay <b>20.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "X-mobile",
  uudaithem: "- FREEship đơn hàng từ 500.000đ",
  dacdiemnoibat: 
    '<li>Thiết kế chắc chắn, tiện dụng.</li>' +
    '<li>Trang bị 3 cổng USB và 1 cổng Type C vô cùng tiện lợi.</li>' +
    '<li><b>Sạc riêng lẻ</b> nguồn ra 3 cổng USB: 5V - 2.4A, cổng Type C: 5V - 3A.</li>' +
    '<li>Sạc đồng thời cả 4 cổng nguồn ra Max: 5V - 4.8A.</li>' +
    '<li><b>Sạc được cho nhiều loại thiết bị</b>: Điện thoại, máy tính bảng, pin dự phòng, loa bluetooth,..</li>' +
    '<li>Sử dụng kèm các loại cáp như: Micro USB, Lightning, Type C.</li>',
  review: 4,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory28 = {
  ma: 28,
  img: "../img/accessory/accessory28/acs28.jpeg",
  ten: "Sạc Samsung EP-TA800N",
  gia: "490.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "Samsung",
  uudaithem: "- Nhập mã THAD100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng",
  dacdiemnoibat: 
    '<li>Kiểu dáng nhỏ gọn, mang theo tiện lợi. </li>' +
    '<li>Sạc thường với đầu ra <b>Type-C 5V/3A, sạc nhanh PDO: 9V/2.77A, PPS: 3.3 - 5.9V/3A hoặc 3.3 - 11V/2.25A.</b></li>' +
    '<li>Tích hợp công nghệ <b>Power Delivery</b> sạc nhanh đến <b>25W</b>.</li>' +
    '<li>Tương thích tốt với nhiều thiết bị, cáp sạc.</li>',
  review: 34,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory29 = {
  ma: 29,
  img: "../img/accessory/accessory29/acs29.jpeg",
  ten: "Sạc OPPO VCA7JAUH",
  gia: "686.000₫",
  giagoc: "980.000₫",
  tlgiam: " -30%",
  qua: "",
  khuyenmai: "Giảm ngay <b>20.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "Oppo",
  uudaithem: "- FREEship đơn hàng từ 1.000.000đ",
  dacdiemnoibat: 
    '<li>Thiết kế tinh tế với tông màu trắng sang trọng.</li>' +
    '<li>Công nghệ sạc nhanh <b>SuperVOOC</b> cho dòng sạc tối đa <b>65 W</b>.</li>' +
    '<li>Sử dụng cổng ra <b>USB 10V - 6.5A</b> thông dụng.</li>' +
    '<li>Tương thích với nhiều thiết bị cáp, sạc.</li>',
  review: 4,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' 
};
let accessory30 = {
  ma: 30,
  img: "../img/accessory/accessory30/acs30.jpeg",
  ten: "Sạc 2 cổng Anker Powerport Speed 2",
  gia: "730.000₫",
  giagoc: "730.000₫",
  tlgiam: " -25%",
  qua: "",
  khuyenmai: "Giảm ngay <b>50.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 50K",
  hang: "Anker",
  uudaithem: "- Nhập mã THAD5 giảm 5% tối đa 400.000đ cho đơn hàng từ 500.000đ trở lên khi thanh toán qua Ví Moca trên ứng dụng Grab",
  dacdiemnoibat: 
    '<li>Thiết kế nhỏ gọn, hiện đại.</li>' +
    '<li>Hỗ trợ sạc nhanh với dòng sạc tối đa đến <b>20W</b>.</li>' +
    '<li>2 cổng ra USB, giúp sạc cùng lúc 2 thiết bị với tốc độ ổn định.</li>' +
    '<li>Công nghệ <b>Quick Charge 3.0</b>, sạc 80% pin chỉ trong 35 phút (thiết bị được sạc phải hỗ trợ Quick Charge 3.0).</li>' +
    '<li>Trang bị chip thông minh PowerIQ và công nghệ <b>VoltageBoost</b>, giúp sạc cho mọi thiết bị với tốc độ nhanh nhất có thể.</li>' +
    '<li>Chất liệu nhựa cao cấp cho độ bền cao, cách điện tốt, đảm bảo an toàn.</li>',
  review: 107,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' 
};
let accessory31 = {
  ma: 31,
  img: "../img/accessory/accessory31/acs31.jpeg",
  ten: "Đế sạc không dây AUKEY LC-C6",
  gia: "354.000₫",
  giagoc: "590.000₫",
  tlgiam: " -40%",
  qua: "",
  khuyenmai: "Giảm ngay <b>20.000₫</b>",
  tinhtrang: "NEW",
  title: "GIẢM SỐC",
  hang: "AUKEY",
  uudaithem: "- FREEship đơn hàng từ 500.000đ",
  dacdiemnoibat: 
    '<li>Thiết kế nhỏ gọn, tiện lợi, không chiếm quá nhiều diện tích khi đặt trên bàn.</li>' +  
    '<li>Với chuẩn <b>sạc không dây Qi</b>, <b>có tốc độ sạc nhanh</b> cho các thiết bị tương thích chuẩn sạc Qi 10W.</li>' +
    '<li>Bộ sạc không dây được trang bị jack cắm Micro USB, sử dụng cáp Micro USB thông dụng.</li>' +
    '<li>Dây cáp dài <b>1 m</b>, cho bạn dễ dàng sử dụng và cuốn gọn khi mang theo khi cần.</li>',
  review: 1,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-o" aria-hidden="true"></i>' 
};
let accessory32 = {
  ma: 32,
  img: "../img/accessory/accessory32/acs32.jpeg",
  ten: "Cáp Type C - Type C 2m Hydrus DS465",
  gia: "200.000₫",
  giagoc: "",
  tlgiam: "",
  qua: "",
  khuyenmai: "Giảm ngay <b>10.000₫</b>",
  tinhtrang: "NEW",
  title: "VNPAY GIẢM 20K",
  hang: "Hydrus",
  uudaithem: "- FREEship đơn hàng từ 300.000đ",
  dacdiemnoibat: 
    '<li>Cáp sạc có chiều dài <b>2 m</b>.</li>' +
    '<li>Cả đầu vào và đầu ra đều có dạng giao tiếp là <b>Type-C</b>.</li>' +
    '<li>Sạc nhanh chóng với công suất tối đa lên đến <b>60 W</b>.</li>' +
    '<li>Hỗ trợ với nhiều mức điện áp khác nhau 5V - 3A, 9V - 2A, 12V - 3A, 15V - 3A, 20V - 3A.</li>',
  review: 5,
  danhgia2: '<div>' + 
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' +
      '</div>',
  danhgia:
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star" aria-hidden="true"></i>' + '&nbsp' +
      '<i class="fa fa-star-half-o" aria-hidden="true"></i>' 
};

let products1 = [product1, product2, product3, product4, product5, product6, product7, product8, product9,product10,product11,product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24];
let products2 = [product2, product1, product5, product7, product4, product6, product8, product3];
let apple = [product1, product4, product12];
let products_giamgia1 = [product13, product14, product15, product16, product17]
let products_giamgia2 = [accessory1, accessory2, accessory12, accessory11, accessory6]
let products_giamgia3 = [product19, product18, product20, product21, product22]
let product_noibat = [product1, product4, product15, product7, product2, product9, product20, product8, product19, product6]

let accessorys1 = [accessory1, accessory2, accessory3, accessory4, accessory5, accessory6, accessory7, accessory8, accessory9, accessory10, accessory11, accessory12, accessory13, accessory14, accessory15, accessory16, accessory17, accessory18, accessory19, accessory20, accessory21, accessory22, accessory23, accessory24, accessory25, accessory26, accessory27, accessory28, accessory29, accessory30, accessory31, accessory32]
let accessorys2 = [accessory1, accessory2, accessory3, accessory4, accessory5, accessory6, accessory7, accessory8, accessory9, accessory10]
let acsApple = [accessory1, accessory2, accessory5, accessory6, accessory11, accessory13, accessory14, accessory15, accessory16, accessory17]
let acsPinSacDuPhong = [accessory9, accessory18, accessory19, accessory20, accessory21, accessory22, accessory23, accessory24, accessory25, accessory26]
let acsCapSac = [accessory6, accessory4, accessory7, accessory10, accessory27, accessory28, accessory29, accessory30, accessory31, accessory32]

function hienthiChiTiet(ma){
  let sp = products1.find(spTemp => spTemp.ma === ma);
  localStorage.setItem("ma", sp.ma);
  localStorage.setItem("hinhanh", sp.img);
  localStorage.setItem("ten", sp.ten);
  localStorage.setItem("gia", sp.gia);
  localStorage.setItem("hang", sp.hang);
  localStorage.setItem("loai", sp.loai);
  localStorage.setItem("kichthuoc", sp.kinhthuoc);
  localStorage.setItem("pin", sp.pin);
  localStorage.setItem("hedieuhanh", sp.hedieuhanh);
  localStorage.setItem("ram", sp.ram);
  localStorage.setItem("rom", sp.rom);
  localStorage.setItem("camerasau", sp.camerasau);
  localStorage.setItem("cameratruoc", sp.cameratruoc);
  localStorage.setItem("sim", sp.sim);
  localStorage.setItem("review", sp.review);
  localStorage.setItem("chip", sp.chip);
  localStorage.setItem("danhgia", sp.danhgia);
  localStorage.setItem("data_tieude", sp.data_tieude);
  localStorage.setItem("data_noibat", sp.data_noibat);
  localStorage.setItem("data_chitiet", sp.data_chitiet);
  localStorage.setItem("img_chitiet", sp.img_chitiet);
}

function hienthiChiTietPhuKien(ma){
  let acs = accessorys1.find(acsTemp => acsTemp.ma === ma);
  localStorage.setItem("ma", acs.ma);
  localStorage.setItem("hinhanh", acs.img);
  localStorage.setItem("ten", acs.ten);
  localStorage.setItem("gia", acs.gia);
  localStorage.setItem("hang", acs.hang);
  localStorage.setItem("loai", acs.loai);
  localStorage.setItem("review", acs.review);
  localStorage.setItem("danhgia", acs.danhgia);
  localStorage.setItem("danhgia2", acs.danhgia2);
  localStorage.setItem("tinhtrang", acs.tinhtrang);
  localStorage.setItem("dacdiemnoibat", acs.dacdiemnoibat);
  localStorage.setItem("uudaithem", acs.uudaithem);
  localStorage.setItem("khuyenmai", acs.khuyenmai);
};

//-----------Load sản phẩm lên trang sản phẩm-----------
$(document).ready(function () {
  function displayProduct(product) {
  let productx =
      "<div class='col-lg-3 temp'>" +
      "<a href='ChiTietDienThoai.html' onclick='hienthiChiTiet(" + product.ma + ");' class='nav-link'>" +       
      "<img src='" + product.img + "' alt='" + product.ten + "'>" +
      "<h3 >" + product.ten + "</h3>" +
      "<p style='font-size: 20px; color: black; font-weight: bold; line-height: 15px; text-align: center;'>" + product.gia + "</p>" +
      "<div class='rating' style='font-size: 20px; padding-left: 18px; margin-bottom: 40px'>" +
        product.danhgia +
      "</div>" +
      "</a>"+
      "</div>";

  $(".pro").append(productx);
  }   
  products1.forEach(displayProduct);
});

//-----------Load phẩm trang Index
$(document).ready(function () {
  function displayProduct(product) {
  let producty =
    "<div class='slider-product-one-content-item'>"+
      '<a href="ChiTietDienThoai.html" onclick="hienthiChiTiet(' + product.ma + ');" class="nav-link">' + 
      '<img src="' + product.img + '" alt=""></a>' +
          '<div class="slider-product-one-content-item-text">' +
            '<li><img src="../img/icon1.png" alt="">' + 
              '<p>' + product.title + '</p>' +
            '</li>' +
            '<li>' + product.ten + '</li>' +'<li>' + '</li>' +
            '<li><a href="">' + product.giagoc + '</a><span>' + '&nbsp' +product.tlgiam + '</span></li>' +
            '<li>' + product.gia + '</li>' + 
            '<li>' + product.qua + '</li>' +
            '<li>' + 
            product.danhgia2 +
            '</li>'+
          '</div>' +
    '</div>' 

  $(".pro2").append(producty);
  }   
  products_giamgia1.forEach(displayProduct);
});

$(document).ready(function () {
  function displayProduct(accessory) {
  let accessoryy =
    "<div class='slider-product-one-content-item'>"+
      '<a href="ChiTietPhuKien.html" onclick="hienthiChiTietPhuKien(' + accessory.ma + ');" class="nav-link">' +
      '<img src="' + accessory.img + '" alt=""></a>' +
          '<div class="slider-product-one-content-item-text">' +
            '<li><img src="../img/icon1.png" alt="">' + 
              '<p>' + accessory.title + '</p>' +
            '</li>' +
            '<li>' + accessory.ten + '</li>' +'<li>' + '</li>' +
            '<li><a href="">' + accessory.giagoc + '</a><span>' +accessory.tlgiam + '</span></li>' +
            '<li>' + accessory.gia + '</li>' + 
            '<li>' + accessory.qua + '</li>' +
            '<li>' + 
            accessory.danhgia2 +
            '</li>'+
          '</div>' +
    '</div>' 

  $(".pro3").append(accessoryy);
  }   
  products_giamgia2.forEach(displayProduct);
});

$(document).ready(function () {
  function displayProduct(product) {
  let productz =
    "<div class='slider-product-one-content-item'>"+
      '<a href="ChiTietDienThoai.html" onclick="hienthiChiTiet(' + product.ma + ');" class="nav-link">' + 
      '<img src="' + product.img + '" alt=""></a>' +
          '<div class="slider-product-one-content-item-text">' +
            '<li><img src="../img/icon1.png" alt="">' + 
              '<p>' + product.title + '</p>' +
            '</li>' +
            '<li>' + product.ten + '</li>' +'<li>' + '</li>' +
            '<li><a href="">' + product.giagoc + '</a><span>' +product.tlgiam + '</span></li>' +
            '<li>' + product.gia + '</li>' + 
            '<li>' + product.qua + '</li>' +
            '<li>' + 
            product.danhgia2 +
            '</li>'+
          '</div>' +
    '</div>' 

  $(".pro5").append(productz);
  }   
  products_giamgia3.forEach(displayProduct);
});

$(document).ready(function () {
  function displayProduct(product) {
  let producty =
  '<div class="product-gallery-one-content-product-item">' + 
  '<a href="ChiTietDienThoai.html" onclick="hienthiChiTiet(' + product.ma + ');">' +
  '<img src="'+ product.img +'" alt=""></a>' +
  '<div class="product-gallery-one-content-product-item-text">' +
      '<li><img src="../img/icon1.png" alt="">' +
          '<p>'+ product.title +'</p>' +
      '</li>' +
      '<li>'+ product.ten +'</li>' +
      '<li>'+'</li>'+
      '<li><del style="font-size: 14px;">'+ product.giagoc + '</del>'+ product.tlgiam +'</li>' +
      '<li>'+ product.gia +'</li>' +
      '<li>'+ product.qua +'</li>' +
      '<li>'+
          product.danhgia2 +
          '<i><span style="color: black; font-size: 12px;">' + '&nbsp <sup>' + product.review +'</sup></span></i>' +
          '</li>'+
  '</div>'+
  
'</div>'

  $(".pro4").append(producty);
  }   
  product_noibat.forEach(displayProduct);
});
//-------Load Phụ Kiện Trang Index-------
$(document).ready(function () {
  function displayProduct(accessory) {
  let accessoryx =
      '<div class="product-gallery-three-content-product-item">' +
      '<a href="ChiTietPhuKien.html" onclick="hienthiChiTietPhuKien(' + accessory.ma + ');" class="nav-link">' +
      '<img src="'+ accessory.img +'" alt="">'+
      '</a>' +
      '<div class="product-gallery-three-content-product-item-text">' +
          '<li><img src="../img/icon1.png" alt="">' +
              '<p>'+ accessory.title +'</p>' +
          '</li>' +
          '<li>'+ accessory.ten +'</li>' +
          '<li>'+ accessory.qua +'</li>' +
          '<li><del style="font-size: 14px;">'+ accessory.giagoc + '</del>'+ accessory.tlgiam +'</li>' +
          '<li>'+ accessory.gia +'</li>' +
          '<li>' +
              accessory.danhgia +
              '<i><sup style="color: black; font-size: 10px;">'+'&nbsp&nbsp' + accessory.review +'</sup></i>' +
          '</li>' +
      '</div>' +
  '</div>'
  
  $(".acs1").append(accessoryx);
  }   
  accessorys2.forEach(displayProduct);
});
//-------Load Phụ Kiện Trang Phụ Kiện-------
$(document).ready(function(){
  function displayAcsApple(acsApple){
    let acsApplex = 
    '<div class="product-gallery-three-content-product-item">' +
      '<a href="ChiTietPhuKien.html" onclick="hienthiChiTietPhuKien(' + acsApple.ma + ');" class="nav-link"><img src="'+ acsApple.img +'" alt="" ></a>' +
      '<div class="product-gallery-three-content-product-item-text">' +
        '<li><img src="../img/icon1.png" alt=""><p>'+ acsApple.title +'</p></li> ' +
        '<li>'+ acsApple.ten +'</li>' +
        '<li> </li>' +
        '<li><del style="font-size: 14px;">'+ acsApple.giagoc + '</del>'+ acsApple.tlgiam +'</li>' +
        '<li>'+ acsApple.gia +'</li>' +
        '<li>' +
          acsApple.danhgia +
          '<i><sup style="color: black; font-size: 10px;">'+'&nbsp&nbsp' + acsApple.review +'</sup></i>' +
        '</li>' +
        '</div>' +
    '</div>'
    $(".acsApple").append(acsApplex);
  }
  acsApple.forEach(displayAcsApple);
});

$(document).ready(function(){
  function displayAcsPinSacDuPhong(acsPinSacDuPhong){
    let acsPinSacDuPhongx = 
    '<div class="product-gallery-three-content-product-item">' +
      '<a href="ChiTietPhuKien.html" onclick="hienthiChiTietPhuKien(' + acsPinSacDuPhong.ma + ');" class="nav-link"><img src="'+ acsPinSacDuPhong.img +'" alt="" ></a>' +
      '<div class="product-gallery-three-content-product-item-text">' +
        '<li><img src="../img/icon1.png" alt=""><p>'+ acsPinSacDuPhong.title +'</p></li> ' +
        '<li>'+ acsPinSacDuPhong.ten +'</li>' +
        '<li> </li>' +
        '<li><del style="font-size: 14px;">'+ acsPinSacDuPhong.giagoc + '</del>'+ acsPinSacDuPhong.tlgiam +'</li>' +
        '<li>'+ acsPinSacDuPhong.gia +'</li>' +
        '<li>' +
          acsPinSacDuPhong.danhgia +
          '<i><sup style="color: black; font-size: 10px;">'+'&nbsp&nbsp' + acsPinSacDuPhong.review +'</sup></i>' +
        '</li>' +
        '</div>' +
    '</div>'
    $(".acsPinSacDuPhong").append(acsPinSacDuPhongx);
  }
  acsPinSacDuPhong.forEach(displayAcsPinSacDuPhong);
});

$(document).ready(function(){
  function displayAcsCapSac(acsCapSac){
    let acsCapSacx = 
    '<div class="product-gallery-three-content-product-item">' +
      '<a href="ChiTietPhuKien.html" onclick="hienthiChiTietPhuKien(' + acsCapSac.ma + ');" class="nav-link"><img src="'+ acsCapSac.img +'" alt="" ></a>' +
      '<div class="product-gallery-three-content-product-item-text">' +
        '<li><img src="../img/icon1.png" alt=""><p>'+ acsCapSac.title +'</p></li> ' +
        '<li>'+ acsCapSac.ten +'</li>' +
        '<li> </li>' +
        '<li><del style="font-size: 14px;">'+ acsCapSac.giagoc + '</del>'+ acsCapSac.tlgiam +'</li>' +
        '<li>'+ acsCapSac.gia +'</li>' +
        '<li>' +
          acsCapSac.danhgia +
          '<i><sup style="color: black; font-size: 10px;">'+'&nbsp&nbsp' + acsCapSac.review +'</sup></i>' +
        '</li>' +
        '</div>' +
    '</div>'
    $(".acsCapSac").append(acsCapSacx);
  }
  acsCapSac.forEach(displayAcsCapSac);
});
/*
=============
Sự kiện xử lý hình ảnh bên phía trái
=============
 */
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const picContainer = document.querySelector(".product__pictures");
const zoom = document.getElementById("zoom");
const pic = document.getElementById("pic");

// Picture List
const picList = [pic1, pic2, pic3, pic4, pic5];

// Active Picture
let picActive = 1;

["mouseover", "touchstart"].forEach(event => {
  if (picContainer) {
    picContainer.addEventListener(event, e => {
      const target = e.target.closest("img");
      if (!target) return;
      const id = target.id.slice(3);
      changeImage(`../img/product${id}.jpeg`, id);
    });
  }
});

// change active image
const changeImage = (imgSrc, n) => {
  // change the main image
  pic.src = imgSrc;
  // change the background-image
  zoom.style.backgroundImage = `url(${imgSrc})`;
  //   remove the border from the previous active side image
  picList[picActive - 1].classList.remove("img-active");
  // add to the active image
  picList[n - 1].classList.add("img-active");
  //   update the active side picture
  picActive = n;
};


// =============
// Product Details Bottom
// =============

const btns = document.querySelectorAll(".detail-btn");
const detail = document.querySelector(".product-detail__bottom");
const contents = document.querySelectorAll(".content");

function taoDoiTuongSanPham(hinhanh, ten, gia, ma){
  var product = new Object();
  product.hinhanh=hinhanh;
  product.ten=ten;
  product.gia=gia;
  product.ma=ma;
}

function chuyenDoiTuongThanhSanPhamHTMLGioHang(product){
    product = tao

}

