namespace java order

service OrderService {
  OrderResponse CalculateTotalPrice(1: OrderRequest request)
}

struct OrderRequest {
  1: string productId
  2: i32 quantity
}

struct OrderResponse {
  1: string productId
  2: double unitPrice
  3: i32 quantity
  4: double totalPrice
}
