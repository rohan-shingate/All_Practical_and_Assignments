
function orderItem(orderno){
 this.orderno=orderno;
 
 switch(orderno)
 {
case 'o1001':
    return ['I1001'];
break;

case 'o1002':
    return ['I1002'];
break;

case 'o1003':
    return ['I1003'];
break;

case 'o1004':
    return ['I1001','I1002','I1003'];
break;

case 'o1005':
    return ['I1001','I1002'];
break;

case 'o1006':
    return ['I1001','I1003'];
break;

case 'o1007':
    return ['I1002','I1003'];
break;

default:
    console.log("Incorrect order id.");
    break;

 }
}


 function product(itemid){
    switch(itemid)
    {
   case 'I1001':
       return {pid:"p1001",pname:"pepsi",unit_price:30.00,quantity:6,discount:0.05};
   break;
   
   case 'I1002':
       return {pid:"p1002",pname:"maaza",unit_price:30.00,quantity:6,discount:0.05};
   break;
   
   case 'I1003':
       return {pid:"p1003",pname:"fruity",unit_price:30.00,quantity:6,discount:0.05};
   break;
   
   default:
       console.log("Incorrect Item id.");
       break;
   
    }
 }

function totalOrderCost(){
 //   return product().itemid.unit_price*product().itemid.quantity*product().itemid.discount;
}

module.exports.orderItem=orderItem;
module.exports.product=product;
module.exports.totalOrderCost=totalOrderCost;