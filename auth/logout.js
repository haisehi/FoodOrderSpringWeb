document.getElementById('logoutButton').addEventListener('click', function() {
    fetch('http://localhost:8080/api/v1/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token') // Hoặc 'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken') tùy thuộc vào cách bạn lưu trữ token
        }
    })
    .then(response => {
        if (response.ok) {
            localStorage.removeItem('access_token'); // Xóa token khỏi localStorage
            localStorage.removeItem('id_customer'); // Xóa token khỏi localStorage
            window.location.href = '../User/home.html'; // Chuyển hướng về trang chính sau khi đăng xuất thành công
        } else {
            console.error('Logout failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});