package test;

import order.OrderRequest;
import order.OrderResponse;
import order.OrderService;
import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;

public class ThriftClientJmeter extends AbstractJavaSamplerClient {

    @Override
    public SampleResult runTest(JavaSamplerContext context) {
        SampleResult result = new SampleResult();
        result.sampleStart(); // Start timing

        try (TTransport transport = new TSocket("localhost", 8888)) {
            transport.open();
            OrderService.Client client = new OrderService.Client(new TBinaryProtocol(transport));

            String productId = context.getParameter("productId", "default_id");
            int quantity = context.getIntParameter("quantity", 1);

            OrderResponse response = client.CalculateTotalPrice(new OrderRequest(productId, quantity));

            String responseData = String.format(
                    "{\"productId\": \"%s\", \"unitPrice\": %.2f, \"quantity\": %d, \"totalPrice\": %.2f}",
                    response.getProductId(), response.getUnitPrice(), response.getQuantity(), response.getTotalPrice()
            );

            result.setResponseData(responseData, "UTF-8");
            result.setSuccessful(true);
        } catch (TException e) {
            result.setResponseMessage("Error: " + e.getMessage());
            result.setSuccessful(false);
        }

        result.sampleEnd();
        return result;
    }
}
