public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT Id, FirstName, LastName, Title, Phone, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            WHERE Name LIKE :key
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }


    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact(){
        return [SELECT Id, Name, Title, Phone, Email, Picture__c FROM Contact LIMIT 1];
    }

}