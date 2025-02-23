package order;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class OrderServiceImpl extends UnicastRemoteObject implements OrderService {
    protected OrderServiceImpl() throws RemoteException {
        super();
    }

    @Override
    public OrderResponse CalculateTotalPrice(OrderRequest request) throws RemoteException {
        return new OrderResponse("lmao", 1.2, 5, 6);
    }
}
