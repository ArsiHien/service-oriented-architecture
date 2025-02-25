package infrastructure.grpc;

import application.CalculateTotalPriceUseCase;
import io.grpc.stub.StreamObserver;
import order_grpc.OrderServiceGrpc;
import order_grpc.ProductRequest;
import order_grpc.ProductResponse;

public class OrderServiceGrpcImpl extends OrderServiceGrpc.OrderServiceImplBase {
    private final CalculateTotalPriceUseCase useCase;

    public OrderServiceGrpcImpl(CalculateTotalPriceUseCase useCase) {
        this.useCase = useCase;
    }

    @Override
    public void calculateTotalPrice(ProductRequest request, StreamObserver<ProductResponse> responseObserver) {
        String productId = request.getProductId();
        int quantity = request.getQuantity();
        ProductResponse response = ProductResponse.newBuilder()
                .setTotalPrice(useCase.calculateTotalPrice(productId, quantity))
                .build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();

        super.calculateTotalPrice(request, responseObserver);
    }
}
