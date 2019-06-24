


// Menu Constructor

function Menu(title, price, value) {
  this.title = title;
  this.price = price;
  this.value = value;
}

// UI Constructor
function UI() {}

UI.prototype.addMealToMenu = function(menu) {
  const table = document.querySelector('#table-list');

  // Create tr element
  const row = document.createElement('tr');
  row.classList.add('cost');
  
  
  // Insert cols
  row.innerHTML = `
    <td>${menu.title}</td>
    <td class="price" value="${menu.value}">${menu.price}</td>
    
    <td>
      <a href="#" class="delete">X</a>
    </td>
  `;
  table.appendChild(row);
}

// Delete meal
UI.prototype.deleteMeal = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

// Create function Add Meal
  let addMeal = function(e) {
  let meal = document.querySelector('#meal');

  if(meal.value !== '') {
    let title = meal.options[meal.selectedIndex].text;
    let price = document.querySelector('#meal').value;
    let value = document.querySelector('#meal').value;

    const menu = new Menu(title, price, value);
    const ui = new UI();

    // Add meal to list
    ui.addMealToMenu(menu);
        
    //e.preventDefault();
    calculateTotalBill(); 
    ui.startChoose();
  } else {
    alert('Choose a dish, please');
  }

  
}

// Event Listeners for Button ADD 
document.querySelector('.add-btn').addEventListener('click', addMeal);
document.addEventListener('keypress', function(e) {
  if (e.keyCode === 13 || e.which === 13) {
    addMeal();
}
});




// Event Listener for delete meal from menu
document.querySelector('#table-list').addEventListener('click', function(e){
  // Instantiate UI
  const ui = new UI();
  // Delete Meal from UI
  ui.deleteMeal(e.target);

  calculateTotalBill();
  e.preventDefault();
});

// Function Calculate total bill
let calculateTotalBill = function() {
  let display = document.querySelector('#display');  
  let tableList = document.querySelectorAll('.price');
  let cost = 0;
  for(let i = 0; i < tableList.length; i++) {
    cost += parseFloat(tableList[i].getAttribute('value'))
  }
  display.innerHTML = cost.toFixed(2) + ' ' + 'eu';
  };

    // Start Choose after submit
    UI.prototype.startChoose = function() {
    document.querySelector('#meal').value = "";
  }