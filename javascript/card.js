var renderCard = document.getElementById("renderCard");
// var listProductCart = localStorage.getItem("listProductCart");
// var listProduct = JSON.parse(listProductCart);

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function onLoadProducts() {
    let listProductCart = localStorage.getItem("listProductCart");
    let listProduct = JSON.parse(listProductCart);
    for (const index in listProduct) {
        console.log(listProduct[index]);
        let product = `
        <div class="card">
            <img src="${listProduct[index].image}" alt="">
            <div class="card-body">
                <h3>${listProduct[index].name}</h3>
                <br>
                <div>
                    <h4 class="quantity">Số lượng:&ensp; ${listProduct[index].quantity}</h4><br>
                    <h4>Giá ưu đãi:&ensp; ${numberWithCommas(listProduct[index].price)}</h4><br>

                    <button class="btn-plus" style="width:20px" onclick="subProduct(${listProduct[index].id})">-</button>
                    <input type="text" style="width:50px; text-align:center"value="${listProduct[index].quantity}"/>
                    <button class="btn-plus" style="width:20px" onclick="plusProduct(${listProduct[index].id})">+</button>

                    <br/><br/><hr><br/>
                    <h3 class="price">Thành tiền:&ensp;${numberWithCommas(listProduct[index].totalPrice)}</h3>
                </div> <br>
                <button class="btn-buyNow" onclick="buyNow()">Đặt hàng</button>
                <button class="btn-delete" data-name="${listProduct[index].name}" onclick="deleteProduct(this)">Xóa sản phẩm</button>
            </div>
        </div>
        `
        renderCard.innerHTML += product
    }
}
onLoadProducts();


function subProduct(productID) {
    // const listProducts = JSON.parse(localStorage.getItem("listProducts"));
    const listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
    listProductCart.forEach((element, index) => {
        if (element.quantity > 0) {
            if (element.id == productID) {
                listProductCart[index].quantity--;
            }
        }
    });
    localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
    onLoadProducts();
}

function plusProduct(productID) {
    // const listProducts = JSON.parse(localStorage.getItem("listProducts"));
    const listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
    listProductCart.forEach((element, index) => {
        if (element.quantity > 0) {
            if (element.id == productID) {
                listProductCart[index].quantity++;
            }
        }
    });
    localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
    onLoadProducts();
}

function deleteProduct(value) {
    console.log("click");
    var listProductCart = localStorage.getItem("listProductCart");
    if (listProductCart == null) {
        listProductCart = []
        localStorage.setItem("listProductCart", JSON.stringify(listProduct));
    } else {
        var listProduct = JSON.parse(listProductCart);
        for (let index = 0; index < listProduct.length; index++) {
            if (listProduct[index].name === value.dataset.name) {
                listProduct.splice(index, 1);
            }
        }
        localStorage.setItem("listProductCart", JSON.stringify(listProduct));
        console.log(JSON.stringify(listProduct));
        window.location.reload();
    }

}

function buyNow() {
    let listUser = localStorage.getItem("user");
    if (listUser == null) {
        window.location.href = "../pages/loginForm.html"
    } else {
        window.location.href = "../pages/thanhToan.html";
    }
}
