import { LightningElement, wire } from 'lwc';
import getPendingCases from '@salesforce/apex/CaseSLAController.getPendingCases';

export default class SlaMonitor extends LightningElement {
    casosFormatados;

    @wire(getPendingCases)
    wiredCases({ error, data }) {
        if (data) {
            this.casosFormatados = data.map(item => {
                // 1. Configuração de datas
                const agora = new Date();
                const limite = new Date(item.Data_Limite_SLA__c);
                const diffMs = limite - agora; // Diferença em milissegundos

                // 2. Variáveis para armazenar o resultado formatado
                let tempoRestante;
                let corDestaque;

                // 3. Lógica de formatação do tempo
                if (diffMs <= 0) {
                    tempoRestante = '🔴 SLA VENCIDO';
                    corDestaque = 'slds-theme_error';
                } else {
                    const diffHorasTotal = Math.floor(diffMs / (1000 * 60 * 60));

                    if (diffHorasTotal >= 24) {
                        // Se for mais de 24h, calcula dias e horas restantes
                        const dias = Math.floor(diffHorasTotal / 24);
                        const horasSobras = diffHorasTotal % 24;
                        tempoRestante = `⏳ ${dias} dia(s) e ${horasSobras}h`;
                        corDestaque = 'slds-theme_default'; // Cinza para prazos longos
                    } else {
                        // Se for menos de 24h, calcula horas e minutos
                        const minutos = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                        tempoRestante = `🕒 ${diffHorasTotal}h ${minutos}min`;
                        corDestaque = 'slds-theme_error'; // Vermelho para menos de 24h
                    }
                }

                // 4. Retorna o objeto do caso com as novas propriedades para o HTML
                return { 
                    ...item, 
                    classeCSS: corDestaque,
                    contadorSLA: tempoRestante 
                };
            });
        } else if (error) {
            console.error('Erro ao buscar casos:', error);
        }
    }
}