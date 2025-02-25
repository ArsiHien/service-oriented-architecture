package infrastructure.thrift;

import application.CalculateTotalPriceUseCase;
import order_thrift.OrderService;
import order_thrift.ProductRequest;

public class OrderServiceHandler implements OrderService.Iface {
    private final CalculateTotalPriceUseCase useCase;

    public OrderServiceHandler(CalculateTotalPriceUseCase useCase) {
        this.useCase = useCase;
    }

    @Override
    public double CalculateTotalPrice(ProductRequest request) {
        return useCase.calculateTotalPrice(request.productId, request.quantity);
    }
}