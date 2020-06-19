import { LightningElement, track } from 'lwc';

export default class TrackDate extends LightningElement {
       // @track X;

initDate(){
this.X=new Date();
}

updateDate() {
this.x.setHours(7);
}

}