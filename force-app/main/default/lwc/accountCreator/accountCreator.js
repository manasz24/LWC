import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

/**
 * Creates Account records.
 */
export default class accountCreator extends LightningElement {
    /** Status message when creating an Account. */
    createStatus = '';

    accountObject = ACCOUNT_OBJECT;

    accountFields = [NAME_FIELD, WEBSITE_FIELD];

    /** Handles successful Account creation. */
    handleAccountCreated(evt) {
        this.createStatus = `Account record created. Id is ${evt.detail.id}.`;

        const event = new CustomEvent('newrecord', {
            detail: { data: evt.detail },
        });
        this.dispatchEvent(event);
    }
}