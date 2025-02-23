package order;

import java.io.Serializable;

public record OrderResponse(String productId, double unitPrice, int quantity,
                            double totalPrice) implements Serializable {
}
