import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.stub.StreamObserver;
import order.OrderRequest;
import order.OrderResponse;
import order.OrderServiceGrpc;

import java.io.IOException;

public class GrpcServer {
    public static void main(String[] args) throws InterruptedException, IOException {
        Server server = ServerBuilder.forPort(50051).addService(new OrderServiceImpl()).build().start();
        System.out.println("gRPC server started on port 50051");
        server.awaitTermination();
    }
}

class OrderServiceImpl extends OrderServiceGrpc.OrderServiceImplBase {
    @Override
    public void calculateTotalPrice(OrderRequest request, StreamObserver<OrderResponse> responseObserver) {
        String productId = request.getProductId();
        int quantity = request.getQuantity();
        OrderResponse response = OrderResponse.newBuilder()
                .setProductId(productId)
                .setUnitPrice(1)
                .setQuantity(quantity)
                .setTotalPrice(1).build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
