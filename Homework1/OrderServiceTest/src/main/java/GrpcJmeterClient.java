import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import order_grpc.OrderServiceGrpc;
import order_grpc.ProductRequest;
import order_grpc.ProductResponse;
import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;

public class GrpcJmeterClient extends AbstractJavaSamplerClient {
    private ManagedChannel channel;
    private OrderServiceGrpc.OrderServiceBlockingStub stub;

    @Override
    public void setupTest(JavaSamplerContext context) {
        super.setupTest(context);
        channel = ManagedChannelBuilder.forAddress("localhost", 50051)
                .usePlaintext()
                .build();
        stub = OrderServiceGrpc.newBlockingStub(channel);
        System.out.println("Connected to server");
    }

    @Override
    public Arguments getDefaultParameters() {
        Arguments arguments = new Arguments();
        arguments.addArgument("productId", "abc");
        arguments.addArgument("quantity", "123");
        return arguments;
    }

    @Override
    public SampleResult runTest(JavaSamplerContext javaSamplerContext) {
        SampleResult result = new SampleResult();
        result.sampleStart();

        try {
            String productId = javaSamplerContext.getParameter("productId");
            int quantity = Integer.parseInt(javaSamplerContext.getParameter("quantity"));

            ProductRequest request = ProductRequest.newBuilder().setProductId(productId).setQuantity(quantity).build();

            ProductResponse response = stub.calculateTotalPrice(request);

            result.setResponseData("Total Price: " + response.getTotalPrice(), "UTF-8");
            result.setResponseCodeOK();
            result.setSuccessful(true);
        } catch (Exception e) {
            result.setSuccessful(false);
            result.setResponseMessage(e.getMessage());
        } finally {
            result.sampleEnd();
        }
        return result;
    }

    @Override
    public void teardownTest(JavaSamplerContext context) {
        channel.shutdown();
    }
}
