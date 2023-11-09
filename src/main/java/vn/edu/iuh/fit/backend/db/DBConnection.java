package vn.edu.iuh.fit.backend.db;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class DBConnection {
    private static DBConnection instance;
    private EntityManagerFactory emf;

    public DBConnection() {
        try{
            emf = Persistence.createEntityManagerFactory("TranQuangHuy-20092731");
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static synchronized DBConnection getInstance() {
        if(instance == null)
            instance = new DBConnection();
        return instance;
    }

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public static void main(String[] args) {
        EntityManager em = DBConnection.getInstance().getEntityManager();
        System.out.println(em);
        System.out.println("Connected complete");
    }
}
