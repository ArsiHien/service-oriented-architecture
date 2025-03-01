package infrastructure.javarmi;

import application.CalculateTotalPriceUseCase;
import infrastructure.JdbcProductRepository;
import javarmi.OrderService;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class OrderRmiServer {
    public static void main(String[] args) {
        try {
            CalculateTotalPriceUseCase useCase = new CalculateTotalPriceUseCase(new JdbcProductRepository());
            OrderService orderService = new OrderServiceImpl(useCase); // Đối tượng đã tự động export

            // Lấy địa chỉ IP thật của máy server
            String serverIp = InetAddress.getLocalHost().getHostAddress();
            System.out.println("Server IP: " + serverIp);

            // Đảm bảo RMI sử dụng đúng IP
            System.setProperty("java.rmi.server.hostname", serverIp);

            // Tạo registry trên cổng 1099
            Registry registry = LocateRegistry.createRegistry(1099);
            registry.rebind("orderService", orderService); // Không cần export lại

            System.out.println("RMI server started on " + serverIp + " port 1099");
        } catch (RemoteException | UnknownHostException e) {
            e.printStackTrace();
        }
    }
}
