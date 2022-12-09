function shipment(order) {
  if (order.basic < 100) {
    return 20;
  } else if (order.basic < 200) {
    return 12;
  } else {
    return 0;
  }
}
export { shipment };