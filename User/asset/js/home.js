// Hàm để lấy dữ liệu từ API và hiển thị trên trang web
function fetchPosters() {
    fetch('http://localhost:8080/api/v1/auth/posters')
        .then(response => response.json())
        .then(data => {
            const swiperWrapper = document.querySelector('.swiper-wrapper');
            swiperWrapper.innerHTML = ''; // Xóa nội dung cũ

            data.forEach(poster => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');

                slide.innerHTML = `
                <img src="../img/${poster.image}" alt="${poster.nameImage}">
            `;

                swiperWrapper.appendChild(slide);
            });

            // Khởi tạo lại Swiper sau khi thêm các slide mới
            new Swiper(".mySwiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        })
        .catch(error => console.error('Error fetching posters:', error));
}

function fetchCategories() {
    fetch('http://localhost:8080/api/v1/auth/categories')
        .then(response => response.json())
        .then(data => {
            const categoryContainer = document.querySelector('.category-container');
            categoryContainer.innerHTML = ''; // Xóa nội dung cũ

            data.forEach(category => {
                const categoryBox = document.createElement('a');
                categoryBox.href = `menu.html?id=${category.idCategories}`; // Thay đổi URL để truyền ID danh mục
                categoryBox.innerHTML = `
        <div class="box">
            <div class="box-img">
                <img src="../img/${category.imageCategories}" alt="${category.nameCategories}">
            </div>
            <div class="box_price_title">
                <h3 class="title_product">${category.nameCategories}</h3>
            </div>
        </div>
    `;

                categoryContainer.appendChild(categoryBox);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}

function fetchFoods() {
    fetch('http://localhost:8080/api/v1/auth/foods')
        .then(response => response.json())
        .then(data => {
            const foodContainer = document.querySelector('.food-container');
            foodContainer.innerHTML = ''; // Xóa nội dung cũ

            // Chỉ lấy tối đa 4 dữ liệu đầu tiên
            const limitedData = data.slice(0, 4);

            limitedData.forEach(food => {
                const foodBox = document.createElement('div');
                foodBox.classList.add('box');

                foodBox.innerHTML = `
        <div class="box-img">
            <img src="../img/${food.imageFood}" alt="${food.nameFood}">
        </div>
        <div class="box_price_title">
            <h3 class="title_product">${food.nameFood}</h3>
            <p class="price">${food.price} VND</p>
        </div>
    `;

                foodContainer.appendChild(foodBox);
            });
        })
        .catch(error => console.error('Error fetching foods:', error));
}

// Gọi các hàm fetch khi trang được tải
window.onload = function () {
    fetchPosters();
    fetchCategories();
    fetchFoods();
};