import javarmi.OrderService;
import javarmi.ProductRequestDto;
import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;

import java.io.IOException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.Random;

public class JavaRmiJmeterClient extends AbstractJavaSamplerClient {

    private OrderService orderService;
    private static CsvHelper csvHelper;

    @Override
    public void setupTest(JavaSamplerContext context) {
        try {
            Registry registry = LocateRegistry.getRegistry("localhost", 1099);
            orderService = (OrderService) registry.lookup("orderService");
            System.out.println("Connected to RMI server successfully.");

            if (csvHelper == null) {
                try {
                    csvHelper = new CsvHelper("productId.csv");
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to connect to RMI server: " + e.getMessage(), e);
        }
    }

    @Override
    public SampleResult runTest(JavaSamplerContext context) {
        SampleResult result = new SampleResult();
        result.sampleStart();

        try {
            String productId = csvHelper.getNextId();
            int quantity = new Random().nextInt(100) + 1;

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
        System.out.println("Test execution completed.");
    }
}
