document.addEventListener('DOMContentLoaded', function () {
    // Get customerId from localStorage
    const customerId = localStorage.getItem('id_customer');
    fetch(`http://localhost:8080/api/v1/auth/cart/payments?customerId=${customerId}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('orderTableBody');
            data.forEach(payment => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${payment.idPayment}</td>
                    <td>${payment.nameFood}</td>
                    <td>${payment.price.toFixed(2)}</td>
                    <td>${payment.total.toFixed(2)}</td>
                    <td>${payment.quantity}</td>
                    <td>${payment.address}</td>
                    <td>${payment.time ? new Date(payment.time).toLocaleString() : 'N/A'}</td>
                    <td>${payment.idCart}</td>
                    <td>${payment.statusPay === 0 ? 'Not Processed' : 'Processed'}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching payments:', error));
});