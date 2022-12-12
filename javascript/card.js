var renderCard = document.getElementById("renderCard");
// var listProductCart = localStorage.getItem("listProductCart");
// var listProduct = JSON.parse(listProductCart);

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function onLoadProducts() {
    let listProductCart = localStorage.getItem("listProductCart");
    let listProduct = JSON.parse(listProductCart);
    let product = "";
    for (const index in listProduct) {
        console.log(listProduct[index]);
        product += `
        <div class="card">
            <img src="${listProduct[index].image}" alt="">
            <div class="card-body">
                <h3>${listProduct[index].name}</h3>
                <br>
                <div>
                    <h4 class="quantity">Số lượng:&ensp; ${listProduct[index].quantity}</h4><br>
                    <h4>Giá ưu đãi:&ensp; ${numberWithCommas(listProduct[index].price)}</h4><br>

                    <input type="button" value="-" class="btn-sub" style="width:20px" onclick='handleAddSubCart(${JSON.stringify({ id: listProduct[index].id, type: 'sub' })})' />
                    <input type="text" value="${listProduct[index].quantity}" style="width:30px; text-align:center"/>
                    <input type="button" value="+" class="btn-plus" style="width:20px" onclick='handleAddSubCart(${JSON.stringify({ id: listProduct[index].id, type: 'plus' })})' />


                    <br/><br/><hr><br/>
                    <h3 class="price">Thành tiền:&ensp;${numberWithCommas(listProduct[index].totalPrice)}</h3>
                </div> <br>
                <button class="btn-buyNow" onclick="buyNow()">Đặt hàng</button>
                <button class="btn-delete" data-name="${listProduct[index].name}" onclick="deleteProduct(this)">Xóa sản phẩm</button>
            </div>
        </div>
        `
        renderCard.innerHTML = product
    }
}
onLoadProducts();

function handleAddSubCart(value) {
    console.log(value);

    const listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
    listProductCart.forEach((element, index) => {
        if (value.type === 'sub') {
            if (element.quantity > 0) {
                if (element.id == value.id) {
                    listProductCart[index].quantity--;
                    listProductCart[index].totalPrice = listProductCart[index].quantity * element.price;
                }
            } else {
                listProductCart[index].quantity = 0
            }

        } else if (value.type === 'plus') {
            if (element.quantity >= 0) {
                if (element.id == value.id) {
                    listProductCart[index].quantity++;
                    listProductCart[index].totalPrice = listProductCart[index].quantity * element.price;
                }
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
        window.location.href = "loginForm.html"
    } else {
        window.location.href = "thanhToan.html";
    }
}


// function subProduct(productID) {
//     const listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
//     listProductCart.forEach((element, index) => {
//         if (element.quantity > 0) {
//             if (element.id == productID) {
//                 listProductCart[index].quantity--;
//                 listProductCart[index].totalPrice = listProductCart[index].quantity * element.price;
//             }
//         } else {
//             listProductCart[index].quantity = 0
//         }
//     });
//     localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
//     onLoadProducts();
// }

// function plusProduct(productID) {
//     // const listProducts = JSON.parse(localStorage.getItem("listProducts"));
//     const listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
//     listProductCart.forEach((element, index) => {
//         if (element.quantity >= 0) {
//             if (element.id == productID) {
//                 listProductCart[index].quantity++;
//                 listProductCart[index].totalPrice = listProductCart[index].quantity * element.price;
//             }
//         }
//     });
//     localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
//     onLoadProducts();
// }