package infrastructure.javarmi;

import application.CalculateTotalPriceUseCase;
import application.ProductRequestDto;

import java.rmi.RemoteException;

public class OrderServiceImpl implements OrderService {
    private final CalculateTotalPriceUseCase useCase;

    public OrderServiceImpl(CalculateTotalPriceUseCase useCase) {
        this.useCase = useCase;
    }

    @Override
    public double calculateTotalPrice(ProductRequestDto productRequest) throws RemoteException {
        return useCase.calculateTotalPrice(productRequest.productId(), productRequest.quantity());
    }
}
