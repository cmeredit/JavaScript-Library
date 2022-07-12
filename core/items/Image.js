import DraggableItem from "./DraggableItem.js";

/*
* Class Image.
*
* @class Image
* @extends { DraggableItem }
*/
export default class Image extends DraggableItem {
    image = null;

    constructor(canvas, x, y, width, height, source) {
        super(canvas, x, y, width, height);

        this.image = document.createElement("img");
        this.image.src = source;
    }

    updateImage(source) {
        this.image.src = source;
    }

    render() {
        var ctx = this.canvas.getContext("2d");
        if (this.image != null) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.font = "30px Arial";
            ctx.fillText("Image Not Set", this.x, this.y);
        }
    }
}