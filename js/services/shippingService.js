export function shipment(order) {
  if(order.basic < 100) {
    const tax = 20.0
  } else if(order.basic < 200) {
    const tax = 12.0
  } else {
    const tax = 0
  }
  return tax
}