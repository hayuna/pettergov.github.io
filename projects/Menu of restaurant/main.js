const fas = document.querySelectorAll('.fa-plus');
const menuItem = document.querySelectorAll('li.list-group-item');
const groupOrder = document.querySelector('#order');
const orderItem = document.getElementsByClassName('order-item');
const display = document.querySelector('#display');


for (let i = 0; i < fas.length; i++) {
    fas[i].addEventListener('click', addToOrder);
    function addToOrder() {
        fas[i].parentElement.classList.add('order-item');
        fas[i].classList.add('fa-minus-circle');
        fas[i].classList.remove('fa-plus');
        let itm = fas[i].parentElement;
        let cln = itm.cloneNode(true);
        fas[i].classList.add('fa-plus');
        groupOrder.appendChild(cln); // Add to order clone
        fas[i].parentElement.classList.remove('order-item');
        displayBill();
    }
};

function displayBill() {
    let cost = 0;
    for (let x = 0; x < orderItem.length; x++) {
        if (orderItem.className = 'order-item')
            cost += parseFloat(orderItem[x].getAttribute('data-cost'));
    }
    display.innerHTML = cost.toFixed(2) + ' ' + 'eu';
}

// Remove items from order
groupOrder.addEventListener('click', removeItem);
function removeItem(e) {
    if (e.target.classList.contains('fa-minus-circle')) {
        e.target.parentElement.remove();
    }
    displayBill();
};

 