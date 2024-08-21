document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phonenumber: document.getElementById('phonenumber').value,
        gender: document.getElementById('gender').value,
        date: document.getElementById('date').value
    };

    fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        let message;
        if (data.token) {
            message = 'Đăng ký thất bại: ' + data.message;
        } else {
            message = 'Đăng ký thành công!';
        }
        showAlert(message);
    })
    .catch(error => {
        showAlert('Lỗi: ' + error.message);
    });
});

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.textContent = message;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('close-btn');
    closeButton.onclick = function() {
        document.body.removeChild(alertBox);
    };

    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);
}
