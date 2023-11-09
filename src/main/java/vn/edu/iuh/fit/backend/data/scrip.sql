use mydblab02;
INSERT INTO `product` ( `description`, `manufacturer_name`, `name`, `status`, `unit`) VALUES
                                                                                          ('Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.', 'Apple', 'iPhone 11', 1, '100'),
                                                                                          ('Galaxy S22 Ultra 5G chiếc smartphone cao cấp nhất trong bộ 3 Galaxy S22 series mà Samsung đã cho ra mắt. ', 'Samsung', 'Samsung Galaxy S22 Ultra 5G', 1, '120'),
                                                                                          ('Realme C35 thuộc phân khúc giá rẻ được nhà Realme cho ra mắt với thiết kế trẻ trung, dung lượng pin lớn cùng camera hỗ trợ nhiều tính năng.', 'Realme', 'Realme C35', 1, '200'),
                                                                                          ('OPPO đã trình làng mẫu Reno7 Z 5G với thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên nghiệp cùng viền sáng kép.', 'OPPO', 'OPPO Reno7 Z 5G', 1, '200'),
                                                                                          ('Xiaomi 11T đầy nổi bật với thiết kế vô cùng trẻ trung, màn hình AMOLED.', 'Xiaomi', 'Xiaomi 11T 5G', 1, '100'),
                                                                                          ('Samsung đã chính thức giới thiệu chiếc điện thoại Galaxy A52s 5G đến người dùng', 'Samsung', 'Samsung Galaxy A52s 5G', 1, '250');

select * from product;

INSERT INTO `product_image` ( `alternative`, `path`, `product_id`) VALUES
                                                                       ('iPhone 11', './img/product/product1/pg1.jpeg', 1),
                                                                       ('Samsung Galaxy S22 Ultra 5G', './img/product/product2/pg2.jpg', 2),
                                                                       ('Realme C35', './img/product/product3/pg3.jpg', 3),
                                                                       ('OPPO Reno7 Z 5G', './img/product/product4/pg4.jpg', 4),
                                                                       ('Xiaomi 11T 5G', './img/product/product5/pg5.jpeg', 5);

select * from product_price;

INSERT INTO `product_price` (`price_date_time`, `note`, `price`, `product_id`) VALUES
                                                                                   ('2023-10-05 15:38:57.000000', NULL, 16290000, 1),
                                                                                   ('2023-10-05 15:39:19.000000', NULL, 30990000, 2),
                                                                                   ('2023-10-05 15:39:38.000000', NULL, 3990000, 3),
                                                                                   ('2023-10-05 15:39:55.000000', NULL, 10490000, 4),
                                                                                   ('2023-10-05 15:40:15.000000', NULL, 10990000, 5);