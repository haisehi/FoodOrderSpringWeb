document.addEventListener('DOMContentLoaded', function () {
    fetchCartItems();
});

function fetchCartItems() {
    const customerId = localStorage.getItem('id_customer');

    if (!customerId) {
        alert('Bạn cần đăng nhập để xem giỏ hàng.');
        return;
    }

    fetch(`http://localhost:8080/api/v1/auth/cart?customerId=${customerId}`)
        .then(response => response.json())
        .then(cartItems => {
            const cartContent = document.getElementById('cart-content');
            const grandTotalInput = document.getElementById('grandTotal');
            let grandTotal = 0;

            if (cartItems.length === 0) {
                cartContent.innerHTML = '<p>Your cart is empty.</p>';
            } else {
                let tableHtml = '<table border="1"><tr><th>ID</th><th>Name</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr>';
                cartItems.forEach(item => {
                    const total = item.food.price * item.quantity;
                    grandTotal += total;
                    tableHtml += `
                    <tr>
                        <td>${item.idCart}</td>
                        <td>${item.food.nameFood}</td>
                        <td>${item.food.price.toFixed(2)}</td>
                        <td>${item.quantity}</td>
                        <td>${total.toFixed(2)}</td>
                        <td>
                            <button class="food-button_product" type="button" onclick="removeFromCart(${item.idCart})">Remove</button>
                        </td>
                    </tr>
                `;
                });
                tableHtml += `
                <tr>
                    <td colspan="5">Grand Total</td>
                    <td>${grandTotal.toFixed(2)}</td>
                </tr>
            </table>`;
                cartContent.innerHTML = tableHtml;
                grandTotalInput.value = grandTotal.toFixed(2);
            }
        })
        .catch(error => console.error('Error fetching cart items:', error));
}

function removeFromCart(cartItemId) {
    fetch(`http://localhost:8080/api/v1/auth/cart/remove/${cartItemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Item removed from cart!');
                fetchCartItems(); // Refresh the cart content
            } else {
                alert('Failed to remove item from cart.');
            }
        })
        .catch(error => console.error('Error removing from cart:', error));
}

function processPayment() {
    const customerId = localStorage.getItem('id_customer');
    const address = document.getElementById('address').value;
    const grandTotal = document.getElementById('grandTotal').value;

    if (!customerId) {
        alert('Bạn cần đăng nhập để thanh toán.');
        return;
    }

    fetch(`http://localhost:8080/api/v1/auth/cart/checkout/${customerId}?address=${encodeURIComponent(address)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ grandTotal: grandTotal })
    })
        .then(response => {
            if (response.ok) {
                alert('Payment processed successfully');
                document.getElementById('payment-form').reset();
                fetchCartItems(); // Refresh the cart content
            } else {
                alert('Failed to process payment.');
            }
        })
        .catch(error => console.error('Error processing payment:', error));
}