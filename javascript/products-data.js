var products = [
    {
        name: "Bộ ghế sofa góc da cao cấp – SF10",
        oldPrice: "80.000.000",
        newPrice: "60.000.000",
        price: 60000000,
        image: "../images/sofa_1.jpg",
        quantity: 1
    },
    {
        name: "Ghế sofa văng nhiều màu hiện đại – SF213",
        oldPrice: "50.000.000",
        newPrice: "46.000.000",
        price: 46000000,
        image: "../images/sofa_2.jpg",
        quantity: 1
    },
    {
        name: "Bộ sofa da thông minh – SFDK87",
        oldPrice: "200.000.000",
        newPrice: "180.000.000",
        price: 180000000,
        image: "../images/sofa_3.jpg",
        quantity: 1
    },
    {
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "120.000.000",
        newPrice: "110.000.000",
        price: 110000000,
        image: "../images/sofa_4.jpg",
        quantity: 1
    },
    {
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "20.000.000",
        newPrice: "16.000.000",
        price: "16.000.000",
        image: "../images/giuong_1.jpg",
        quantity: 1
    },
    {
        name: "Giường ngủ viền vàng tinh tế Pula PB05",
        oldPrice: "10.000.000",
        newPrice: "8.000.000",
        price: 8000000,
        image: "../images/giuong_2.jpg",
        quantity: 1
    },
    {
        name: "Giường ngủ tròn gỗ thịt Pula PB26",
        oldPrice: "50.000.000",
        newPrice: "45.000.000",
        price: 45000000,
        image: "../images/giuong_3.jpg",
        quantity: 1
    },
    {
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "120.000.000",
        newPrice: "110.000.000",
        price: 110000000,
        image: "../images/giuong_4.jpg",
        quantity: 1
    },
    {
        name: "Bàn ăn mặt đá chân mạ PVD",
        oldPrice: "13.000.000",
        newPrice: "115.000.000",
        price: 11500000,
        image: "../images/ban_1.jpg",
        quantity: 1
    },
    {
        name: "Bàn ăn Concorde",
        oldPrice: "7.000.000",
        newPrice: "5.000.000",
        price: 5000000,
        image: "../images/ban_2.jpg",
        quantity: 1
    },
    {
        name: "Bàn ăn Pula BA32",
        oldPrice: "17.000.000",
        newPrice: "15.000.000",
        price: 15000000,
        image: "../images/ban_3.jpg",
        quantity: 1
    },
]


function onLoadProducts() {
    let renderFurniture = document.getElementById("furniture");
    for (let i = 0; i < products.length; i++) {
        // console.log(products[i]);
        let product = `
        <div class="card">
            <img src="${products[i].image}" alt="" width="100%">
            <div class="card-body">
                <h2>${products[i].name}</h2>
                <br>
                <div style="display:flex; justify-content:space-evenly">
                    <p class="old-price">${products[i].oldPrice}</p>
                    <p class="new-price">${products[i].newPrice}</p>
                </div>
            </div>
            <button class="btn-addCard" data-image="${products[i].image}" data-name="${products[i].name}"
                data-newprice="${products[i].newPrice}" data-price="${products[i].price}" data-quantity="${products[i].quantity}"
                onclick="addCard(this)"> <span>Thêm vào giỏ hàng</span>
            </button>
        </div>
        `
        renderFurniture.innerHTML += product
    }
}
onLoadProducts();


function addCard(product) {
    // console.log("click");
    // console.log(product.dataset.image);
    // console.log(product.dataset.name);
    // console.log(product.dataset.price);

    let objectProduct = {
        image: product.dataset.image,
        name: product.dataset.name,
        newPrice: product.dataset.newprice,
        price: product.dataset.price,
        quantity: product.dataset.quantity,
    }
    let listProductCart = localStorage.getItem("listProductCart");

    if (listProductCart == null) {
        listProductCart = [];
        listProductCart.push(objectProduct);
        localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
        swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
            .then(() => {
                window.location.reload();
            })
    } else if (JSON.parse(listProductCart).length == '') {
        listProductCart = JSON.parse(listProductCart);
        listProductCart.push(objectProduct);
        localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
        console.log("đã có sản phẩm này rồi");
        swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
            .then(() => {
                window.location.reload();
            })
    } else {
        listProductCart = JSON.parse(listProductCart);
        let check = false;
        for (let i = 0; i < listProductCart.length; i++) {
            if (listProductCart[i].name == objectProduct.name) {
                check = false;
                let count = Number(listProductCart[i].quantity);
                let price = Number(listProductCart[i].price);
                listProductCart[i].quantity = ++count;
                listProductCart[i].price = price + price;
                localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
                swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                    .then(() => {
                        window.location.reload();
                    })
                break;
            } else {
                check = true;
            }
        }
        if (check == true) {
            listProductCart.push(objectProduct);
            localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
            swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                .then(() => {
                    window.location.reload();
                })
        } else {
            console.log("đã có sản phẩm này rồi");
        }
    }
}

