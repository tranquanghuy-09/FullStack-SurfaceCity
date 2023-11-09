package vn.edu.iuh.fit.backend.configs;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import vn.edu.iuh.fit.backend.db.DBConnection;

@ApplicationPath("/api")
public class ApplicationConfig extends Application {
    public ApplicationConfig(){
        DBConnection.getInstance().getEntityManager();
    }
}
