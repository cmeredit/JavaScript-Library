import { Renderer } from "./core/Renderer.js";
import { Rectangle } from "./core/items/Rectangle.js";
import { Container } from "./core/containers/Container.js";

// Build canvas
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.append(canvas);

// Instantiate renderer
var renderer = new Renderer(canvas);

var s1 = new Rectangle(canvas, 0, 0, 50, 50, false, 'red');
var s2 = new Rectangle(canvas, 60, 0, 50, 50, false, 'red');
var s3 = new Rectangle(canvas, 120, 0, 50, 50, false, 'blue');
var s4 = new Rectangle(canvas, 180, 0, 50, 50, false, 'blue');

// Add items to renderer
renderer.addItem(s1);
renderer.addItem(s2);
renderer.addItem(s3);
renderer.addItem(s4);

var validItems = [
    s1,
    s2,
    s3,
    s4
];

// Add container items to renderer
renderer.addItem(new Container(canvas, 0, 100, 50, 50, validItems));
renderer.addItem(new Container(canvas, 60, 100, 50, 50, validItems));
renderer.addItem(new Container(canvas, 120, 100, 50, 50, validItems));
renderer.addItem(new Container(canvas, 180, 100, 50, 50, validItems));