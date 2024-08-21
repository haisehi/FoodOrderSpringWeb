// Kiểm tra xem người dùng đã đăng nhập hay chưa
document.addEventListener('DOMContentLoaded', function() {
    const accessToken = localStorage.getItem('access_token');
    const headerPlaceholder = document.getElementById('headerPlaceholder');
    
    if (accessToken) {
        // Nếu đã đăng nhập, hiển thị header dành cho người dùng đã đăng nhập
        headerPlaceholder.innerHTML = `
            <header class="wrapper_header">
                <div class="header_section">
                    <!--navbar-->
                    <nav class="navbar_headerLeft">
                        <ul class="navbar_wrp_item">
                            <!-- logo -->
                            <a href="home.html"><img class="logo" alt="logo" src="./asset/img/logo1.jpg" /></a>
                            <a href="menu.html">
                                <li class="navbar_item">MENU</li>
                            </a>
                            <a href="bookAParty.html">
                                <li class="navbar_item">BOOK A PARTY</li>
                            </a>
                            <a href="news.html">
                                <li class="navbar_item">SERVICE</li>
                            </a>
                            <a href="findStore.html">
                                <li class="navbar_item">FIND STORE</li>
                            </a>
                        </ul>
                    </nav>
                    <!-- button -->
                    <div class="navbar_headerRight">
                        <!-- Use JavaScript to handle dynamic content -->
                        <a href="infoAcc.html" id="userDetailsButton" >
                            <i class="fa-regular fa-circle-user icon_navbarHeaderRight"></i>
                        </a>
                        <a href="cart.html">
                            <i class="fa-solid fa-cart-shopping icon_navbarHeaderRight"></i>
                        </a>
                        <button class="icon_header_taskbar">
                            <i class="fa-solid fa-bars icon_navbarHeaderRight"></i>
                        </button>
                    </div>
                </div>
            </header>
        `;
    } else {
        // Nếu chưa đăng nhập, hiển thị header dành cho người dùng chưa đăng nhập
        headerPlaceholder.innerHTML = `
            <header class="wrapper_header">
                <div class="header_section">
                    <!--navbar-->
                    <nav class="navbar_headerLeft">
                        <ul class="navbar_wrp_item">
                            <!-- logo -->
                            <a href="home.html"><img class="logo" alt="logo" src="./asset/img/logo1.jpg" /></a>
                            <a href="menu.html">
                                <li class="navbar_item">MENU</li>
                            </a>
                            <a href="bookAParty.html">
                                <li class="navbar_item">BOOK A PARTY</li>
                            </a>
                            <a href="news.html">
                                <li class="navbar_item">SERVICE</li>
                            </a>
                            <a href="findStore.html">
                                <li class="navbar_item">FIND STORE</li>
                            </a>
                        </ul>
                    </nav>
                    <!-- button -->
                    <div class="navbar_headerRight">
                        <!-- Use JavaScript to handle dynamic content -->
                        <a href="login.html" id="loginButton">
                            <i class="fa-regular fa-circle-user icon_navbarHeaderRight"></i>
                        </a>
                        <a href="chitiettk.html" id="userDetailsButton" style="display: none;">
                            <i class="fa-regular fa-circle-user icon_navbarHeaderRight"></i>
                        </a>
                        <a href="cart.html">
                            <i class="fa-solid fa-cart-shopping icon_navbarHeaderRight"></i>
                        </a>
                        <button class="icon_header_taskbar">
                            <i class="fa-solid fa-bars icon_navbarHeaderRight"></i>
                        </button>
                    </div>
                </div>
            </header>
        `;
    }
});
