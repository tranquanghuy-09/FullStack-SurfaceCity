package vn.edu.iuh.fit.backend.resources;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import vn.edu.iuh.fit.backend.models.Product;
import vn.edu.iuh.fit.backend.services.ProductService;

import java.util.List;
import java.util.Optional;

@Path("/products")
public class ProductResource {
    @Inject
    ProductService productService;

    @GET
    @Produces("application/json")
    public Response getAllProduct(){
        List<Product> productList = productService.getAll();
        return Response.ok(productList).build();
    }
    @GET
    @Path("/{id}")
    @Produces("application/json")
    public Response findById(@PathParam("id") long id) {
        Optional<Product> product = productService.findById(id);

        if (product.isEmpty())
            return Response.status(Response.Status.NOT_FOUND).build();

        return Response.ok(product.get()).build();
    }
}
