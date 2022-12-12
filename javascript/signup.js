function onloadForm() {
    let contentForm = document.getElementById("content-form");
    let renderForm = `
    <div class="option-form">
        <a href="registerForm.html" style="background-color:#1cca8a">SIGN UP</a>
        <a href="loginForm.html">LOGIN</a>
    </div>
    <br>
    <h2>FORM REGISTER</h2>
    <hr>
    <div class="form-control">
        <label for="email"><b>Email</b></label>
        <input type="text" id="inp-email" placeholder="Enter Email" name="email" onchange="checkEmail()"
            required> <br><br>
        <p id="noteEmail"></p>
    </div>

    <div class="form-control">
        <label for="password"><b>Password</b></label>
        <input type="password" id="inp-password" placeholder="Enter Password" name="password" required
            onchange="checkPassword()">
        <i class="fa-solid fa-eye-slash" id="btn-password"></i>
        <p id="notePassword"></p>
    </div>

    <div class="form-control">
        <label for="confirmPassword"><b>Repeat Password</b></label>
        <input type="password" id="inp-confirmPassword" placeholder="Confirm Password" name="confirmPassword"
            onchange="checkConfirmPassword()" required>
        <i class="fa-solid fa-eye-slash" id="btn-confirmPassword"></i>
        <p id="noteConfirmPassword"></p>
    </div>
    <button id="btn-submit">Register</button>
    `
    contentForm.innerHTML += renderForm;
}
onloadForm();


const inpEmail = document.getElementById("inp-email");
const inpPassword = document.getElementById("inp-password");
const btnPassword = document.getElementById("btn-password");
const inpConfirmPassword = document.getElementById("inp-confirmPassword");
const btnConfirmPassword = document.getElementById("btn-confirmPassword");
const btnSubmit = document.getElementById("btn-submit");
const noteEmail = document.getElementById("noteEmail");
const notePassword = document.getElementById("notePassword");
const noteConfirmPassword = document.getElementById("noteConfirmPassword");

// var getUser = localStorage.getItem("user");
// if (getUser == null) {
//     var listUser = [];
// } else {
//     listUser = JSON.parse(getUser);
// }
//NÚT SUBMIT
let signUp = document.getElementById("btn-submit");
signUp.addEventListener("click", function () {
    if (checkForm()) {
        let objectUser = {
            email: inpEmail.value,
            password: inpPassword.value,
        }
        let check = false;
        let listUser = localStorage.getItem("user");

        if (listUser == null) {
            listUser = [];
            listUser.push(objectUser);
            console.log(listUser);
            console.log(JSON.stringify(listUser));
            localStorage.setItem("user", JSON.stringify(listUser));
            swal("Tạo tài khoản thành công", "", "success")
                .then(() => {
                    window.location.href = "index.html"
                })
        } else {
            listUser = JSON.parse(listUser);
            for (let i = 0; i < listUser.length; i++) {
                if (listUser[i].email == inpEmail.value) {
                    check = false;
                    break;
                } else {
                    check = true;
                }
            } if (check == true) {
                listUser.push(objectUser);
                localStorage.setItem("user", JSON.stringify(listUser));
                swal("Tạo tài khoản thành công", "", "success")
                    .then(() => {
                        window.location.href = "index.html"
                    })
            } else {
                console.log("Trùng email");
                swal("Tạo tài khoản đã tồn tại", "", "error");
            }
        }
    }

})


////////////        CHECK FORM        //////////////
function checkForm() {
    if (checkEmail() == true && checkPassword() == true && checkConfirmPassword() == true) {
        return true;
    } else {
        return false;
    }
}
//       KIỂM TRA EMAIL
function checkEmail() {
    const FormatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!(FormatEmail.test(String(inpEmail.value).toLowerCase()))) {
        noteEmail.innerHTML = "Email không định dạng";
        noteEmail.style.color = "red";
        console.log("Email không định dạng");
        return false;
    } else {
        noteEmail.innerHTML = "Địa chỉ email hợp lệ";
        noteEmail.style.color = "rgb(0, 255, 0)";
    }
    return true
}
//       KIỂM TRA PASSWORD
function checkPassword() {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!(inpPassword.value.match(decimal))) {
        console.log("Email không định dạng");
        notePassword.innerHTML = "Password không định dạng";
        notePassword.style.color = "red"
        return false;
    } else {
        notePassword.innerHTML = "Password hợp lệ";
        notePassword.style.color = "rgb(0, 255, 0)"
    }
    return true
}
//       KIỂM TRA CONFIRM PASSWORD
function checkConfirmPassword() {
    if (inpConfirmPassword.value !== inpPassword.value) {
        console.log("Confirm Password không hợp lê");
        noteConfirmPassword.innerHTML = "Confirm Password không hợp lê";
        noteConfirmPassword.style.color = "red"
        return false;
    } else {
        noteConfirmPassword.innerHTML = "Confirm Password hợp lệ";
        noteConfirmPassword.style.color = "rgb(0, 255, 0)"
    }
    return true
}



//Hàm Nút Để Nhìn Mật Khẩu
btnPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpPassword.setAttribute('type',
        inpPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})

btnConfirmPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpConfirmPassword.setAttribute('type',
        inpConfirmPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})