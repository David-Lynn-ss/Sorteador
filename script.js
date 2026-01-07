function generateNumber() {
    // 1. Captura os elementos para facilitar a leitura
    const inputMin = document.querySelector('#min');
    const inputMax = document.querySelector('#max');
    const display = document.querySelector('#resultado');

    // 2. Converte para número e garante que não sejam negativos (Math.abs)
    const min = Math.abs(Math.ceil(inputMin.value));
    const max = Math.abs(Math.floor(inputMax.value));

    // 3. Validação: Verifica se os campos estão vazios
    if (inputMin.value === "" || inputMax.value === "") {
        display.innerHTML = "Erro: Preencha todos os campos!";
        return;
    }

    // 4. Regra de Negócio: Min não pode ser maior que Max
    if (min >= max) {
        display.innerHTML = "Erro: O valor mínimo deve ser menor que o máximo!";
        inputMin.style.borderColor = "black"; // Feedback visual
        return;
    }

    // Limpa erro visual se estiver tudo certo
    inputMin.style.borderColor = "";

    // 5. Cálculo do sorteio
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // 6. Saída de dados
    display.innerHTML = `Número sorteado: <strong>${result}</strong>`;
    
    return result;
}

document.querySelector('#min').addEventListener('change', function() {
    if (this.value < 0) this.value = 0;
});

// Seleciona o botão pelo ID e adiciona o evento de clique
const btnSortear = document.querySelector('#sortear');

btnSortear.addEventListener('click', generateNumber);