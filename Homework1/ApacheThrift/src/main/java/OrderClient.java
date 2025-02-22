import order.OrderRequest;
import order.OrderResponse;
import order.OrderService;
import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;
import org.apache.thrift.transport.TTransportException;

public class OrderClient {
    public static void main(String[] args) {
        try (TTransport transport = new TSocket("localhost", 8888)) {
            transport.open();
            TProtocol protocol = new TBinaryProtocol(transport);
            OrderService.Client client = new OrderService.Client(protocol);

            OrderRequest request = new OrderRequest("lmao", 3);
            OrderResponse response = client.CalculateTotalPrice(request);

            System.out.println("Total Price: " + response.getTotalPrice());
        } catch (TTransportException e) {
            System.out.println("Could not connect to server: " + e.getMessage());
        } catch (TException e) {
            e.printStackTrace();
        }
    }
}
