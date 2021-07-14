console.log('hello cybersoft')

var arrProduct = [
    {id: 1, name: "Iphone X", price: 1000, img: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg'},
    {id: 1, name: "Iphone X", price: 1000, img: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg'},
    {id: 1, name: "Iphone X", price: 1000, img: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg'}
]

function renderProduct(){
    var content = '';
    for (var i = 0; i < arrProduct.length; i++) {
        let product = arrProduct[i];
        content += `
            <div class = "col-4">
                <div class = "card">
                <img src = "${product.img}" alt = "..."/>
                    <div class = "card-body">
                    <p>${product.price}</p>
                    <button>Mua Hàng</button>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector('#arrProduct').innerHTML = content;
}
renderProduct();