document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput=document.getElementById('add-amount').value;
    console.log(addMoneyInput)
    const password=document.getElementById('password').value;
    console.log(password);
    const ammount=document.getElementById('account-balance').innerText;
    console.log(ammount);
    const ammounttotal=parseFloat(addMoneyInput);
   const balanceNumber=parseFloat(ammount);
   const newBalnce=ammounttotal+balanceNumber;
   console.log(newBalnce)
   document.getElementById('account-balance').innerText=newBalnce
})