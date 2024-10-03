function atualizarContador() {
    const dataCasamento = new Date('2024-12-07');
    const hoje = new Date();
    const tempoRestante = dataCasamento - hoje;
    const diasRestantes = Math.ceil(tempoRestante / (1000 * 60 * 60 * 24));

    document.getElementById('contador').textContent = `${diasRestantes} dias para o "sim"`;
}

document.addEventListener("DOMContentLoaded", atualizarContador);
