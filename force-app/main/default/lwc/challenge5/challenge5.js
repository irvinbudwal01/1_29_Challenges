import { LightningElement } from 'lwc';

export default class Challenge5 extends LightningElement {
    parentInput;

    handleClick() {
        this.parentInput = this.refs.parentInput.value;
        this.template.querySelector("c-challenge5-child").updateBand();
    }
}