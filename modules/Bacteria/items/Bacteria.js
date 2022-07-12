import Image from "../../../core/items/Image.js";

export default class Bacteria extends Image {
    hardenedSource = "./modules/Bacteria/images/hardened.jpg";
    regularSource = "./modules/Bacteria/images/regular.png";
    state = 'regular';

    constructor(canvas, x, y, width, height) {
        super(canvas, x, y, width, height, "./modules/Bacteria/images/regular.png");
    }

    setHardened() {
        this.updateImage(this.hardenedSource);
        this.state = 'hardened';
    }

    setRegular() {
        this.updateImage(this.regularSource);
        this.state = 'regular';
    }

    getState() {
        return this.state;
    }
}