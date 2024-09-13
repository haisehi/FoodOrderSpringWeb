document.addEventListener('DOMContentLoaded', function() {
    // Lấy ID người dùng từ localStorage
    const userId = localStorage.getItem('id_customer');
    
    if (!userId) {
        alert('User ID not found');
        return;
    }

    // Fetch dữ liệu người dùng
    fetch(`http://localhost:8080/api/v1/auth/customers/${userId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('userFirstName').textContent = data.firstname;
            document.getElementById('firstname').value = data.firstname;
            document.getElementById('lastname').value = data.lastname;
            document.getElementById('phonenumber').value = data.phonenumber;
            document.getElementById('email').value = data.email;
            document.getElementById('gender').value = data.gender;
            document.getElementById('date').value = data.date;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });

    // Cập nhật dữ liệu người dùng
    document.getElementById('updateForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const updatedCustomer = {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            phonenumber: document.getElementById('phonenumber').value,
            email: document.getElementById('email').value,
            gender: document.getElementById('gender').value,
            date: document.getElementById('date').value
        };

        fetch(`http://localhost:8080/api/v1/auth/customers/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCustomer)
        })
        .then(response => response.json())
        .then(data => {
            alert('Customer updated successfully!');
        })
        .catch(error => {
            console.error('Error updating customer data:', error);
        });
    });
});