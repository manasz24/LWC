// opportunitiesOverAmount.js
import { LightningElement, api, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getOpptyOverAmount from '@salesforce/apex/OpptiesOverAmountApex.getOpptyOverAmount';
import updateOpptyStage from '@salesforce/apex/OpptiesOverAmountApex.updateOpptyStage';

export default class OpportunitiesOverAmount extends LightningElement {
    @api amount = 500000;

    @wire(getOpptyOverAmount, { amount: '$amount' })
    opptiesOverAmount;

    handleClick(e) {
        updateOpptyStage({
            amount: this.amount,
            stage: 'Closed Won'
        })
        .then(() => {
            return refreshApex(this.opptiesOverAmount);
        })
        .catch((error) => {
            this.message = 'Error received: code' + error.errorCode + ', ' +
                'message ' + error.body.message;
        });
    }
}