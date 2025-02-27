import order_thrift.OrderService;
import order_thrift.ProductRequest;
import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;
import org.apache.thrift.transport.TTransportException;

import java.io.IOException;
import java.util.Random;

public class ThriftJmeterClient extends AbstractJavaSamplerClient {
    private TTransport transport;
    private static CsvHelper csvHelper;

    @Override
    public void setupTest(JavaSamplerContext context) {
        super.setupTest(context);
        try {
            transport = new TSocket("localhost", 8888);
            if (csvHelper == null) {
                try {
                    csvHelper = new CsvHelper("productId.csv");
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        } catch (TTransportException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public SampleResult runTest(JavaSamplerContext context) {
        SampleResult result = new SampleResult();
        result.sampleStart();

        try {
            transport.open();
            TProtocol protocol = new TBinaryProtocol(transport);
            OrderService.Client client = new OrderService.Client(protocol);

            String productId = csvHelper.getNextId();
            int quantity = new Random().nextInt(100) + 1;

            ProductRequest request = new ProductRequest(productId, quantity);
            double totalPrice = client.CalculateTotalPrice(request);

            result.setResponseData("Total Price: " + totalPrice, "UTF-8");
            result.setSuccessful(true);
        } catch (TException e) {
            result.setResponseMessage("Error: " + e.getMessage());
            result.setSuccessful(false);
        } finally {
            result.sampleEnd();
            if (transport != null) {
                transport.close();
            }
        }
        return result;
    }
}


