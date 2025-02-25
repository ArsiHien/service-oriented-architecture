package application;

import domain.Product;
import domain.ProductRepository;

import java.util.Optional;

public class CalculateTotalPriceUseCase {
    private final ProductRepository productRepository;

    public CalculateTotalPriceUseCase(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public double calculateTotalPrice(String productId, int quantity) {
        Optional<Product> product = productRepository.findById(productId);
        if (product.isEmpty()) {
            throw new RuntimeException("Product not found");
        }
        return product.get().calculateTotalPrice(quantity);
    }
}
