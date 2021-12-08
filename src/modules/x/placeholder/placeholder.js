import { LightningElement } from "lwc";

export default class Placeholder extends LightningElement {
    handleDragOver(evt) {
        evt.preventDefault();
        evt.dataTransfer.effectAllowed = "copy";
    }

    handleDrop(evt) {
        const componentId = parseInt(evt.dataTransfer.getData("text/plain"), 10);
        this.dispatchEvent(
            new CustomEvent("componentdrop", {
                detail: {
                    componentId,
                },
            })
        );
    }
}
