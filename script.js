document.addEventListener('DOMContentLoaded', () => {
    // Captura de Elementos do DOM
    const simulatorForm = document.querySelector('#simulator-form');
    const consumptionInput = document.querySelector('#monthly-consumption');
    const sourceSelect = document.querySelector('#energy-source');
    const errorContainer = document.querySelector('#error-container');
    
    // Áreas de Resultado
    const resultsSection = document.querySelector('#results-section');
    const emptyState = document.querySelector('#empty-state');
    const paybackOutput = document.querySelector('#payback-output');
    const co2Output = document.querySelector('#co2-output');

    // Variáveis Base (Economia e Sustentabilidade)
    const TARIFA_RURAL_PR = 0.85; // Custo médio do kWh rural em R$
    const FATOR_EMISSAO_CO2 = 0.09; // kg de CO2 por kWh na rede convencional

    // Base de Dados de Tecnologias (Investimento por kWh e Eficiência)
    const TECNOLOGIAS = {
        solar: { investimentoKwh: 4.5, eficiencia: 0.95 },
        biogas: { investimentoKwh: 6.0, eficiencia: 0.90 }
    };

    // UI Helpers: Exibição de Erros Customizada (Banindo o alert)
    const mostrarErro = (mensagem) => {
        errorContainer.textContent = `⚠️ ${mensagem}`;
        errorContainer.removeAttribute('hidden');
        resultsSection.setAttribute('hidden', 'true');
        emptyState.style.display = 'block';
        
        // Acessibilidade: Força o foco visual para o erro
        errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const limparErro = () => {
        errorContainer.textContent = '';
        errorContainer.setAttribute('hidden', 'true');
    };

    // Engine de Cálculo
    simulatorForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o recarregamento da página
        limparErro();

        // Limpeza e conversão de dados
        const valorConsumo = consumptionInput.value.trim();
        const fonteSelecionada = sourceSelect.value;
        const consumoNumerico = parseFloat(valorConsumo);

        // 1. Camada de Validação
        if (!valorConsumo || isNaN(consumoNumerico)) {
            mostrarErro("Informe o seu consumo mensal de energia em kWh.");
            consumptionInput.focus();
            return;
        }
        
        if (consumoNumerico <= 50) {
            mostrarErro("O consumo deve ser maior que 50 kWh para análise industrial/rural.");
            consumptionInput.focus();
            return;
        }

        if (!fonteSelecionada) {
            mostrarErro("Selecione uma matriz tecnológica sustentável.");
            sourceSelect.focus();
            return;
        }

        // 2. Camada de Cálculos Matemáticos
        const tecnologia = TECNOLOGIAS[fonteSelecionada];
        const custoMensalAtual = consumoNumerico * TARIFA_RURAL_PR;
        
        // Estimativa do custo de implantação da usina/biodigestor
        const investimentoEstimado = consumoNumerico * tecnologia.investimentoKwh * 12; 
        
        // O quanto ele deixa de pagar para a companhia elétrica
        const economiaMensal = custoMensalAtual * tecnologia.eficiencia;
        
        // Payback (Tempo de Retorno)
        const mesesPayback = Math.ceil(investimentoEstimado / economiaMensal);
        
        // Impacto Ambiental: CO2 que deixa de ser emitido no ano (em Toneladas)
        const co2EvitadoAnualTon = ((consumoNumerico * 12) * FATOR_EMISSAO_CO2) / 1000;

        // 3. Camada de Renderização e Formatação
        if (mesesPayback >= 12) {
            const anos = Math.floor(mesesPayback / 12);
            const meses = mesesPayback % 12;
            paybackOutput.textContent = meses === 0 
                ? `${anos} ano(s)` 
                : `${anos} ano(s) e ${meses} mês(es)`;
        } else {
            paybackOutput.textContent = `${mesesPayback} meses`;
        }

        // Formata o número ambiental para padrão BR
        co2Output.textContent = `${co2EvitadoAnualTon.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} Toneladas`;
        
        // 4. Transição de Interface
        emptyState.style.display = 'none';
        resultsSection.removeAttribute('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
