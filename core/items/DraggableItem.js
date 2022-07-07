import Item from "./Item.js";

/*
* Abstract Class DraggableItem.
*
* @class DraggableItem
* @extends { Item }
*/
export default class DraggableItem extends Item {
    offsetX = 0;
    offsetY = 0;
    mouseX = null;
    mouseY = null;
    selected = false;

    constructor(canvas, x, y, width, height) {
        super(canvas, x, y, width, height);
        if (this.constructor == DraggableItem)
            throw new Error("Abstract classes can't be instantiated.");
            
        this.canvas.addEventListener('mousedown', (event) => {
            this.handleMouseDown(event);
        });

        this.canvas.addEventListener('mouseup', (event) => {
            this.handleMouseUp(event);
        });

        this.canvas.addEventListener('mousemove', (event) => {
            this.handleMouseMove(event);
        });

        // Event listeners for mobile
        this.canvas.addEventListener('touchstart', (event) => {
            this.handleMouseDown(event.touches[0]);
        });

        this.canvas.addEventListener('touchend', (event) => {
            this.handleMouseUp(event.touches[0]);
        });

        this.canvas.addEventListener('touchmove', (event) => {
            this.handleMouseMove(event.touches[0]);
        });
    }

    handleMouseDown(event) {
        // Get current mouse position
        this.mouseX = parseInt(event.clientX);
        this.mouseY = parseInt(event.clientY);

        // Check if mouse down inside the DraggableItem
        if ((this.mouseX >= this.x && this.mouseX <= (this.x+this.width))
            && (this.mouseY >= this.y && this.mouseY <= (this.y+this.height))) {
                this.selected = true;
                this.offsetX = this.mouseX-this.x;
                this.offsetY = this.mouseY-this.y;
            }
    }

    handleMouseUp(event) {
        this.selected = false;
    }

    handleMouseMove(event) {
        // Get current mouse position
        this.mouseX = parseInt(event.clientX);
        this.mouseY = parseInt(event.clientY);

        if (this.selected) {
            this.x = this.mouseX-this.offsetX;
            this.y = this.mouseY-this.offsetY;
    
            this.render();
        }
    }

    render() {}
}