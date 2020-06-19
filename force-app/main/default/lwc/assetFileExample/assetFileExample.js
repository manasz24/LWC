// assetFileExample.js
import { LightningElement } from 'lwc';
import SALES_WAVE_LOGO from '@salesforce/contentAssetUrl/SalesWaveLogo';
import PARTNER_LOGOS from '@salesforce/contentAssetUrl/PartnerLogos';

export default class AssetFileExample extends LightningElement {

    // Expose the asset file URL for use in the template
    salesWaveLogoUrl = SALES_WAVE_LOGO;

    // Expose URL of assets included inside an archive file
    goldPartnerLogoUrl = PARTNER_LOGOS + 'pathinarchive=images/gold_partner.png';

}