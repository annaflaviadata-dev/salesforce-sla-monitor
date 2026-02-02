# 🚀 Salesforce SLA Monitor - Monitor de Casos Críticos

Este projeto foi desenvolvido para otimizar a operação de suporte em **Service Cloud**, permitindo que analistas e gestores visualizem instantaneamente o status de casos críticos através de um dashboard dinâmico.

## 🧠 Diferenciais do Projeto

O grande diferencial deste componente é a **transformação de dados brutos em inteligência operacional**. Em vez de apenas exibir datas, o sistema realiza cálculos em tempo real para apresentar a urgência de forma "humana" e visual.

## 🛠️ Tecnologias Utilizadas

- **LWC (Lightning Web Components):** Interface reativa e de alta performance.
- **Apex (Triggers & Controllers):** Automação de back-end e consultas otimizadas com SOQL.
- **JavaScript (ES6):** Lógica para manipulação de objetos `Date` e conversão de milissegundos.
- **CSS (SLDS):** Estilização baseada no Salesforce Lightning Design System para garantir consistência visual.

## ⚙️ Funcionalidades Técnicas

1. **Triagem Inteligente (Apex Trigger):**
   - Analisa o assunto (`Subject`) do caso na criação.
   - Identifica palavras-chave como "urgente", "erro" ou "parado".
   - Define automaticamente a prioridade como **High** e ajusta o SLA para **2 horas** (ou 24h para casos padrão).

2. **Cálculo de SLA Dinâmico (JavaScript):**
   - O componente calcula a diferença entre o horário atual e a data limite.
   - **Formatação Amigável:** Se o prazo for > 24h, exibe em **Dias**. Se for < 24h, exibe em **Horas e Minutos**.
   - **Alertas Visuais:** Altera a cor do card para vermelho (`slds-theme_error`) automaticamente quando o prazo entra na zona crítica (menos de 24h).

3. **Arquitetura de Dados:**
   - Utilização de `@AuraEnabled(cacheable=true)` para otimização de performance.
   - Filtragem de registros via SOQL para exibir apenas casos abertos e priorizados.

## 📂 Estrutura de Arquivos

- `CaseTrigger.trigger`: Motor de regras de negócio.
- `CaseSLAController.cls`: Provedor de dados para o componente.
- `slaMonitor.html`: Estrutura visual do dashboard.
- `slaMonitor.js`: Cérebro do componente (lógica de tempo).
- `slaMonitor.css`: Identidade visual e alertas.

---
*Este projeto demonstra competências de desenvolvimento Full-Stack na plataforma Salesforce e foco em soluções baseadas em dados para experiência do cliente.*