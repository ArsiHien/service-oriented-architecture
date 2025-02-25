package infrastructure.javarmi;

import application.CalculateTotalPriceUseCase;
import infrastructure.JdbcProductRepository;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class OrderRmiServer {
    public static void main(String[] args) {
        try {
            CalculateTotalPriceUseCase useCase = new CalculateTotalPriceUseCase(new JdbcProductRepository());
            OrderService orderService = new OrderServiceImpl(useCase);

            Registry registry = LocateRegistry.createRegistry(1099);
            registry.bind("orderService", orderService);
            System.out.println("RMI server started on port 1099");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
