import { LightningElement, track } from 'lwc';
import xImage from 'x/image';
import xText from 'x/text';

const COMPONENTS = [
    {
        id: 0, 
        label: 'My Image Component',
        className: 'image-cmp',
        ctor: xImage
    },
    {
        id: 1, 
        label: 'My Text Component',
        className: 'text-cmp',
        ctor: xText
    }
]

export default class Builder extends LightningElement {
    components = COMPONENTS;
    @track tabs = [];

    handleTabCountChange(evt) {
        const tabCount = evt.target.valueAsNumber;

        if (tabCount === this.tabs.length) {
            return;
        } 

        while (tabCount < this.tabs.length) {
            this.tabs.pop();
        }

        while (tabCount > this.tabs.length) {
            const letter = (this.tabs.length + 10).toString(36).toUpperCase();
            const label = `Tab ${letter}`;

            this.tabs.push({
                id: letter,
                label,
                component: null,
            })
        }
    }

    handleComponentDrag(evt) {
        const componentId = evt.target.dataset.id;
        evt.dataTransfer.setData("text/plain", componentId);
    }

    handleComponentDrop(evt) {
        const { componentId } = evt.detail;
        const tabId = evt.target.parentElement.dataset.id;
        

        const tab = this.tabs.find(t => t.id === tabId);
        const component = this.components.find(c => c.id === componentId);

        tab.component = component.ctor;
    }
}