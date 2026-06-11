/* ==========================================================================
   1. MAPEAMENTO DE ELEMENTOS DO DOM
   ========================================================================== */
const simulatorForm = document.querySelector('#simulator-form');
const consumptionInput = document.querySelector('#monthly-consumption');
const sourceSelect = document.querySelector('#energy-source');

const errorContainer = document.querySelector('#error-container');
const resultsSection = document.querySelector('#results-section');
const paybackOutput = document.querySelector('#payback-output');
const co2Output = document.querySelector('#co2-output');

/* ==========================================================================
   2. CONFIGURAÇÕES E PARÂMETROS DE CÁLCULO (MÉDIAS DE MERCADO AGRO)
   ========================================================================== */
// Tarifa média estimada da energia convencional no PR rural: R$ 0,85 por kWh
const ELECTRICITY_TARIFF = 0.85; 

// Fator de emissão de CO2 do sistema interligado nacional: ~0,09 kg de CO2 por kWh
const CO2_FACTOR_KG = 0.09; 

const SYSTEM_FACTORS = {
    solar: {
        investmentPerKwh: 4.5, // Investimento estimado de R$ 4,50 por kWh consumido
        efficiency: 0.95       // Reduz quase 95% da conta original
    },
    biogas: {
        investmentPerKwh: 6.0, // Estrutura de biodigestor requer maior investimento inicial
        efficiency: 0.90       // Reduz cerca de 90% da conta original
    }
};

/* ==========================================================================
   3. FUNÇÕES AUXILIARES DE RENDERIZAÇÃO
   ========================================================================== */

// Renderiza mensagem de erro diretamente na tela
function showValidationError(message) {
    errorContainer.textContent = message;
    errorContainer.removeAttribute('hidden');
    resultsSection.setAttribute('hidden', 'true'); // Oculta resultados se houver erro
    consumptionInput.focus();
}

// Limpa mensagens de erro da tela
function clearValidationError() {
    errorContainer.textContent = '';
    errorContainer.setAttribute('hidden', 'true');
}

/* ==========================================================================
   4. CONTROLADOR LOGICO (EVENT LISTENER)
   ========================================================================== */
simulatorForm.addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário (recarregamento da página)
    event.preventDefault(); 
    
    // Limpa erros de tentativas anteriores
    clearValidationError();

    // Captura e sanitização dos valores inseridos
    const consumptionValue = consumptionInput.value.trim();
    const selectedSource = sourceSelect.value;
    const numericConsumption = parseFloat(consumptionValue);

    /* --- VALIDAÇÃO ESTRITA DIRETAMENTE NA TELA --- */
    if (consumptionValue === "" || isNaN(numericConsumption)) {
        showValidationError("Por favor, informe o consumo mensal de energia.");
        return;
    }

    if (numericConsumption <= 0) {
        showValidationError("O valor de consumo deve ser um número maior do que zero.");
        return;
    }

    if (!selectedSource) {
        showValidationError("Por favor, selecione uma fonte de energia sustentável para a simulação.");
        return;
    }

    /* --- LOGICA DE CÁLCULO --- */
    const currentMonthlyCost = numericConsumption * ELECTRICITY_TARIFF;
    const factor = SYSTEM_FACTORS[selectedSource];

    // Cálculo do Investimento Estimado do Sistema
    const estimatedInvestment = numericConsumption * factor.investmentPerKwh * 12; 
    
    // Economia Mensal Gerada
    const monthlySavings = currentMonthlyCost * factor.efficiency;

    // Tempo de Retorno (Payback) em meses
    const paybackMonths = Math.ceil(estimatedInvestment / monthlySavings);

    // Cálculo Ambiental: Redução Anual de CO2 em Toneladas (kWh anual * fator / 1000)
    const annualCo2SavedTon = ((numericConsumption * 12) * CO2_FACTOR_KG) / 1000;

    /* --- RENDERIZAÇÃO DOS RESULTADOS NO DOM --- */
    // Formatação amigável para exibição do Payback
    if (paybackMonths >= 12) {
        const years = Math.floor(paybackMonths / 12);
        const months = paybackMonths % 12;
        paybackOutput.textContent = `${years} ano(s) e ${months} mês(es)`;
    } else {
        paybackOutput.textContent = `${paybackMonths} meses`;
    }

    // Formatação da Redução de CO2 com 2 casas decimais
    co2Output.textContent = `${annualCo2SavedTon.toFixed(2)} Toneladas`;

    // Mostra a seção de resultados para o usuário
    resultsSection.removeAttribute('hidden');
});
