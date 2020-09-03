class Vec2 {
    x = 0;
    y = 0;

    constructor(tmpX = 0, tmpY = 0) {
        this.x = tmpX;
        this.y = tmpY;
    }

    add(otherVec2) {
        return new Vec2(otherVec2.x + this.x, otherVec2.y + this.y);
    }
    multiply(amount) {
        return new Vec2(this.x * amount, this.y * amount);
    }
    outside(tr, bl) {
        return tr.x < this.x && tr.y < this.y && bl.x > this.x && bl.y > this.y;
    }
}

console.log("Vector loaded");