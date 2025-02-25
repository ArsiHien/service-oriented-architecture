import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class JavaRmiJmeterClient extends AbstractJavaSamplerClient {

    private OrderService orderService;

    @Override
    public void setupTest(JavaSamplerContext context) {
        super.setupTest(context);
        try {
            Registry registry = LocateRegistry.getRegistry("localhost", 1099);
            orderService = (OrderService) registry.lookup("orderService");
        } catch (Exception e) {
            throw new RuntimeException("Failed to connect to RMI server", e);
        }
    }

    @Override
    public SampleResult runTest(JavaSamplerContext context) {
        SampleResult result = new SampleResult();
        result.sampleStart();

        try {
            String productId = context.getParameter("productId");
            int quantity = Integer.parseInt(context.getParameter("quantity"));

            ProductRequestDto request = new ProductRequestDto(productId, quantity);

            double totalPrice = orderService.calculateTotalPrice(request);

            result.setResponseData("Total Price: " + totalPrice, "UTF-8");
            result.setSuccessful(true);
        } catch (Exception e) {
            result.setSuccessful(false);
            result.setResponseMessage("Error: " + e.getMessage());
            result.setResponseData(e.toString(), "UTF-8");
        } finally {
            result.sampleEnd();
        }

        return result;
    }

    @Override
    public void teardownTest(JavaSamplerContext context) {
        super.teardownTest(context);
    }
}