package order;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class OrderServer {
    public static void main(String[] args) {
        try {
            OrderService orderService = new OrderServiceImpl();
            Registry registry = LocateRegistry.createRegistry(1099);
            registry.bind("order.OrderService", orderService);
            System.out.println("RMI server started on port 1099");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
