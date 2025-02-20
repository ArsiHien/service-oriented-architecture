import io.grpc.stub.StreamObserver;
import order.OrderRequest;
import order.OrderResponse;
import order.OrderServiceGrpc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class GrpcServer {
}

class OrderServiceImpl extends OrderServiceGrpc.OrderServiceImplBase {
    @Override
    public void calculateTotalPrice(OrderRequest request, StreamObserver<OrderResponse> responseObserver) {
        String productId = request.getProductId();
        int quantity = request.getQuantity();
    }
}
