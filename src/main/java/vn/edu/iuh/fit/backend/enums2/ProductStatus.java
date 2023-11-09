package vn.edu.iuh.fit.backend.enums2;

public enum ProductStatus {
    ACTIVE(1), //Đang kinh doanh
    IN_ACTIVE(0), // Tạm ngưng
    TERMINATED(-1);  //Không kinh doanh nữa

    private int value;
    ProductStatus(int value){
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
