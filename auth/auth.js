document.addEventListener('DOMContentLoaded', function() {
    const accessToken = localStorage.getItem('access_token');
    
    if (!accessToken) {
        // Nếu không có access_token, chuyển hướng người dùng đến trang đăng nhập
        window.location.href = '../User/login.html';
    }
});
