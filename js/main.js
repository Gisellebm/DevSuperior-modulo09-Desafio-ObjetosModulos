import Order from './models/order.js'
import * as orderService from './services/orderService.js'

const data = document.getElementById('orderInput').innerHTML.split('\n')

const order = new Order(data[0], Number(data[1]), Number(data[2]))

const total = orderService.total(order)

console.log(`Pedido código ${order.code}`)
console.log(`Valor total: R$ ${total.toFixed(2)}`)
