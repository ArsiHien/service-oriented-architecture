namespace java order

service order.OrderService {
  order.OrderResponse CalculateTotalPrice(1: order.OrderRequest request)
}

struct order.OrderRequest {
  1: string productId
  2: i32 quantity
}

struct order.OrderResponse {
  1: string productId
  2: double unitPrice
  3: i32 quantity
  4: double totalPrice
}
