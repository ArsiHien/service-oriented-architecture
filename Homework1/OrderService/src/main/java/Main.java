import infrastructure.grpc.OrderGrpcServer;
import infrastructure.javarmi.OrderRmiServer;
import infrastructure.thrift.OrderThriftServer;

public class Main {
    public static void main(String[] args) {
        String mode = System.getenv("SERVER_MODE");
        if (mode == null || mode.isEmpty()) {
            System.out.println("Please set SERVER_MODE to grpc, rmi, or thrift");
            return;
        }

        switch (mode) {
            case "grpc":
                OrderGrpcServer.main(args);
                break;
            case "rmi":
                OrderRmiServer.main(args);
                break;
            case "thrift":
                OrderThriftServer.main(args);
                break;
            default:
                System.out.println("Invalid SERVER_MODE. Use 'grpc', 'rmi', or 'thrift'.");
        }
    }
}
