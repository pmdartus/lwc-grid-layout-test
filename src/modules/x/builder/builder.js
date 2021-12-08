import { LightningElement } from 'lwc';

export default class Builder extends LightningElement {
    tabCount = 3;

    handleTabCountChange(evt) {
        this.tabCount = evt.target.valueAsNumber;
    }

    get tabs() {
        return new Array(this.tabCount).fill().map((_, i) => {
            const letter = (i + 10).toString(36).toUpperCase();

            return {
                id: i,
                label: `Tab ${letter}`,
                content: `Hello I am in ${letter}!`
            }
        })
    }
}