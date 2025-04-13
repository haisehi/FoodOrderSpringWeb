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
                            <a href="../../index.html"><img class="logo" alt="logo" src="/User/asset/img/logo1.jpg" /></a>
                            <a href="/User/menu.html">
                                <li class="navbar_item">MENU</li>
                            </a>
                            <a href="/User/bookAParty.html">
                                <li class="navbar_item">BOOK A PARTY</li>
                            </a>
                            <a href="/User/news.html">
                                <li class="navbar_item">SERVICE</li>
                            </a>
                            <a href="/User/findStore.html">
                                <li class="navbar_item">FIND STORE</li>
                            </a>
                        </ul>
                    </nav>
                    <!-- button -->
                    <div class="navbar_headerRight">
                        <!-- Use JavaScript to handle dynamic content -->
                        <a href="/User/infoAcc.html" id="userDetailsButton" >
                            <i class="fa-regular fa-circle-user icon_navbarHeaderRight"></i>
                        </a>
                        <a href="/User/cart.html">
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
                            <a href="../../index.html"><img class="logo" alt="logo" src="/User/asset/img/logo1.jpg" /></a>
                            <a href="/User/menu.html">
                                <li class="navbar_item">MENU</li>
                            </a>
                            <a href="/User/bookAParty.html">
                                <li class="navbar_item">BOOK A PARTY</li>
                            </a>
                            <a href="/User/news.html">
                                <li class="navbar_item">SERVICE</li>
                            </a>
                            <a href="/User/findStore.html">
                                <li class="navbar_item">FIND STORE</li>
                            </a>
                        </ul>
                    </nav>
                    <!-- button -->
                    <div class="navbar_headerRight">
                        <!-- Use JavaScript to handle dynamic content -->
                        <a href="/User/login.html" id="loginButton">
                            <i class="fa-regular fa-circle-user icon_navbarHeaderRight"></i>
                        </a>
                        <a href="/User/chitiettk.html" id="userDetailsButton" style="display: none;">
                            <i class="fa-regular fa-circle-user icon_navbarHeaderRight"></i>
                        </a>
                        <a href="/User/cart.html">
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
