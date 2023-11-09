package vn.edu.iuh.fit.backend.enums2;

public enum EmployeeStatus {
    ACTIVE(1),
    IN_ACTIVE(0),
    TERMINATED(-1);

    private int value;

    EmployeeStatus(int value){
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
