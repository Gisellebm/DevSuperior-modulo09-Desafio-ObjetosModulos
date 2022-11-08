import * as shippingService from './shippingService.js'

export function total(Order) {
  const shipping = shippingService.shipment(Order.basic)
  let totalDiscount = 0
  if (Order.discount > 0) {
    totalDiscount = Order.basic * (Order.discount / 100)
  } else {
    totalDiscount = 0
  }
  return Order.basic - shipping - totalDiscount
}
