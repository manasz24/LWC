import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_FIELD from '@salesforce/schema/Contact.Firstname';
import SECOND_FIELD from '@salesforce/schema/Contact.Lastname';
import LAST_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {


    contactObject = CONTACT_OBJECT;

    contactFields = [FIRST_FIELD, SECOND_FIELD,LAST_FIELD];

    handleSuccess(evt){
        //const event = new CustomEvent('newrecord', {detail: { data: evt.detail },});
        //this.dispatchEvent(event);
        console.log(evt);
        const event = new ShowToastEvent({
            title: 'Created Contact Record',
            message: evt.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(event);
    
    }



}