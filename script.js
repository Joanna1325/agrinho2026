document.addEventListener('DOMContentLoaded', () => {
    // Mapeamento do DOM
    const simulatorForm = document.querySelector('#simulator-form');
    const consumptionInput = document.querySelector('#monthly-consumption');
    const activitySelect = document.querySelector('#activity-type');
    const frequencySelect = document.querySelector('#blackout-frequency');
    const sourceSelect = document.querySelector('#energy-source');
    
    // Contêineres de Interface
    const errorContainer = document.querySelector('#error-container');
    const resultsSection = document.querySelector('#results-section');
    const emptyState = document.querySelector('#empty-state');
    
    // Elementos de Saída Técnica
    const vulnerabilityOutput = document.querySelector('#vulnerability-output');
    const lossOutput = document.querySelector('#loss-output');
    const paybackOutput = document.querySelector('#payback-output');
    const creditOutput = document.querySelector('#credit-output');
    const co2Output = document.querySelector('#co2-output');

    // Regras Fiscais e Ambientais do Campo Paranaense
    const TARIFA_RURAL_KWH = 0.85; 
    const CO2_EMISSAO_FACTOR = 0.09; // kg de CO2 por kWh da rede convencional

    // Coeficientes do Sistema de Engenharia
    const MATRIZ_ENERGETICA = {
        solar: { investimentoKwh: 4.5, eficiencia: 0.95 },
        biogas: { investimentoKwh: 6.0, eficiencia: 0.90 }
    };

    const exibirErroUI = (mensagem) => {
        errorContainer.textContent = `⚠️ ${mensagem}`;
        errorContainer.removeAttribute('hidden');
        resultsSection.setAttribute('hidden', 'true');
        emptyState.style.display = 'block';
        errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const limparErroUI = () => {
        errorContainer.textContent = '';
        errorContainer.setAttribute('hidden', 'true');
    };

    simulatorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        limparErroUI();

        // Extração dos dados do formulário
        const consumoTexto = consumptionInput.value.trim();
        const atividade = activitySelect.value;
        const frequenciaQuedas = frequencySelect.value;
        const tecnologiaEscolhida = sourceSelect.value;
        
        const consumoNumerico = parseFloat(consumoTexto);

        // --- Camada Avançada de Validação ---
        if (!consumoTexto || isNaN(consumoNumerico)) {
            exibirErroUI("Por favor, informe o consumo de energia mensal em kWh.");
            consumptionInput.focus();
            return;
        }
        if (consumoNumerico <= 100) {
            exibirErroUI("O consumo informado deve ser maior que 100 kWh para representar uma atividade rural produtiva.");
            consumptionInput.focus();
            return;
        }
        if (!atividade) {
            exibirErroUI("Selecione a atividade produtiva principal da fazenda.");
            activitySelect.focus();
            return;
        }
        if (!frequenciaQuedas) {
            exibirErroUI("Selecione a frequência com que ocorrem apagões na rede convencional.");
            frequencySelect.focus();
            return;
        }
        if (!tecnologiaEscolhida) {
            exibirErroUI("Escolha a matriz tecnológica sustentável proposta para a transição.");
            sourceSelect.focus();
            return;
        }

        // --- Core Algorítmico 1: Vulnerabilidade e Prejuízo ---
        let fatorPrejuizoAtividade = 0; // Custo estimado em perda por kWh exposto
        if (atividade === 'avicultura') fatorPrejuizoAtividade = 9.50; // Alto risco por morte térmica
        if (atividade === 'laticinios')  fatorPrejuizoAtividade = 5.20; // Risco médio por descarte de leite
        if (atividade === 'graos')       fatorPrejuizoAtividade = 2.80; // Risco menor por perda de qualidade

        let multiplicadorFrequencia = 0;
        let classeVulnerabilidade = '';
        let textoVulnerabilidade = '';

        if (frequenciaQuedas === 'baixa') {
            multiplicadorFrequencia = 1.2;
            textoVulnerabilidade = 'BAIXA';
            classeVulnerabilidade = 'badge-baixo';
        } else if (frequenciaQuedas === 'media') {
            multiplicadorFrequencia = 3.5;
            textoVulnerabilidade = 'MÉDIA';
            classeVulnerabilidade = 'badge-medio';
        } else {
            multiplicadorFrequencia = 7.0;
            textoVulnerabilidade = 'CRÍTICA';
            classeVulnerabilidade = 'badge-critico';
        }

        // Cálculo matemático do impacto financeiro do apagão anual
        const prejuizoAnualEstimado = consumoNumerico * fatorPrejuizoAtividade * multiplicadorFrequencia * 0.12;

        // --- Core Algorítmico 2: Payback e Crédito ---
        const configTecno = MATRIZ_ENERGETICA[tecnologiaEscolhida];
        const gastoMensalAtual = consumoNumerico * TARIFA_RURAL_KWH;
        const investimentoInstalacao = consumoNumerico * configTecno.investimentoKwh * 12;
        const economiaMensalReal = gastoMensalAtual * configTecno.eficiencia;
        
        const mesesPayback = Math.ceil(investimentoInstalacao / economiaMensalReal);
        const co2EconomizadoTon = ((consumoNumerico * 12) * CO2_EMISSAO_FACTOR) / 1000;

        // --- Core Algorítmico 3: Recomendação Inteligente de Crédito ---
        let linhaCreditoRecomendada = '';
        if (consumoNumerico <= 1200) {
            linhaCreditoRecomendada = "PRONAF Eco (Subsidiado para Pequeno Produtor)";
        } else if (tecnologiaEscolhida === 'biogas') {
            linhaCreditoRecomendada = "RenovaAgro / Plano Safra (Foco em Biodigestores)";
        } else {
            linhaCreditoRecomendada = "Inovagro (Financiamento de Alta Tecnologia Rural)";
        }

        // --- Camada de Renderização na UI ---
        
        // Aplica a cor dinâmica de risco baseada no algoritmo
        vulnerabilityOutput.className = classeVulnerabilidade;
        vulnerabilityOutput.textContent = textoVulnerabilidade;

        // Formatação monetária brasileira (R$)
        lossOutput.textContent = prejuizoAnualEstimado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Formatação do Tempo de Retorno
        if (mesesPayback >= 12) {
            const anos = Math.floor(mesesPayback / 12);
            const meses Restantes = mesesPayback % 12;
            paybackOutput.textContent = mesesRestantes === 0 ? `${anos} ano(s)` : `${anos} ano(s) e ${mesesRestantes} mês(es)`;
        } else {
            paybackOutput.textContent = `${mesesPayback} meses`;
        }

        // Renderiza linha de crédito e CO2
        creditOutput.textContent = linhaCreditoRecomendada;
        co2Output.textContent = `${co2EconomizadoTon.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} Toneladas`;

        // Transição de tela suave
        emptyState.style.display = 'none';
        resultsSection.removeAttribute('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
