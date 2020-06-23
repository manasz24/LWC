// wrapper.js
import { LightningElement } from 'lwc';

export default class Wrapper extends LightningElement {
    recordId;

    /**
     * Handles the new record event.
     */
    handleNewRecord(evt) {
        const recordId = evt.detail.data.id;
        this.recordId = recordId;
    }
}