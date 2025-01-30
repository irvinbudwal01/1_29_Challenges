import { LightningElement } from 'lwc';
import getContact from '@salesforce/apex/ContactHelper.getContact';

export default class Challenge7 extends LightningElement {
    input;

    contact;
    
    async handleClick() {
        this.input = this.refs.input.value;
        this.contact = await getContact({name: this.input}); //using sosl
        console.log(this.contact);
    }


}