import Order from './models/order.js';
import * as orderService from './services/orderService.js';

const data = document.getElementById('orderInput').innerHTML.split('\n');

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

const total = orderService.total(Order);

console.log(`Pedido código ${order.code}`)
console.log(`Valor total: R$ ${total.toFixed(2)}`)