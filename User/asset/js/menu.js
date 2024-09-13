function addToCart(foodId) {
    // Lấy id_customer từ localStorage
    const customerId = localStorage.getItem('id_customer');

    if (!customerId) {
        alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.');
        return;
    }

    // Gửi yêu cầu POST đến API
    fetch(`http://localhost:8080/api/v1/auth/cart/add/${foodId}/${customerId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Đã thêm vào giỏ hàng!');
            } else {
                alert('Thêm vào giỏ hàng thất bại.');
            }
        })
        .catch(error => console.error('Lỗi khi thêm vào giỏ hàng:', error));
}



document.addEventListener('DOMContentLoaded', function () {
    fetchCategories();
});

function fetchCategories() {
    fetch('http://localhost:8080/api/v1/auth/categories')
        .then(response => response.json())
        .then(categories => {
            const categoryNav = document.getElementById('categoryNav');
            const contentHome = document.getElementById('contentHome');

            categories.forEach(category => {
                const categoryLink = document.createElement('p');
                categoryLink.classList.add('menu_nav-item');
                categoryLink.innerHTML = `<a href="#${category.idCategories}">${category.nameCategories}</a>`;
                categoryNav.appendChild(categoryLink);

                const categorySection = document.createElement('section');
                categorySection.classList.add('food');
                categorySection.id = category.idCategories;
                categorySection.innerHTML = `<h2 class="heading">${category.nameCategories}</h2><div class="food-container" id="category-${category.idCategories}"></div>`;
                contentHome.appendChild(categorySection);

                fetchFoodsByCategory(category.idCategories);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}

function fetchFoodsByCategory(categoryId) {
    fetch(`http://localhost:8080/api/v1/auth/foods/category/${categoryId}`)
        .then(response => response.json())
        .then(foods => {
            const foodContainer = document.getElementById(`category-${categoryId}`);
            foods.forEach(food => {
                const foodBox = document.createElement('div');
                foodBox.classList.add('box');
                foodBox.innerHTML = `
                <div class="box-img">
                    <img src="../img/${food.imageFood}" alt="${food.nameFood}">
                </div>
                <div class="box_price_title">
                    <h3 class="title_product">${food.nameFood}</h3>
                    <h3 class="price_product">$${food.price}</h3>
                </div>
                <span class="content_product">${food.nameFood}</span>
                <button class="food-button_product" type="button" onclick="addToCart(${food.idFood})">Add</button>
            `;
                foodContainer.appendChild(foodBox);
            });
        })
        .catch(error => console.error('Error fetching foods:', error));
}