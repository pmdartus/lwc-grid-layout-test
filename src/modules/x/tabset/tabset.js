import { LightningElement } from "lwc";

export default class Tabset extends LightningElement {
    labels = [];

    handleSlotChange(evt) {
        const tabs = evt.target
        .assignedElements().filter((el) => el.tagName === "X-TAB");

        this.labels = tabs
            .map((el, i) => ({
                value: el.label,
                key: el.dataset.id,
            }));

        
        const shouldForceSelect = tabs.every(tab => !tab.selected);
        if (shouldForceSelect) {
            tabs[0].selected = true;
        }
    }

    handleLabelClick(evt) {
        const selectedId = evt.target.dataset.id;

        for (const el of this.template.querySelector('slot').assignedElements()) {
            if (el.tagName !== 'X-TAB') {
                continue;
            }

            el.selected = this.isSelected(selectedId, el);
        }
    }

    isSelected(id, el) {
        return el.dataset.id === id && !el.selected;
    }
}
