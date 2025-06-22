document.getElementById('expenseForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;

  if (!title || !amount || !category) {
    alert("All fields are required!");
    return;
  }

  await fetch('http://localhost:3000/api/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, amount, category })
  });

  document.getElementById('expenseForm').reset();
  loadExpenses();
});

async function loadExpenses() {
  const res = await fetch('http://localhost:3000/api/expenses');
  const expenses = await res.json();
  const list = document.getElementById('expenseList');
  list.innerHTML = '';
  expenses.forEach(exp => {
    const item = document.createElement('li');
    item.innerHTML = `${exp.title} - ₹${exp.amount} (${exp.category}) <button onclick="deleteExpense(${exp.id})">Delete</button>`;
    list.appendChild(item);
  });
}

async function deleteExpense(id) {
  await fetch(`http://localhost:3000/api/expenses/${id}`, {
    method: 'DELETE'
  });
  loadExpenses();
}


loadExpenses();
