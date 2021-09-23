var intialPrice =document.queryCommandValue('#iniatl-price');

var stocksQuantity =document.querySelector('#stocks-quantity');

var currentPrice=document.querySelector('#current-price');

var submitBtn=document.querySelector('#submit-btn');

var outputBox=document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);
function submitHandler(){
    var ip =Number(intialPrice.value);
    var qty =Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calulateProfitAndLoss(ip, qty, curr);
}

function calulateProfitAndLoss(intial, quantity, current){
if(intial > current){
    var loss = (intial-current) * quantity
    var lossPercentage =(loss/intial) * quantity
    showOutput('Hey The Loss is ${loss} And The Loss Percentage is ${losspercentage}%');
} 
else if (current > intial){
    var profit = (current-intial) * quantity
    var lossPercentage =(profit/intial) * quantity
    console.log('Hey The Profit is ${Profit} And The Profit Percentage is ${losspercentage}%');
    

}else {
showOutput("BETTER LUCK NEXT TIME");
}

}
function showOutput(message){
  outputBox.innerHTML = message;
}

