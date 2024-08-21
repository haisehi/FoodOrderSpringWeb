document.addEventListener('DOMContentLoaded', function() {
    fetchCategoriesForFooter();
});

function fetchCategoriesForFooter() {
    fetch('http://localhost:8080/api/v1/auth/categories')
        .then(response => response.json())
        .then(categories => {
            const footerFoodContainer = document.querySelector('.wrapper_footer-item span');
            footerFoodContainer.insertAdjacentHTML('afterend', '<div id="footer-food-links"></div>');
            const footerFoodLinks = document.getElementById('footer-food-links');

            categories.forEach(category => {
                const categoryLink = document.createElement('a');
                categoryLink.classList.add('footer_item');
                categoryLink.href = `menu.html?id=${category.idCategories}`;
                categoryLink.textContent = category.nameCategories;
                footerFoodLinks.appendChild(categoryLink);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
}
