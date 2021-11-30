import { LightningElement, api } from 'lwc';

export default class GridItem extends LightningElement {
    #x = 1;
    #y = 1;
    #w = 1;
    #h = 1;

    @api 
    set x(val) {
        this.#x = parseInt(val, 10);
        this.template.host.style.gridColumnStart = this.#x;
    }
    get x() {
        return this.#x;
    }

    @api 
    set y(val) {
        this.#y = parseInt(val, 10);
        this.template.host.style.gridRowStart = this.#y;
    }
    get y() {
        return this.#y;
    }

    @api 
    set w(val) {
        this.#w = parseInt(val, 10);
        this.template.host.style.gridColumnEnd = this.#x + this.#w;
    }
    get w() {
        return this.#w;
    }

    @api 
    set h(val) {
        this.#h = parseInt(val, 10);
        this.template.host.style.gridRowEnd = this.#y + this.#h;
    }
    get h() {
        return this.#h;
    }
}