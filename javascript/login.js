function onloadForm() {
    let contentForm = document.getElementById("content-form");
    let renderForm = `
        <div class="option-form">
            <a href="registerForm.html">SIGN UP</a>
            <a href="loginForm.html" style="background-color:#1cca8a">LOGIN</a>
        </div>
        <br>
        <h2>FORM LOGIN</h2>
        <hr>
        <div class="form-control">
            <label for="email"><b>Email</b></label>
            <input type="text" id="inp-email" placeholder="Enter Email" name="email" required>
        </div>

        <div class="form-control">
            <label for="password"><b>Password</b></label>
            <input type="password" id="inp-password" placeholder="Enter Password" name="password" required>
            <i class="fa-solid fa-eye-slash" id="btn-password"></i>
        </div>
        <div>
            <p id="errorCheck"></p><br><br>
            <button id="btn-submit">LOGIN</button>
        </div>
    `
    contentForm.innerHTML += renderForm;
}

onloadForm();


const inpEmail = document.getElementById("inp-email");
const inpPassword = document.getElementById("inp-password");
const btnPassword = document.getElementById("btn-password");
const btnSubmit = document.getElementById("btn-submit");
const errorCheck = document.getElementById("errorCheck");

var listUser = [];
//NÚT SUBMIT
let signUp = document.getElementById("btn-submit");
signUp.addEventListener("click", function () {
    if (checkForm()) {
        sessionStorage.setItem("user", JSON.stringify(listUser));
        window.location.href = "index.html";
    } else {
        errorCheck.innerHTML = "Email hoặc mật khẩu không đúng";
        errorCheck.style.color = "red";
        console.error("Email hoặc mật khẩu không đúng");
    }
})


////////////        CHECK FORM        //////////////
function checkForm() {
    if (checkLocalStorage() == true) {
        console.log("Tài khoản hợp lệ");
        return true;
    } else {
        console.log("Tài khoản không hợp lệ");
        return false;
    }
}

//       KIỂM TRA XEM TÀI KHOẢN ĐÃ ĐƯƠC ĐĂNG KÝ CHƯA
function checkLocalStorage() {
    let getUser = localStorage.getItem("user");
    let listUser = JSON.parse(getUser)
    for (const index in listUser) {
        console.log(listUser[index]);
        if (listUser[index].email == inpEmail.value && listUser[index].password == inpPassword.value) {
            return true;
        } else {
            return false;
        }
    }
}

//Hàm Nút Để Nhìn Mật Khẩu
btnPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpPassword.setAttribute('type',
        inpPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})