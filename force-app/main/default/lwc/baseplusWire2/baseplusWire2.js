import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import STREET_FIELD from '@salesforce/schema/Contact.MailingStreet';
import CITY_FIELD from '@salesforce/schema/Contact.MailingCity';
import STATE_FIELD from '@salesforce/schema/Contact.MailingState';
import COUNTRY_FIELD from '@salesforce/schema/Contact.MailingCountry';
import POSTAL_FIELD from '@salesforce/schema/Contact.MailingPostalCode';

const FIELDS = [STREET_FIELD, CITY_FIELD, STATE_FIELD, COUNTRY_FIELD, POSTAL_FIELD];

export default class GetContactAddress extends LightningElement {
    @api recordId; // provided by the contact record page

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    contact;

    get street() {
        return this.contact.data.fields.MailingStreet.value;
    }

    get city() {
        return this.contact.data.fields.MailingCity.value;
    }

    get state() {
        return this.contact.data.fields.MailingState.value;
    }

    get country() {
        return this.contact.data.fields.MailingCountry.value;
    }

    get postal() {
        return this.contact.data.fields.MailingPostalCode.value;
    }
}