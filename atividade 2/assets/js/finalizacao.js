function renderFinalization() {
    let cart = JSON.parse(localStorage.getItem('steamCart')) || [];
    let payment = JSON.parse(localStorage.getItem('steamPayment')) || {};
    let cartDiv = document.getElementById('finalCartItems');
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Nenhum item no carrinho.</p>';
    } else {
        let html = '<ul class="list-group mb-3">';
        cart.forEach(item => {
            html += `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span><img src="${item.image}" alt="${item.name}" style="height:32px;width:32px;object-fit:cover;margin-right:8px;">${item.name}</span>
                <span>${item.price}</span>
            </li>`;
        });
        html += '</ul>';
        cartDiv.innerHTML = html;
    }
    document.getElementById('finalCardBrand').textContent = payment.cardBrand || '-';
    let installments = payment.installments || 1;
    let total = cart.reduce((sum, item) => sum + item.priceValue, 0);
    let parcela = (total / installments).toFixed(2).replace('.', ',');
    let parcelaText = installments > 1 ? `${installments}x de R$ ${parcela} sem juros` : 'À vista';
    document.getElementById('finalInstallments').textContent = parcelaText;
    document.getElementById('finalTotal').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}
document.addEventListener('DOMContentLoaded', renderFinalization);
