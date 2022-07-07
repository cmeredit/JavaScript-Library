import { Item } from "../items/Item.js";

/*
* Abstract Class Container
*
* @class Conainter
* @extends { Item }
*/
export class Container extends Item {
    validItems = [];
    activeItem = null;

    constructor(canvas, x, y, width, height, validItems) {
        super(canvas, x, y, width, height);
        //if (this.constructor == Container)
        //    throw new Error("Abstract classes can't instantiated.");

        this.validItems += validItems;
    }

    checkValid(item) {
        if (this.validItems.includes(item) &&
        (item.x+this.width >= this.x && item.x-this.width <= this.x) &&
        (item.y+this.height >= this.y && item.y-this.height <= this.y)
        && this.activeItem == null
        && item.selected == false) {
            item.x = this.x;
            item.y = this.y;
            this.activeItem = item;
            console.log('one');
            return true;
        }
        else {
            //this.activeItem = null;
            console.log('two');
            return false;
        }
    }

    render() {
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black";
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();
    }
}