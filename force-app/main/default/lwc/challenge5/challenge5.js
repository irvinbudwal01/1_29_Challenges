import { api, LightningElement } from 'lwc';

export default class Challenge5 extends LightningElement {
    parentInput;

    @api
    descriptionFromChild;

    displaySidebar = false;

    handleClick() {
        this.parentInput = this.refs.parentInput.value;
        this.template.querySelector("c-challenge5-child").updateBand(); //update band values
    }

    onRequest(event) {
        console.log(event.detail);
        this.descriptionFromChild = event.detail.message;
    }

    toggleDesc() {
        this.displaySidebar = !this.displaySidebar;
    }

}