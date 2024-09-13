// Function to initialize the customer ID field
function initializeCustomerId() {
    const customerId = localStorage.getItem('id_customer');
    if (customerId) {
        document.getElementById('customerId').value = customerId;
    }
}

// Function to handle form submission
async function handleFormSubmission(event) {
    event.preventDefault(); // Ngăn không gửi biểu mẫu theo cách mặc định

    const form = document.getElementById('bookingForm');
    const formData = new FormData(form);

    // Chuyển đổi FormData sang JSON
    const data = {
        date_order: formData.get('date_order'),
        time_order: formData.get('time_order'),
        quantity: formData.get('quantity'),
        address: formData.get('address'),
        content: formData.get('content'),
        customerId: formData.get('customerId')
    };


    try {
        const response = await fetch('http://localhost:8080/api/v1/auth/bookparty/add?customerId=' + encodeURIComponent(data.customerId), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date_order: data.date_order,
                time_order: data.time_order,
                quantity: data.quantity,
                address: data.address,
                content: data.content
            })
        });

        if (response.ok) {
            // Hiển thị thông báo thành công
            document.getElementById('successMessage').innerText = 'Đặt hàng thành công!';
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            form.reset(); // Xóa biểu mẫu nếu cần
        } else {
            // Hiển thị thông báo lỗi
            const errorText = await response.text();
            document.getElementById('errorMessage').innerText = 'Có lỗi xảy ra: ' + errorText;
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }
    } catch (error) {
        // Xử lý lỗi mạng
        document.getElementById('errorMessage').innerText = 'Có lỗi xảy ra: ' + error.message;
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', function () {
    initializeCustomerId();

    // Thêm sự kiện lắng nghe cho form
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', handleFormSubmission);
});

document.addEventListener('DOMContentLoaded', async function () {
    const menuList = document.getElementById('menuList');

    try {
        // Gọi API để lấy dữ liệu thực đơn
        const response = await fetch('http://localhost:8080/api/v1/auth/foods');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const foods = await response.json();

        // Hiển thị tối đa 6 món ăn
        const limitedFoods = foods.slice(0, 10);

        limitedFoods.forEach(food => {
            // Tạo phần tử danh sách cho từng món ăn
            const listItem = document.createElement('li');
            listItem.className = 'menu_list-item';

            listItem.innerHTML = `
                            <a href="#">
                                <img class="menu_list-img" src="../img/${food.imageFood}" alt="${food.nameFood}">
                                <h3>${food.nameFood}</h3>
                                <h3 class="price">${food.price} VND</h3>
                            </a>
                        `;

            menuList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching the menu:', error);
        // Hiển thị thông báo lỗi nếu cần
        menuList.innerHTML = '<p>Không thể tải dữ liệu thực đơn.</p>';
    }
});