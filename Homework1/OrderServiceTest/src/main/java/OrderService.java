import java.rmi.Remote;
import java.rmi.RemoteException;

public interface OrderService extends Remote {
    double calculateTotalPrice(ProductRequestDto productRequest) throws RemoteException;
}
