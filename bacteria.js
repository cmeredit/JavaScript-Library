import Renderer from "./core/Renderer.js";
import Bacteria from "./modules/Bacteria/items/Bacteria.js";

// Build canvas
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.append(canvas);

// Instantiate renderer
var renderer = new Renderer(canvas);

// Create bacteria
var b1 = new Bacteria(canvas, 0, 0, 100, 100);
var b2 = new Bacteria(canvas, 200, 200, 100, 100);

// Add items to renderer
renderer.addItem(b1);
renderer.addItem(b2);

// TEST: Alternate states every second
var alternate = setInterval(() => {
    if (b1.getState() == 'regular')
        b1.setHardened();
    else
        b1.setRegular();
}, 1000);