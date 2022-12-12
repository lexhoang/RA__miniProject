function renderFooter() {
    let data = "";
    data += `
    <div class="footer-first">
                <div>
                    <h2>University</h2>
                </div>

                <div>
                    <pre>Lorem ipsum dolor sit amet, consectetur adi
elit, sed do eiusmod temporincididunt ut lab
et dolore magna aliqua</pre>
                </div>

                <div class="footer-icons">
                    <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.google.com/"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>

            <div class="footer-second">
                <div>
                    <h3>QUICK LINKS</h3>
                </div>

                <div>
                    <h4>Our Top Courses</h4>
                </div>

                <div>
                    <h4>Upcoming Events</h4>
                </div>

                <div>
                    <h4>Latest News</h4>
                </div>

                <div>
                    <h4>#0 (no title)</h4>
                </div>

                <div>
                    <h4>#0 (no title)</h4>
                </div>
            </div>

            <div class="footer-third">
                <div>
                    <h3>PAGE</h3>
                </div>

                <div>
                    <p><a href="index.html">Home</a></p>
                </div>

                <div>
                    <p><a href="cartPage.html">Cart</a></p>
                </div>

                <div>
                    <p><a href="loginForm.html">Login</a></p>
                </div>

                <div>
                    <p><a href="registerForm.html">Register</a></p>
                </div>
            </div>

            <div class="footer-4th">
                <div>
                    <h3>CONTACT US</h3>
                </div>

                <div>
                    <input type="text" placeholder="Email" style="width: 260px; height: 32px; padding:10px">
                </div>

                <div>
                    <textarea cols="28" rows="4" placeholder="Message" style="padding:20px"></textarea>
                </div>

                <div>
                    <button style="padding:4px 12px">Send</button>
                </div>
            </div>
        </div>
    `
    document.getElementById("footer").innerHTML = data
}
renderFooter();