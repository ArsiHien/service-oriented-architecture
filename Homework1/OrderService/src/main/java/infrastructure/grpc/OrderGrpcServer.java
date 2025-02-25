package infrastructure.grpc;

import application.CalculateTotalPriceUseCase;
import domain.ProductRepository;
import infrastructure.JdbcProductRepository;
import io.grpc.Server;
import io.grpc.ServerBuilder;

public class OrderGrpcServer {
    public static void main(String[] args) {
        try {
            ProductRepository productRepository = new JdbcProductRepository();
            CalculateTotalPriceUseCase useCase = new CalculateTotalPriceUseCase(productRepository);

            Server server = ServerBuilder.forPort(50051)
                    .addService(new OrderServiceGrpcImpl(useCase))
                    .build()
                    .start();
            System.out.println("gRPC Service started on port 50051");
            server.awaitTermination();
        } catch (Exception e) {
            System.err.println("gRPC failed: " + e.getMessage());
        }
    }
}
