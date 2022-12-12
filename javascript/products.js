const products = [
    {
        id: 1,
        name: "Bộ ghế sofa góc da cao cấp – SF10",
        oldPrice: "80.000.000",
        // newPrice: "60.000.000",
        price: 60000000,
        image: "images/sofa_1.jpg",
        quantity: 1,
        // inventario: 50,
        // quantityCart: 0,
    },
    {
        id: 2,
        name: "Ghế sofa văng nhiều màu hiện đại – SF213",
        oldPrice: "50.000.000",
        // newPrice: "46.000.000",
        price: 46000000,
        image: "images/sofa_2.jpg",
        quantity: 1
    },
    {
        id: 3,
        name: "Bộ sofa da thông minh – SFDK87",
        oldPrice: "200.000.000",
        // newPrice: "180.000.000",
        price: 180000000,
        image: "images/sofa_3.jpg",
        quantity: 1
    },
    {
        id: 4,
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "120.000.000",
        // newPrice: "110.000.000",
        price: 110000000,
        image: "images/sofa_4.jpg",
        quantity: 1
    },
    {
        id: 5,
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "20.000.000",
        // newPrice: "16.000.000",
        price: "16.000.000",
        image: "images/giuong_1.jpg",
        quantity: 1
    },
    {
        id: 6,
        name: "Giường ngủ viền vàng tinh tế Pula PB05",
        oldPrice: "10.000.000",
        // newPrice: "8.000.000",
        price: 8000000,
        image: "images/giuong_2.jpg",
        quantity: 1
    },
    {
        id: 7,
        name: "Giường ngủ tròn gỗ thịt Pula PB26",
        oldPrice: "50.000.000",
        // newPrice: "45.000.000",
        price: 45000000,
        image: "images/giuong_3.jpg",
        quantity: 1
    },
    {
        id: 8,
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "120.000.000",
        // newPrice: "110.000.000",
        price: 110000000,
        image: "images/giuong_4.jpg",
        quantity: 1
    },
    {
        id: 9,
        name: "Bàn ăn mặt đá chân mạ PVD",
        oldPrice: "13.000.000",
        // newPrice: "115.000.000",
        price: 11500000,
        image: "images/ban_1.jpg",
        quantity: 1
    },
    {
        id: 10,
        name: "Bàn ăn Concorde",
        oldPrice: "7.000.000",
        // newPrice: "5.000.000",
        price: 5000000,
        image: "images/ban_2.jpg",
        quantity: 1
    },
    {
        id: 11,
        name: "Bàn ăn Pula BA32",
        oldPrice: "17.000.000",
        // newPrice: "15.000.000",
        price: 15000000,
        image: "images/ban_3.jpg",
        quantity: 1
    },
]
// localStorage.setItem("listProducts", JSON.stringify(products));

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const listProducts = JSON.parse(localStorage.getItem("listProducts"));

function onLoadProducts(listProducts) {
    let product = "";
    for (let i = 0; i < listProducts.length; i++) {
        // console.log(listProducts[i]);
        product += `
        <div class="card">
            <img src="${listProducts[i].image}" alt="" width="100%">
            <div class="card-body">
                <h2>${listProducts[i].name}</h2>
                <br>
                <div style="display:flex; justify-content:space-evenly">
                    <p class="old-price">${listProducts[i].oldPrice}</p>
                    <p class="new-price">${numberWithCommas(listProducts[i].price)}</p>
                </div>
            </div>
            <button class="btn-addCard" onclick="addCard(${listProducts[i].id})"> <span>Thêm vào giỏ hàng</span>
            </button>
        </div>
        `
        document.getElementById("furniture").innerHTML = product;
    }
}
onLoadProducts(listProducts);

function searchProduct() {
    let searchProducts = [];
    let inpSearch = document.getElementById("inp-search").value;
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].name.toLowerCase().includes(inpSearch.toLowerCase()) == true) {
            console.log(listProducts[i]);
            searchProducts.push(listProducts[i]);
            console.log(searchProducts);
        }
    }
    onLoadProducts(searchProducts);
}

function addCard(productID) {
    // console.log("click");
    const listProducts = JSON.parse(localStorage.getItem("listProducts"));
    console.log(listProducts);

    //Lấy danh sách sản phẩm khi thêm vào giỏ hàng
    const listProductCart = JSON.parse(localStorage.getItem("listProductCart"));

    if (!listProductCart || listProductCart.length === 0) {
        const productCart = listProducts.find(item => item.id === productID);
        productCart.totalPrice = productCart.price

        swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
            .then(() => {
                window.location.reload();
            });
        localStorage.setItem("listProductCart", JSON.stringify([productCart]));
    }
    else {
        let isNewProduct = true;
        console.log(productID, 'id');
        listProductCart.forEach((item, index) => {
            // console.log(item.id === productID, item.id, productID);
            if (item.id === productID) {
                console.log('cart item', listProductCart[index].quantity);
                listProductCart[index].quantity++;
                listProductCart[index].totalPrice = listProductCart[index].quantity * item.price;

                swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                    .then(() => {
                        window.location.reload();
                    });
                isNewProduct = false;
            }
        });

        if (isNewProduct) {
            const productCart = listProducts.find(item => item.id === productID);
            productCart.totalPrice = productCart.price
            listProductCart.push(productCart);

            swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                .then(() => {
                    window.location.reload();
                });
        }
        localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
    }
}

