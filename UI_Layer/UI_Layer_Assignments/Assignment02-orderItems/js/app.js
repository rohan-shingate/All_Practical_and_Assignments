
const orderItem=require('./order');

var totalCost=0,t=0;
var orderId ='o1004';

var itemid =orderItem.orderItem(orderId);
console.log("Your order having pId's :"+itemid);

for(i in itemid){
    console.log("ItemID: "+itemid[i]);

var up=orderItem.product(itemid[i]).unit_price;
var q=orderItem.product(itemid[i]).quantity;
var d=orderItem.product(itemid[i]).discount;

t=totalCost;

totalCost =totalCost + (up*q)-(up*q*d);
console.log(orderItem.product(itemid[i]));
console.log("TotalCost for pId: "+orderItem.product(itemid[i]).pid+" is ="+(totalCost-t));
}
console.log("Total cost To be Paid for the Order: "+orderId+" is ="+totalCost);

// console.log(orderItem.product(itemid));

// // var pdetails = orderItem.product(itemid).price;
// // console.log(pdetails);


// var up=orderItem.product(itemid).unit_price;
// console.log(up);
// var q=orderItem.product(itemid).quantity;
// console.log(q);
// var d=orderItem.product(itemid).discount;
// console.log(d);

// totalCost =totalCost + (up*q)-(up*q*d);

// console.log("totalCost is :"+totalCost);

// var totalOrderCost =orderItem.totalOrderCost();
// console.log("Total :"+totalOrderCost);