package test;

import order.OrderRequest;
import order.OrderResponse;
import order.OrderService;
import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;

import java.rmi.Naming;

public class JavaRMIClientJmeter extends AbstractJavaSamplerClient {
    @Override
    public SampleResult runTest(JavaSamplerContext context) {
        SampleResult result = new SampleResult();
        result.setSampleLabel("Java RMI client");

        try{
            result.sampleStart();
            OrderService orderService = (OrderService) Naming.lookup("//localhost/order.OrderService");
            OrderRequest request = new OrderRequest("abc", 123);

            OrderResponse response = orderService.CalculateTotalPrice(request);

            result.sampleEnd();
            result.setSuccessful(true);
            result.setResponseMessage("Response: " + response);
            result.setResponseCodeOK();
        } catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
}
