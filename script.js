// Refrences
const balance = document.getElementById('balance');

const money_plus = document.getElementById('money-plus');

const money_minus = document.getElementById('money-minus');

const list = document.getElementById('list');

const form = document.getElementById('form');

const text = document.getElementById('text');

const amount = document.getElementById('amount');

//dark  mode configration
const body = document.querySelector('#body');

const toggle = document.getElementsByClassName('slider round')

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const label = document.querySelector('label');

// main code
const localStorageTransactions = JSON.parse(localStorage.getItem('Transactions'));

let Transactions = localStorage.getItem('Transactions') !== null ? localStorageTransactions : [];
  


  //Add Transaction
  function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === ''){
      alert('please add text and amount')
    }else{
      const transaction = {
        id:generateID(),
        text:text.value,
        amount:+amount.value
      }
  
      Transactions.push(transaction);
  
      addTransactionDOM(transaction);
      updateValues();
      updateLocalStorage();
      text.value='';
      amount.value='';
    }
  }
  
  
  //5.5
  //Generate Random ID
  function generateID(){
    return Math.floor(Math.random()*1000000000);
  }
  
  //2
  
  //Add Trasactions to DOM list
  function addTransactionDOM(transaction) {
    //GET sign
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
  
    //Add Class Based on Value
    item.classList.add(
      transaction.amount < 0 ? "minus" : "plus"
    );
  
    item.innerHTML = `
      ${transaction.text} <span>${sign}${Math.abs(
      transaction.amount
    )}</span>
      <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
      `;
    list.appendChild(item);
  }
  
  //4
  
  //Update the balance income and expence
  function updateValues() {
    const amounts = Transactions.map(
      (transaction) => transaction.amount
    );
    const total = amounts
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const expense =
      (amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0) *
      -1).toFixed(2);
  
      balance.innerText=`$${total}`;
      money_plus.innerText = `$${income}`;
      money_minus.innerText = `$${expense}`;
  }
  
  
  //6 
  
  //Remove Transaction by ID
  function removeTransaction(id){
    Transactions = Transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    Init();
  }
  //last
  //update Local Storage Transaction
  function updateLocalStorage(){
    localStorage.setItem('Transactions',JSON.stringify(Transactions));
  }
  
  //3
  
  //Init App
  function Init() {
    list.innerHTML = "";
    Transactions.forEach(addTransactionDOM);
    updateValues();
  }
  
  Init();
  
  form.addEventListener('submit',addTransaction);



  // dark mode js

  let bgc = "black";


  //dark mode--------------------------------------------------------
  
  toggle[0].addEventListener('click', function(){ 
   if (bgc === "black") {
    body.style.backgroundColor = bgc;
    bgc = "white";
    h1.style.color = "white";
    h2.style.color = "white";
    h3.style.color = "white";
    h4.style.color = "white";
    label.style.color = "white";
  } else {
     body.style.backgroundColor = bgc;
     bgc = "black";
     h1.style.color = "black";
     h2.style.color = "black";
     h3.style.color = "black";
     h4.style.color = "black";
     label.style.color = "black";
   }
  })
  