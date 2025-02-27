package infrastructure.javarmi;

import application.CalculateTotalPriceUseCase;
import javarmi.OrderService;
import javarmi.ProductRequestDto;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class OrderServiceImpl extends UnicastRemoteObject implements OrderService {
    private final CalculateTotalPriceUseCase useCase;

    public OrderServiceImpl(CalculateTotalPriceUseCase useCase) throws RemoteException {
        super();
        this.useCase = useCase;
    }

    @Override
    public double calculateTotalPrice(ProductRequestDto productRequest) throws RemoteException {
        return useCase.calculateTotalPrice(productRequest.productId(), productRequest.quantity());
    }
}
