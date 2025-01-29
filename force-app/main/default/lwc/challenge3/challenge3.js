import { LightningElement } from 'lwc';

export default class Challenge3 extends LightningElement {

    makeRed() {
        this.refs.square.style.backgroundColor = "Red";
        //this.template.querySelector(".square").style.backgroundColor = "Red"; //alternative approach
    }

    makeGreen() {
        this.refs.square.style.backgroundColor = "Green";
    }

    makeBlue() {
        this.refs.square.style.backgroundColor = "Blue";
    }
}