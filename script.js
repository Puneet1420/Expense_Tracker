const balance = document.getElementById('balance');

const money_plus = document.getElementById('money-plus');

const money_minus = document.getElementById('money-minus');

const list = document.getElementById('list');

const form = document.getElementById('form');

const text = document.getElementById('text');

const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 1, text: 'salary', amount: -200 },
    { id: 1, text: 'book', amount: -30 },
    { id: 1, text: 'camera', amount: -150 },
];

let Transactions = dummyTransactions;


function addTransaction(Transactions) {
    const sign = Transactions.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.classList.add(Transactions.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `$${Transactions.text} <span>${sign}${Math.abs(Transactions.amount)}</span> <button class="delete-btn" onclick="removeTransaction(${Transactions.id})">x</button>`;
}