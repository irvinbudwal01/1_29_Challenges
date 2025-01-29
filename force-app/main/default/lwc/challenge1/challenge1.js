import { LightningElement, track } from 'lwc';

export default class Challenge1 extends LightningElement {

    @track
    inputs = [];

    handleClick() {
        this.inputs.push(this.refs.input.value);
        console.log("here");
    }
}