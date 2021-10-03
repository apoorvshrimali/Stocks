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
    diff = intial - current;
    percent = (diff / intial) * 100;
    showOutput(`Hey The Loss is ${diff * quantity} And The Loss Percentage is ${percent}%`);
} 
else if (current > intial){
    diff = current - intial ;
    percent = (diff / intial) * 100;
    showOutput(`Hey The Profit is ${diff * quantity} And The Profit Percentage is ${percent}%`);
    
}else {
showOutput("BETTER LUCK NEXT TIME");
}
}


function showOutput(message){
  outputBox.innerHTML = message;
}

