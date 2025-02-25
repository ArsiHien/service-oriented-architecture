namespace java order_thrift

service OrderService {
  double CalculateTotalPrice(1: ProductRequest request)
}

struct ProductRequest {
  1: string productId
  2: i32 quantity
}
