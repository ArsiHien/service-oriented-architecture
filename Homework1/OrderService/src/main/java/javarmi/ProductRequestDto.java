package javarmi;

import java.io.Serializable;

public record ProductRequestDto(String productId, int quantity) implements Serializable {
}
