import { LightningElement, wire } from 'lwc';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import getContacts from '@salesforce/apex/ContactController.getContacts';
const COLUMNS = [
    { label: 'Contact FirstName', fieldName: FIRSTNAME_FIELD.fieldApiName, type: 'Name' },
    { label: 'Contact LastName', fieldName: LASTNAME_FIELD.fieldApiName, type: 'Name' },
    { label: 'Contact Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'Email' }
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
}