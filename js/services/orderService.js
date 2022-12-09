import { shipment} from './shippingService.js'

export function total(order) {
  const taxShipping = shipment(order)
  let totalDiscount = 0
  if (order.discount > 0) {
    totalDiscount = order.basic * (order.discount / 100)
  }

  return order.basic - totalDiscount + taxShipping
}
