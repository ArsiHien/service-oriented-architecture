package order;

import java.io.Serializable;

public record OrderRequest(String productId, int quantity) implements Serializable {
}
