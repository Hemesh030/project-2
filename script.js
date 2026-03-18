function reserveTable()
{

var name = document.getElementById("name").value;
var phone = document.getElementById("phone").value;

if(phone.length != 10)
{
alert("Phone number must be 10 digits");
return false;
}

document.getElementById("msg").innerHTML =
"Table Reserved Successfully for " + name;

return false;

}



function generateBill()
{

var burger = parseInt(document.getElementById("burger").value) || 0;
var pizza = parseInt(document.getElementById("pizza").value) || 0;
var sandwich = parseInt(document.getElementById("sandwich").value) || 0;
var noodles = parseInt(document.getElementById("noodles").value) || 0;

var burgerTotal = burger * 120;
var pizzaTotal = pizza * 250;
var sandwichTotal = sandwich * 100;
var noodlesTotal = noodles * 180;

var subtotal = burgerTotal + pizzaTotal + sandwichTotal + noodlesTotal;

var gst = subtotal * 0.05;

var total = subtotal + gst;

var bill =
"<h2>Your Bill</h2>" +
"Burger: ₹" + burgerTotal + "<br>" +
"Pizza: ₹" + pizzaTotal + "<br>" +
"Sandwich: ₹" + sandwichTotal + "<br>" +
"Noodles: ₹" + noodlesTotal + "<br><br>" +
"Subtotal: ₹" + subtotal + "<br>" +
"GST (5%): ₹" + gst.toFixed(2) + "<br>" +
"<b>Grand Total: ₹" + total.toFixed(2) + "</b>";

document.getElementById("result").innerHTML = bill;

}