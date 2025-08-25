// Garante que o submit do formulário chama finalizarCompra
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('paymentForm');
    if (form) {
        form.addEventListener('submit', finalizarCompra);
    }
});
function renderCart() {
    let cart = JSON.parse(localStorage.getItem('steamCart')) || [];
    let cartItemsDiv = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Nenhum item no carrinho.</p>';
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.priceValue, 0);
    let html = '<ul class="list-group mb-3">';
    cart.forEach(item => {
        html += `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span><img src="${item.image}" alt="${item.name}" style="height:32px;width:32px;object-fit:cover;margin-right:8px;">${item.name}</span>
            <span>${item.price}</span>
        </li>`;
    });
    html += '</ul>';
    html += `<div class="text-right"><strong>Total: R$ ${total.toFixed(2).replace('.', ',')}</strong></div>`;
    cartItemsDiv.innerHTML = html;
}
document.addEventListener('DOMContentLoaded', renderCart);

function finalizarCompra(e) {
    e.preventDefault();
    const cardBrand = document.getElementById('cardBrand').value;
    const installments = parseInt(document.getElementById('installments').value);
    localStorage.setItem('steamPayment', JSON.stringify({ cardBrand, installments }));
    window.location.href = 'finalizacao.html';
}
