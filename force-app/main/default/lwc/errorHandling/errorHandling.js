import { LightningElement, api, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const fields = [
    // This invalid field causes @wire(getRecord) to return an error
    'Contact.invalidField' 
];

export default class errorHandling extends LightningElement {
    @api recordId;

    @track error;

    @wire(getRecord, { recordId: '$recordId', fields })
    wiredRecord({error, data}) {
        if (error) {
            this.error = 'Unknown error';
            if (Array.isArray(error.body)) {
                this.error = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                this.error = error.body.message;
            }
            this.record = undefined;
        } else if (data) {
            // Process record data
        }
    }
}