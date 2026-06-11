# Agro Aliança

# 🌱 AgroAliança - Diagnóstico e Transição Energética

Uma landing page interativa e um analisador de risco rural desenvolvidos para o **Concurso Agrinho 2026** (Subcategoria 3: Ensino Médio - Programação). O projeto une um design sofisticado com engenharia de software para auxiliar produtores do Paraná na transição para energias renováveis.

## 🎯 Objetivo do Projeto

Demonstrar como a tecnologia e a análise de dados podem proteger o produtor rural (sua safra e seu rebanho) contra os prejuízos causados pela instabilidade elétrica. A ferramenta promove a conscientização e a adoção de energias limpas (Solar e Biogás), conectando-se diretamente ao tema oficial: *"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*.

## 🛠️ Recursos Técnicos

**📊 Analisador de Risco Inteligente (JS Vanilla)**
O projeto conta com um simulador avançado que processa os dados inseridos pelo produtor para calcular:
* **Vulnerabilidade e Prejuízo:** Estima perdas financeiras (R$) baseadas no tipo de cultura (avicultura, leite, grãos) e na frequência de apagões.
* **Payback e Impacto Ambiental:** Calcula o tempo de retorno do investimento da usina sustentável e a redução anual de CO₂ (Alinhado às ODS 7 e 12).
* **Recomendação de Crédito:** Sugere linhas de crédito rurais reais (PRONAF Eco, RenovaAgro, Inovagro) com base no perfil de consumo.

**♿ Usabilidade e Feedback Dinâmico**
* Validação de formulários com interceptação ativa direto no DOM (banindo o uso de `alert()`), melhorando a experiência do usuário.
* Funcionalidade nativa para **Exportação em PDF**, permitindo que o produtor salve ou imprima seu diagnóstico formatado de forma limpa e sem gastar tinta com elementos desnecessários.

## 🎨 UI/UX e Design

* **Design Responsivo:** Layout totalmente adaptável para dispositivos móveis e desktop, desenvolvido com CSS Grid e Flexbox puros.
* **Scroll Animations:** Efeitos de revelação e transição (`fade-in`, `slide-up`) criados via keyframes no CSS.
* **Estilo Editorial e Glassmorphism:** Uso de tipografia serifada (`Lora`) para títulos, transmitindo tradição e confiança, combinada com sans-serif (`Inter`) no corpo de texto para clareza.
* **Mídia Gerada por IA:** Uso ético, autoral e declarado de imagens fotorealistas e logotipo exclusivo gerados através de Engenharia de Prompt (Adobe Firefly).

## 🚀 Tecnologias Utilizadas

* **Estrutura:** HTML5 Semântico.
* **Estilização:** CSS3 puro (Variáveis nativas, media queries, print mode).
* **Tipografia:** Google Fonts.
* **Interatividade & Algoritmos:** JavaScript Vanilla (ES6+).
* **Imagens:** Adobe Firefly e Gemini (IA Generativa).

## 📂 Estrutura de Arquivos

```text
/
├── index.html                  # Arquivo principal (Estrutura, Interface e Importações)
├── style.css                   # Estilização visual, responsividade e regras de impressão
├── script.js                   # Algoritmo do diagnóstico, regras de negócio e validação
├── logo-agroalianca.png        # Logotipo do projeto e Favicon
├── hero-agrivoltaico.jpg       # Imagem de fundo principal (Header)
├── card-*.jpg                  # Imagens fotográficas dos cards de risco (3 arquivos)
├── solucao-*.jpg               # Imagens ilustrativas das soluções sustentáveis (2 arquivos)
├── icones-categorias.jpg       # Ícones vetoriais de categorias do agronegócio
├── grafico-impacto.jpg         # Gráfico ilustrativo do empty-state do simulador
├── sobre-sustentabilidade.jpg  # Imagem institucional do rodapé
└── README.md                   # Documentação do projeto
