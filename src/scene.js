export class Scene {
    constructor (scale) {
        this.scale = scale;
    }
    step() {
        
    }
    draw (ctx) {
        ctx.clearRect(0, 0, 320, 200);
        ctx.fillStyle = "#55ffff";
        ctx.fillRect(0, this._size(200)-this._size(10), this._size(320), this._size(1));
    }
    _size(num) {
        return num*this.scale;
    }
}