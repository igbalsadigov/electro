let mostSalesBox = document.querySelector(".mostSalesBox")
function data() {
    axios.get('https://dummyjson.com/products')
        .then(res => {
            db = res.data.products
            db.forEach(item => {
                let box = document.createElement('div')
                box.className = 'productCard'
                box.innerHTML = `
            <img src=${item.thumbnail} alt="">
            <div>
             <h3>${item.description}</h3>
             <p>${item.title}</p>
             <button class=cartBtn><i class="fa-solid fa-cart-shopping"></i> ADD</button>
            </div>
            `
            mostSalesBox.appendChild(box)
            });
        })

}

data()