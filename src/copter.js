export class Copter {
    constructor (scale, x=1, y=1) {
        this.x = x*scale;
        this.y = y;
        this.scale = scale;
        this.blades = [0, 4];
    }
    step() {
        if(this.x>320) {
            this.x = 0-24;
        }
        this.x+=1;
        for(let i in this.blades) {
            this.blades[i] += 1;
            if(this.blades[i]===this._bladePhases.length) this.blades[i]=0;
        }
        //console.log("step", this.blades[0],this.blades[1]);
    }
    draw (ctx) {
        //корпус
        ctx.fillStyle = "white";
        ctx.fillRect(this._x(15), this._y(1), this._size(2), this._size(1));
        ctx.fillRect(this._x(12), this._y(2), this._size(8), this._size(1));
        ctx.fillRect(this._x(1), this._y(3), this._size(11), this._size(1));
        ctx.fillRect(this._x(16), this._y(3), this._size(5), this._size(1));
        ctx.fillRect(this._x(5), this._y(4), this._size(5), this._size(1));
        ctx.fillRect(this._x(17), this._y(4), this._size(5), this._size(1));
        ctx.fillRect(this._x(10), this._y(5), this._size(1), this._size(1));
        ctx.fillRect(this._x(21), this._y(5), this._size(1), this._size(1));
        ctx.fillRect(this._x(11), this._y(6), this._size(1), this._size(1));
        ctx.fillRect(this._x(20), this._y(6), this._size(1), this._size(1));
        ctx.fillRect(this._x(12), this._y(7), this._size(8), this._size(1));
        //лыжа
        ctx.fillStyle = "#55ffff";
        ctx.fillRect(this._x(13), this._y(8), this._size(1), this._size(1));
        ctx.fillRect(this._x(18), this._y(8), this._size(1), this._size(1));
        ctx.fillRect(this._x(23), this._y(8), this._size(1), this._size(1));
        ctx.fillRect(this._x(8), this._y(9), this._size(15), this._size(1));

        //пропеллер
        ctx.fillStyle = "#ff55ff";
        ctx.fillRect(this._x(10), this._y(0), this._size(12), this._size(1));
        
        ctx.fillRect(
            this._x(this._bladePhases[this.blades[0]].x), 
            this._y(this._bladePhases[this.blades[0]].y+2), 
            this._size(1), 
            this._size(1)
        );
        ctx.fillRect(this._x(1), this._y(3), this._size(1), this._size(1));
        ctx.fillRect(
            this._x(this._bladePhases[this.blades[1]].x), 
            this._y(this._bladePhases[this.blades[1]].y+2), 
            this._size(1), 
            this._size(1)
        );
        /*
        0:{x:1,y:2}, 2:2
        0:3     2:3
        0:{x:1,y:4}, 2:4

        {x:0,y:0},
        {x:1,y:0},
        {x:2,y:0},
        {x:2,y:1},
        {x:2,y:2},
        {x:1,y:2},
        {x:0,y:2},
        {x:0,y:1},
        */

    }
    _x(num) {
        return this.x+num*this.scale;
    }
    _y(num) {
        return this.y+num*this.scale;
    }
    _size(num) {
        return num*this.scale;
    }
    _bladePhases = [
        {x:0,y:0},
        {x:1,y:0},
        {x:2,y:0},
        {x:2,y:1},
        {x:2,y:2},
        {x:1,y:2},
        {x:0,y:2},
        {x:0,y:1},
    ]
}