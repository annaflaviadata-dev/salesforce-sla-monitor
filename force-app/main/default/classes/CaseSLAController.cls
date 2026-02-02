public with sharing class CaseSLAController {
    
    @AuraEnabled(cacheable=true)
    public static List<Case> getPendingCases() {
        return [SELECT Id,Status, CaseNumber, Subject, Priority, Data_Limite_SLA__c 
                FROM Case 
                WHERE IsClosed = false 
                AND Data_Limite_SLA__c != null
                ORDER BY Data_Limite_SLA__c ASC 
                LIMIT 10];
    }
}