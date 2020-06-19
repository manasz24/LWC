// miscStaticResource.js
import { LightningElement } from 'lwc';
import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';
import TRAILHEAD_CHARACTERS from '@salesforce/resourceUrl/trailhead_characters';

export default class MiscStaticResource extends LightningElement {

    // Expose the static resource URL for use in the template
    trailheadLogoUrl = TRAILHEAD_LOGO;

    // Expose URL of assets included inside an archive file
    einsteinUrl = TRAILHEAD_CHARACTERS + '/images/einstein.png';

}