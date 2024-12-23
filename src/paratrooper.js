export class Paratrooper {
    constructor (scale, x=1, y=182) {
        this.x = x;
        this.y = y;
        this.scale = scale;
    }
    step() {
        
    }
    draw (ctx) {
        //голова
        ctx.fillStyle = "white";
        ctx.fillRect(this.x+1, this.y, 2, 2);
        //туловище
        ctx.fillStyle = "#55ffff";
        ctx.fillRect(this.x+1, this.y+2, 2, 3);
        //руки
        ctx.fillRect(this.x, this.y+2, 1, 1);
        ctx.fillRect(this.x+3, this.y+2, 1, 1);
        //ноги
        ctx.fillRect(this.x, this.y+5, 1, 3);
        ctx.fillRect(this.x+3, this.y+5, 1, 3);
    }
}