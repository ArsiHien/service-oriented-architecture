package server;

import order.OrderRequest;
import order.OrderResponse;
import order.OrderService;
import org.apache.thrift.TException;

public class OrderServiceHandler implements OrderService.Iface {

    @Override
    public OrderResponse CalculateTotalPrice(OrderRequest request) throws TException {
        return new OrderResponse("abc", 5, 5, 567);
    }
}
