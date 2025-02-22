import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import order.OrderRequest;
import order.OrderResponse;
import order.OrderServiceGrpc;
import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;

public class gRPCClientJmeter extends AbstractJavaSamplerClient {
    private ManagedChannel channel;
    private OrderServiceGrpc.OrderServiceBlockingStub stub;

    @Override
    public void setupTest(JavaSamplerContext context) {
        channel = ManagedChannelBuilder.forAddress("localhost", 50051)
                .usePlaintext()
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
        System.out.println("Sample started");

        try {
            OrderRequest request = OrderRequest.newBuilder().setProductId("abc").setQuantity(1).build();
            OrderResponse response = stub.calculateTotalPrice(request);

            result.setResponseData(response.toString(), "UTF-8");
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
