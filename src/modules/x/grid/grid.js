import { api, LightningElement } from 'lwc';

export default class Grid extends LightningElement {
    #columns = 12;
    #rowHeight = 150;
    #margin = 10;

    @api 
    set columns(val) {
        this.#columns = parseInt(val, 10);
    }
    get columns() {
        this.#columns;
    }


    @api 
    set rowHeight(val) {
        this.#rowHeight = parseInt(val, 10);
    }
    get rowHeight() {
        return this.#rowHeight;
    }

    @api
    set margin(val) {
        this.#margin = parseInt(val, 10);
    }
    get margin() {
        return this.#margin;
    }

    get slotStyle() {
        return [
            `place-items: stretch`,
            `justify-content: stretch`,
            `grid-template-columns: repeat(${this.#columns}, 1fr)`,
            `grid-auto-rows: ${this.rowHeight}px`,
            `gap: ${this.#margin}px`,
        ].join('; ');
    }
}