import { api, LightningElement, track } from 'lwc';
import denzelImg from "@salesforce/resourceUrl/denzelImg";
import kenderickImg from "@salesforce/resourceUrl/kendrickImg";
import rtjImg from "@salesforce/resourceUrl/rtjImg";

export default class Challenge5Child extends LightningElement {
    @api
    childInput;

    bandDisplayed = null;

    band1 = {
        "Name" : "Denzel Curry",
        "Description" : "A rapper from Florida.",
        "Image" : denzelImg
    };

    
    band2 = {
        "Name" : "Kendrick lamar",
        "Description" : "A rapper from California.",
        "Image" : kenderickImg
    };

    
    band3 = {
        "Name" : "Run the Jewels",
        "Description" : "Hip-Hop duo composed of El-P and Killer Mike.",
        "Image" : rtjImg
    };

    @api
    updateBand() {
        if(this.childInput == "Denzel Curry") {
            this.bandDisplayed = this.band1;
        }
        else if(this.childInput == "Kendrick Lamar") {
            this.bandDisplayed = this.band2;
        }
        else if(this.childInput == "Run the Jewels") {
            this.bandDisplayed = this.band3;
        }
        else {

        }
        this.dispatchEvent(new CustomEvent('sendinfo', {detail: {message: this.bandDisplayed.Description}}));
    }

    handleClick() {
        this.dispatchEvent(new Event('toggle'));
    }
}