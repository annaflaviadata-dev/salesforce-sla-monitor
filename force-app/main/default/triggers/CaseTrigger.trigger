trigger CaseTrigger on Case (before insert) {
    for (Case c : Trigger.new) {
        if (c.Priority == 'High') {
            c.Data_Limite_SLA__c = System.now().addDays(1);
        }
    }
}