// const arr = [];
const sameDiv = document.querySelector('.sameDiv');
const checkOut = document.querySelector('.checkout');

axios.get('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
    data = res.data;
    for (let i = 0; i < res.data.length; i++){
        sameDiv.innerHTML += `
        <div class="card p-1 mb-3 shadow-lg" style="width: 16rem; height: 29rem">
            <img width ='' height ='200px' src= ${res.data[i].image} class="card-img-top" alt="Product image">
        <div class="card-body">
        <h5 class="card-title titleh5">Title: ${res.data[i].title}</h5>
        <p class="card-text">Category: ${res.data[i].category}</p>
        <h5 class="card-title">Price: $${res.data[i].price}</h5>
        <a onclick="addToCart2(${i})" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        `
    }
})
.catch((err)=>{
    console.log(err);
})

const dataa = JSON.parse (localStorage.getItem("items"))

let arr ;
if(Array.isArray(dataa)){
    arr =[...dataa]
}
else {
    arr = []
}
let data;

function addToCart2(index){
    console.log(data[index]);
    arr.push(data[index])
    console.log(arr);
    Swal.fire({
        title: "Good job!",
        text: "Product added to cart successfully!",
        icon: "success"
      });
}
 
checkOut.addEventListener('click' , ()=>{
    localStorage.setItem('items' , JSON.stringify(arr));
    window.location = 'home.html';
    // localStorage.removeItem('items');
})