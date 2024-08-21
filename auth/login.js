async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
        // Lưu token và id_customer vào localStorage
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('id_customer', data.id_customer); // Lưu id_customer

        // Chuyển hướng người dùng dựa trên vai trò
        if (data.role === 'USER') {
            window.location.href = '../User/infoAcc.html'; // URL trang người dùng
        } else if (data.role === 'ADMIN') {
            window.location.href = '../Admin/Add-Category-food.html'; // URL trang quản trị
        }
    } else {
        // Xử lý lỗi đăng nhập
        alert('Đăng nhập không thành công');
    }
}
