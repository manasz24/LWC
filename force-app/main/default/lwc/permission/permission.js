
import { LightningElement } from 'lwc';
import hasViewSetup from '@salesforce/userPermission/ViewSetup';

export default class App extends LightingElement {
    get isSetupEnabled() {
        return hasViewSetup;
    }

    openSetup(e) {}
}