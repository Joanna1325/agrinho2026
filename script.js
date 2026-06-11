// Captura de Elementos do DOM
const simulatorForm = document.querySelector('#simulator-form');
const consumptionInput = document.querySelector('#monthly-consumption');
const sourceSelect = document.querySelector('#energy-source');
const errorContainer = document.querySelector('#error-container');
const resultsSection = document.querySelector('#results-section');
const emptyState = document.querySelector('#empty-state'); // Novo elemento
const paybackOutput = document.querySelector('#payback-output');
const co2Output = document.querySelector('#co2-output');

// Constantes Fiscais/Ecológicas
const ELECTRICITY_TARIFF = 0.85; 
const CO2_FACTOR_KG = 0.09; 

// Fatores Tecnológicos
const SYSTEM_FACTORS = {
    solar: { investmentPerKwh: 4.5, efficiency: 0.95 },
    biogas: { investmentPerKwh: 6.0, efficiency: 0.90 }
};

// Funções de Controle de UI
function showValidationError(message) {
    errorContainer.textContent = message;
    errorContainer.removeAttribute('hidden');
    resultsSection.setAttribute('hidden', 'true');
    emptyState.style.display = 'block'; // Volta o estado vazio
    consumptionInput.focus();
}

function clearValidationError() {
    errorContainer.textContent = '';
    errorContainer.setAttribute('hidden', 'true');
}

// Lógica de Submissão
simulatorForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    clearValidationError();

    // Entradas
    const consumptionValue = consumptionInput.value.trim();
    const selectedSource = sourceSelect.value;
    const numericConsumption = parseFloat(consumptionValue);

    // Validações Interceptadas (sem uso de alert)
    if (consumptionValue === "" || isNaN(numericConsumption)) {
        showValidationError("Por favor, informe o consumo mensal de energia.");
        return;
    }
    if (numericConsumption <= 0) {
        showValidationError("O valor de consumo deve ser um número maior do que zero.");
        return;
    }
    if (!selectedSource) {
        showValidationError("Por favor, selecione uma tecnologia sustentável.");
        return;
    }

    // Cálculos
    const currentMonthlyCost = numericConsumption * ELECTRICITY_TARIFF;
    const factor = SYSTEM_FACTORS[selectedSource];
    const estimatedInvestment = numericConsumption * factor.investmentPerKwh * 12; 
    const monthlySavings = currentMonthlyCost * factor.efficiency;
    const paybackMonths = Math.ceil(estimatedInvestment / monthlySavings);
    const annualCo2SavedTon = ((numericConsumption * 12) * CO2_FACTOR_KG) / 1000;

    // Renderização do Payback (Anos e Meses)
    if (paybackMonths >= 12) {
        const years = Math.floor(paybackMonths / 12);
        const months = paybackMonths % 12;
        paybackOutput.textContent = `${years} ano(s) e ${months} mês(es)`;
    } else {
        paybackOutput.textContent = `${paybackMonths} meses`;
    }

    // Renderização do CO2
    co2Output.textContent = `${annualCo2SavedTon.toFixed(2)} Toneladas`;
    
    // Altera a Interface (Some estado vazio, mostra resultados)
    emptyState.style.display = 'none';
    resultsSection.removeAttribute('hidden');
});
