public with sharing class ContactHelper {
    public ContactHelper() {

    }

    @AuraEnabled(cacheable=true)
    public static List<List<SObject>> getContact(string name) {
        try { 
        return [FIND :name IN Name FIELDS RETURNING Contact(FirstName, LastName, Phone, Email) LIMIT 1];
        }
        catch(Exception e) {
            System.debug(e.getMessage());
        }
        return null;
    }

    @AuraEnabled(cacheable=true)
    public static Contact getContactId(string id) {
        try { 
        return [SELECT Name, Email, Account.Name FROM Contact WHERE Id = :id LIMIT 1];
        }
        catch(Exception e) {
            System.debug(e.getMessage());
        }
        return null;
    }
}