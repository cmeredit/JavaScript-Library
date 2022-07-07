/*
* Class Renderer.
*
* @class Renderer
*/
export default class Renderer {
    items = [];

    constructor(canvas) {
        var frames = setInterval(() => {
            var ctx = canvas.getContext("2d");

            // Refresh canvas for new frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Render all items
            this.items.forEach((item) => {
                item.render();
            });

        }, 16.67);
    }

    _load() {

    }

    _update() {

    }

    addItem(item) {
        this.items.push(item);
    }
}