package server;

import order.OrderService;
import org.apache.thrift.server.TThreadPoolServer;
import org.apache.thrift.transport.TServerSocket;
import org.apache.thrift.transport.TServerTransport;

public class OrderServer {
    public static void startServer(OrderServiceHandler handler) {
        try {
            TServerTransport serverTransport = new TServerSocket(8888);
            OrderService.Processor<OrderServiceHandler> processor = new OrderService.Processor<>(handler);

            TThreadPoolServer.Args args = new TThreadPoolServer.Args(serverTransport);
            args.processor(processor);

            TThreadPoolServer server = new TThreadPoolServer(args);
            System.out.println("Order Server started on port 8888...");
            server.serve();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        startServer(new OrderServiceHandler());
    }
}
