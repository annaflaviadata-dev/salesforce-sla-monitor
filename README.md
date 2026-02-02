# 🚀 Salesforce SLA Monitor - Dashboard de Casos Críticos

Este projeto foi desenvolvido para otimizar a operação de suporte em **Service Cloud**, permitindo que analistas visualizem instantaneamente o status de casos críticos através de uma interface dinâmica.

## 🧠 Inteligência do Projeto

O diferencial desta solução é a **transformação de dados brutos em inteligência visual**. O sistema realiza cálculos em tempo real para apresentar a urgência de forma humanizada, reduzindo a carga cognitiva da equipe.

## 🛠️ Tecnologias Utilizadas

- **LWC (Lightning Web Components):** Interface reativa e moderna.
- **Apex (Triggers & Controllers):** Automação de back-end para definição de prazos e consultas SOQL.
- **JavaScript (ES6):** Manipulação de objetos `Date` para cálculos de tempo em milissegundos.
- **SLDS (Salesforce Lightning Design System):** Estilização seguindo os padrões oficiais da plataforma.

## ⚙️ Funcionalidades Técnicas

1. **Triagem Automática (Apex Trigger):**
   - Analisa o assunto do caso e define prioridade **High** e prazo de **2 horas** para palavras-chave como "urgente" ou "erro".
   
2. **Cálculo de SLA Amigável (JavaScript):**
   - **Prazos Longos:** Exibe o tempo restante em **Dias** (ex: ⏳ 3 dia(s) e 10h).
   - **Prazos Críticos:** Exibe em **Horas e Minutos** (ex: 🕒 5h 30min).
   
3. **Indicadores Visuais (CSS Dinâmico):**
   - O card altera automaticamente para a cor vermelha (`slds-theme_error`) quando o prazo entra na zona crítica (menos de 24h restantes).

## 📂 Estrutura Principal

- `CaseTrigger.trigger`: Motor de regras de negócio.
- `CaseSLAController.cls`: Controlador de dados.
- `slaMonitor/`: Componente LWC (HTML, JS, CSS).

---
*Projeto desenvolvido para demonstração de competências Full-Stack em Salesforce e foco em UX para análise de dados.*