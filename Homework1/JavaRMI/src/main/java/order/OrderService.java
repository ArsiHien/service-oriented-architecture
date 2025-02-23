package order;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface OrderService extends Remote {
    OrderResponse CalculateTotalPrice(OrderRequest request) throws RemoteException;
}
