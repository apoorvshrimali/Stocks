var initialPrice =document.querySelector('#initial-price');

var stocksQuantity =document.querySelector('#stocks-quantity');

var currentPrice=document.querySelector('#current-price');

var submitBtn=document.querySelector('#submit-btn');

var outputBox=document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);
function submitHandler(){
    var ip =Number(initialPrice.value);
    var qty =Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calulateProfitAndLoss(ip, qty, curr);
}

function calulateProfitAndLoss(intial, quantity, current){
if(intial > current){
    var loss = (intial-current) * quantity
    var lossPercentage =(loss/intial) * quantity
    showOutput(`Hey The Loss is ${loss} And The Loss Percentage is ${lossPercentage}%`);
} 
else if (current > intial){
    var profit = (current-intial) * quantity
    var profitPercentage =(profit/intial) * quantity
    showOutput(`Hey The Profit is ${profit} And The Profit Percentage is ${profitPercentage}%`);
    

}else {
showOutput("BETTER LUCK NEXT TIME");
}

}
function showOutput(message){
  outputBox.innerHTML = message;
}

