const data = localStorage.getItem('items');
const items = data ? JSON.parse(data) : [];
const totalDiv = document.querySelector('.totalDiv');

const sameDiv = document.querySelector('.sameDiv');

function renderItems() {
    if (items.length > 0) {
        sameDiv.innerHTML = '';
        let totalPrice = 0;

        for (let i = 0; i < items.length; i++) {
            const quantity = items[i].quantity || 1;
            const total = items[i].quantity ? items[i].quantity * items[i].price : items[i].price;

            totalPrice += total;

            sameDiv.innerHTML += `
            <div class="card p-1 mb-3 shadow-lg" style="width: 16rem; height: 29rem">
            <img width='' height='200px' src=${items[i].image} class="card-img-top" alt="Product image">
            <div class="card-body">
                <h5 class="card-title titleh5">Title: ${items[i].title}</h5>
                <p class="card-text">Category: ${items[i].category}</p>
                <h5 class="card-title">Price: $${items[i].price}</h5>
                <p class="card-text">Quantity: ${quantity}</p>
                <p class="card-text">Total: ${total}</p>
                <a onclick="delete2(${i})" class="btn btn-warning">Delete</a>
                <a onclick="funcPlus(${i})" class="btn btn-primary">+</a>
                <a onclick="funcMinus(${i})" class="btn btn-danger">-</a>
            </div>
        </div>
            
            `;
        }

        totalDiv.textContent =` Total Price: $${totalPrice}`;
    } else {
        sameDiv.innerHTML = 'No products found in the cart right now!';
        totalDiv.textContent = ''; // Clear total price if no items
    }
}

function funcPlus(index) {
    items[index].quantity = (items[index].quantity || 0) + 1;
    renderItems();
    updateLocalStorage();
}

function funcMinus(index) {
    if (items[index].quantity > 0) {
        items[index].quantity -= 1;
        if (items[index].quantity === 0) {
            items.splice(index, 1); // Remove the item if the quantity is zero
        }
        renderItems();
        updateLocalStorage();
    }
}

function delete2(index) {
    items.splice(index, 1);
    renderItems();
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
}

renderItems();