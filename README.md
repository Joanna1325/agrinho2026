# 🌱 AgroAliança — Diagnóstico e Transição Energética

> Projeto desenvolvido para o **Concurso Agrinho 2026**
> Subcategoria 3: Ensino Médio — Programação

Ferramenta interativa de análise de risco rural que auxilia produtores do Paraná na transição para energias renováveis, alinhada ao tema oficial do concurso: *"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*.

---

## 🎯 Objetivo

Demonstrar como tecnologia e análise de dados podem proteger o produtor rural contra prejuízos causados pela instabilidade elétrica, promovendo a adoção consciente de energias limpas — Solar e Biogás.

---

## ✨ Funcionalidades

### 📊 Analisador de Risco Inteligente
Simulador avançado em JavaScript Vanilla que processa os dados do produtor e calcula:

- **Vulnerabilidade e Prejuízo** — Estimativas de perdas financeiras (R$) por tipo de cultura (avicultura, leite, grãos) e frequência de apagões.
- **Payback e Impacto Ambiental** — Tempo de retorno do investimento e redução anual de CO₂ (alinhado aos ODS 7 e 12).
- **Recomendação de Crédito** — Sugestão de linhas de crédito rural reais (PRONAF Eco, RenovaAgro, Inovagro) com base no perfil de consumo.

### ♿ Usabilidade e Feedback Dinâmico
- Validação de formulários com interceptação ativa no DOM (sem uso de `alert()`).
- Exportação em PDF nativa: o produtor salva ou imprime o diagnóstico formatado de forma limpa, sem desperdício de tinta.

---

## 🎨 Design UI/UX

| Recurso | Descrição |
|---|---|
| **Responsividade** | Layout adaptável para mobile e desktop via CSS Grid e Flexbox puros |
| **Animações de scroll** | Efeitos `fade-in` e `slide-up` com keyframes em CSS |
| **Tipografia** | `Lora` (serifada) nos títulos + `Inter` (sans-serif) no corpo de texto |
| **Estilo visual** | Glassmorphism e estilo editorial — tradição, confiança e clareza |
| **Mídia** | Imagens fotorrealistas e logotipo gerados com IA (Adobe Firefly), com uso ético e declarado |

---

## 📖 Instruções de Uso

1. Acesse a página inicial pelo link do GitHub Pages.
2. Navegue pelos cards educativos para entender os riscos de apagões no campo.
3. Na seção **"Analisador de Risco Rural"**, preencha:
   - Consumo mensal em kWh
   - Atividade principal
   - Frequência de quedas de luz
   - Matriz tecnológica de interesse
4. Clique em **"Gerar Diagnóstico Técnico"**.
5. O relatório será exibido na tela. Para salvar, clique em **"Salvar Relatório em PDF"**.

---

## 🚀 Tecnologias

| Camada | Tecnologia |
|---|---|
| Estrutura | HTML5 Semântico |
| Estilização | CSS3 puro (variáveis nativas, media queries, print mode) |
| Tipografia | Google Fonts |
| Interatividade | JavaScript Vanilla (ES6+) |
| IA Generativa Visual | Adobe Firefly |

---

## 📂 Estrutura de Arquivos

```
/
├── index.html                      # Estrutura, interface e importações
├── README.md                       # Documentação do projeto
├── css/
│   └── style.css                   # Estilização, responsividade e regras de impressão
├── js/
│   └── script.js                   # Algoritmo de diagnóstico, regras de negócio e validação
└── assets/
    ├── logo-agroalianca.png        # Logotipo e favicon
    ├── hero-agrivoltaico.jpg       # Imagem de fundo do header
    ├── card-*.jpg                  # Imagens dos cards de risco (3 arquivos)
    ├── solucao-*.jpg               # Imagens das soluções sustentáveis (2 arquivos)
    ├── icones-categorias.jpg       # Ícones vetoriais de categorias do agronegócio
    ├── grafico-impacto.jpg         # Gráfico do empty-state do simulador
    └── sobre-sustentabilidade.jpg  # Imagem institucional do rodapé
```

---

## 🤖 Transparência sobre o Uso de IA

Em total conformidade com o regulamento do Concurso Agrinho 2026, declaramos que todo o ecossistema visual deste projeto foi gerado com a ferramenta de IA generativa **Adobe Firefly**. Abaixo estão os prompts exatos utilizados na concepção de cada mídia.

<details>
<summary><strong>logo-agroalianca.png</strong> — Logotipo</summary>

```
A modern, minimalist, flat vector logo icon showing two interlocking shapes forming a
subtle circle or infinity symbol, combining a green leaf and a bright yellow or blue
energy element. Representing a strong alliance and sustainable agricultural technology.
Solid white background, corporate agritech startup identity, clean geometry, simple,
elegant, high resolution.
```
</details>

<details>
<summary><strong>hero-agrivoltaico.jpg</strong> — Capa inicial</summary>

```
Photorealistic, detailed, wide-angle ground-level photograph of a central agricultural
row between two long, converging rows of ground-mounted blue solar panels. Various rows
of lush, vibrant green leafy vegetables, lettuce, and herbs are growing densely in dark,
rich, fertile soil between and under the solar panel rows. In the immediate foreground,
attached to the panel racking, are visible smart farming sensors including a soil
moisture probe and a compact weather station (anemometer and temperature sensor). Over
the field in the central distance, a small quadcopter drone is flying. The background
features rolling mountains under a clear, bright blue sky. Strong, powerful sunlight
from the left creates lens flare and brilliant specular reflections on the blue glass
surfaces of the panels. Realismo fotográfico, sharp focus, cinematic lighting, modern
agrivoltaics aesthetic, no watermarks, professional agriculture and energy photography.
```
</details>

<details>
<summary><strong>card-controle-termico.jpg</strong> — Desafio Aviário</summary>

```
Clean, photorealistic interior view of a massive, high-tech modern poultry farm building
with a working climate control system, set in Paraná, Brazil, showing healthy chickens.
Digital environmental sensors visible on walls displaying 'TEMP 24°C, HUM 60%'. Clean
and sanitary environment, bright and even lighting, sharp focus, professional agriculture
photography.
```
</details>

<details>
<summary><strong>card-cadeia-frio.jpg</strong> — Desafio Laticínios</summary>

```
High-resolution close-up photograph of a large, stainless steel, industrial milk cooling
tank inside a cooperative processing facility. Insulated pipelines and a bright digital
display showing '4°C'. Polished steel with clean reflections, bright natural morning
lighting, professional product photography.
```
</details>

<details>
<summary><strong>card-custos-emergenciais.jpg</strong> — Desafio Gerador</summary>

```
Photorealistic photograph of a robust, weather-resistant industrial diesel generator unit
parked next to a farm storage building. Heavy power cables and a large fuel tank are
visible. Durable, industrial aesthetic, bright natural lighting, sharp focus, professional
photography.
```
</details>

<details>
<summary><strong>solucao-silos.jpg</strong> — Monitoramento IoT</summary>

```
High-resolution photorealistic close-up of a sleek, modern wireless sensor device
embedded within a pile of whole soybeans inside an industrial grain silo. The sensor
displays data on a minimal LED screen. Soft natural lighting, shallow depth of field
focused on sensor and grains.
```
</details>

<details>
<summary><strong>icones-categorias.jpg</strong> — Ícones de categorias</summary>

```
Clean, minimalist vector-style icon, solid forest green color on a plain white
background, for an agricultural app category [NOME DA CATEGORIA EM PORTUGUÊS,
ex: 'Grãos', 'Frutas', 'Laticínios']. Isolated graphic, high-resolution.
```
</details>

<details>
<summary><strong>solucao-sacolas.jpg</strong> — Proteção de Safra</summary>

```
High-resolution close-up of a transparent, high-strength, hermetically sealed storage
bag filled with rice grains, featuring a professional brand label and vacuum valve.
Sitting on a clean wooden shelf. Sharp focus, natural clean lighting.
```
</details>

<details>
<summary><strong>grafico-impacto.jpg</strong> — Empty State do Simulador</summary>

```
Minimalist, modern data visualization circular infographic for a cooperative
sustainability app, using smooth gradients of forest green and terracotta orange,
divided into unequal segments with elegant numerical percentages. Clean cream background,
high-resolution vector graphic aesthetic.
```
</details>

<details>
<summary><strong>sobre-sustentabilidade.jpg</strong> — Rodapé institucional</summary>

```
Symbolic photorealistic photography of hands of different people holding a growing
sapling that is interwoven with stylized data streams and a miniature, clean farm
landscape with a solar panel. Peaceful natural lighting, depth of field, earthy greens
and browns.
```
</details>

---

## 👩‍💻 Autoria

| | |
|---|---|
| **Desenvolvedora** | Joanna Gonçalves |
| **Orientação** | Professor Luiz Tavares |
| **Turma** | ENS MED IF LGG/CHS ESP INT — 3ª Série — Integral A — Pensamento Computacional I |
