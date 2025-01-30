import { api, LightningElement, wire } from 'lwc';
import getContactId from '@salesforce/apex/ContactHelper.getContactId';

export default class Challenge8 extends LightningElement {
    
    @wire(getContactId,{id: '$recordId'})
    contact;

    @api
    recordId;

}