import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_FIELD from '@salesforce/schema/Contact.Name';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {


    contactObject = CONTACT_OBJECT;

    contactFields = [FIRST_NAME,LAST_NAME,EMAIL_FIELD];

    handleSuccess(event){
        //const event = new CustomEvent('newrecord', {detail: { data: evt.detail },});
        //this.dispatchEvent(event);
        console.log(event);
        const event2 = new ShowToastEvent({
            title: 'Created Contact Record',
            message: evt.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(event2);
    
    }



}