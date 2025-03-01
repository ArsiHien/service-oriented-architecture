import javarmi.OrderService;
import javarmi.ProductRequestDto;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class Test {
    public static void main(String[] args) {
        try {
            Registry registry = LocateRegistry.getRegistry(Const.SERVER, 1099);
            OrderService stub = (OrderService) registry.lookup("orderService");
            System.out.println("Addition: " + stub.calculateTotalPrice(new ProductRequestDto(
                    "7b8a26bd-f65c-11ef-ad1a-b25d1e5f1802",
                    2
            )));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
