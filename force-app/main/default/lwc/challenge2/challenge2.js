import { api, LightningElement } from 'lwc';

export default class Challenge2 extends LightningElement {

    headerText = "Default Header";

    showField = false;

    handleClick() {
        this.showField = !this.showField;
    }

    updateHeader() {
        this.headerText = this.refs.input.value;
    }
}