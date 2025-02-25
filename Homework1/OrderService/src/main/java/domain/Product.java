package domain;

public record Product(String id, double price) {
    public double calculateTotalPrice(int quantity) {
        return price * quantity;
    }
}
