import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import SALUTATION_FIELD from '@salesforce/schema/Contact.Salutation';

const namefields = [FIRSTNAME_FIELD, LASTNAME_FIELD, SALUTATION_FIELD];

export default class GetContactName extends LightningElement {
    @api recordId; // provided by the contact record page

    @wire(getPicklistValues, { recordTypeId: '012000000000000AAA', fieldApiName: SALUTATION_FIELD })  //just an example
    salutationValues;
    
    @wire(getRecord, { recordId: '$recordId', fields: namefields })
    contact;
    
    get firstname() {
        return this.contact.data.fields.FirstName.value;
    }

    get lastname() {
        return this.contact.data.fields.LastName.value;
    }

    get salutation() {
        return this.contact.data.fields.Salutation.value;
    }

    // creates the options array for lightning-input-name
    get salutations() {
        let salutationOptions = [];
        Object.entries(this.salutationValues.data.values).forEach(val => {
            let values = val[1];
            salutationOptions.push({ 'label': values.label, 'value': values.value });
        }); 
        return salutationOptions;
    }
}