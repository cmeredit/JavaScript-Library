import { Container } from "./containers/Container.js";
import { Rectangle } from "./items/Rectangle.js";

/*
* Class Renderer.
*
* @class Renderer
*/
export class Renderer {
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


            // Check if all containers have been filled
            var complete = true;
            this.items.forEach((container) => {
                if (container instanceof Container) {
                    this.items.forEach((item) => {
                        if (item instanceof Rectangle) {
                            if (container.checkValid(item) == false) {
                                complete = false;
                            }
                        }
                    });
                }
            });

            var prevItem = null;
            var correct = true;
            if (complete) {
                this.items.forEach((item) => {
                    if (item instanceof Rectangle) {
                        if (prevItem == null)
                            prevItem = item;
                        else if (prevItem.fill == item.fill) {
                            correct = false;
                        }
                    }
                });

                if (correct)
                    document.getElementById('result').innerText = 'Correct';
                else
                    document.getElementById('result').innerText = 'Incorrect';
            } else {
                document.getElementById('result').innerText = 'No Result';
            }

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