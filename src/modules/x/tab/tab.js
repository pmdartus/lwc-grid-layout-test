import { api, LightningElement } from 'lwc';

export default class Tab extends LightningElement {
    @api label;
    @api selected = false;
}