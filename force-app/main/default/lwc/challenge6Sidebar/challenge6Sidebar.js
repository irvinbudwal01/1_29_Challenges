import { api, LightningElement } from 'lwc';

export default class Challenge6Sidebar extends LightningElement {

    @api
    description;

    @api
    show;

    handleClick() {
        this.show = !this.show;
    }

    
}