// Função para calcular o total do pedido
function calcularTotal() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var totalValue = 0;

    // Iterar sobre os checkboxes selecionados
    checkboxes.forEach(function(checkbox) {
        totalValue += parseFloat(checkbox.value)
    });

    // Define o elemeto total e seu valor
    var totalElement = document.getElementById('total');
    totalElement.innerText = "Total: R$ " + totalValue.toFixed(2);
}

// Adicionar um evento de clique a todos os checkboxes
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', calcularTotal);
});