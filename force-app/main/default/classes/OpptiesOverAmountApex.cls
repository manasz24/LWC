public with sharing class OpptiesOverAmountApex {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpptyOverAmount(Decimal amount) {
        return [SELECT Id, Name, Amount, StageName, CloseDate FROM Opportunity WHERE Amount > :amount];
    }

    @AuraEnabled
    public static void updateOpptyStage(Decimal amount, String stage) {
        for (List<Opportunity> oppts:
            [SELECT Id, Name, Amount, StageName, CloseDate FROM Opportunity WHERE Amount > :amount]) {
                for(Opportunity o : oppts) {
                    o.StageName = stage;
                }
                update oppts;
            }
            return;
    }
}