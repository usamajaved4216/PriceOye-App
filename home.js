// rough

array = []

// rough



const data = localStorage.getItem('items');
const items = JSON.parse(data);

console.log(items);

const sameDiv = document.querySelector('.sameDiv');
for (let i = 0; i < items.length; i++){
    console.log(items[i]);
    sameDiv.innerHTML += `
    <div class="card p-1 mb-3 shadow-lg" style="width: 16rem; height: 29rem">
        <img width ='' height ='200px' src= ${items[i].image} class="card-img-top" alt="Product image">
    <div class="card-body">
    <h5 class="card-title titleh5">Title: ${items[i].title}</h5>
    <p class="card-text">Category: ${items[i].category}</p>
    <h5 class="card-title">Price: ${items[i].price}</h5>
    <a onclick="delete2(${i})" class="btn btn-warning">Delete</a>
    </div>
    </div>
    `
}

function delete2(index){
    array.push(items[index])   
    console.log(array);
}