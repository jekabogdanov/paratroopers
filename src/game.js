import { Paratrooper } from "./paratrooper";
import { Copter } from "./copter";
import { Scene } from "./scene";

document.querySelector('#app').innerHTML = `
  <div>
    <canvas id="canvas" width="320" height="200" style="background-color: black"></canvas>
  </div>
`

const ctx = document.getElementById("canvas").getContext("2d");
const SCALE = 1;

let scene = new Scene(SCALE);
let paratrooper = new Paratrooper(SCALE);
let copter = new Copter(SCALE);


requestAnimationFrame(game);

function game() {
    step();
    render();
    requestAnimationFrame(game);
}
function step() {
    paratrooper.step();
    copter.step();
}
function render() {
    scene.draw(ctx);
    paratrooper.draw(ctx);
    copter.draw(ctx);
}
