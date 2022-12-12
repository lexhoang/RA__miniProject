//Scroll nav bar(chỉ là css thôi)
const navbar = document.querySelector("header");

function onloadHeader() {
    let header = document.getElementById("nav-head");
    let listProductCart = localStorage.getItem("listProductCart");
    let listProduct = JSON.parse(listProductCart);
    if (listProductCart != null) {
        let renderHeader = `
            <div class="nav-head_left col-">
                <h2><a href="index.html">
                        <img src="../images/logo.png" width="80%" alt="">
                </a></h2>
            </div>

            <div class="nav-head_center">
                <h4><a href="#">Yêu Thích </a></h4>
                <h4><a href="#">Yêu Thích </a></h4>
            </div>

            <div class="nav-head_right">
                <a href="cartPage.html" class="card-link">Giỏ hàng
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="count-cart">${listProduct.length}</span>
                </a>
                <div class="login-link"></div>
            </div>
`
        header.innerHTML += renderHeader;
    } else {
        let renderHeader = `
            <div class="nav-head_left col-">
                <h2><a href="index.html">
                        <img src="../images/logo.png" width="80%" alt="">
                </a></h2>
            </div>

            <div class="nav-head_center">
                <h4><a href="#">Yêu Thích </a></h4>
                <h4><a href="#">Yêu Thích </a></h4>
            </div>

            <div class="nav-head_right">
                <a href="cartPage.html" class="card-link">Giỏ hàng
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>
                <div class="login-link"></div>
            </div>
        `
        header.innerHTML += renderHeader;
    }
}
onloadHeader();

function myScroll() {
    if (window.scrollY > 200) {
        navbar.style.background = "#fff";
    } else {
        navbar.style.background = "rgba(200, 200, 200, 0.253)";
    }
}

function renderLogin() {
    let change = document.querySelector('.login-link');
    let getUser = localStorage.getItem("user");
    if (getUser == null) {
        let renderUser = `
        <a href="loginForm.html" style="color:blue"> Đăng Nhập </a>
            `
        change.innerHTML += renderUser;
    } else {
        let user = JSON.parse(getUser);
        let renderUser = `
            <ul>
                <li><i class="fa-solid fa-user" style="font-size:28px"></i>
                    <ul>
                        <li> <a href="#" style="font-size:12px">${user[user.length - 1].email}</a></li>
                    </ul>
                </li>
            </ul>
            <i class="fa-solid fa-right-from-bracket" onclick="logOut()" style="font-size:28px; margin-left:50px"></i>
            `
        change.innerHTML += renderUser;
    }
}
renderLogin();

function logOut() {
    // console.log("click");
    let listUser = localStorage.getItem("user");
    if (listUser != null) {
        localStorage.removeItem(localStorage.key("user"));
        window.location.reload();
    }
}

