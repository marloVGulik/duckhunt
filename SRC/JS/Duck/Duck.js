class Duck {
    duckHTML = null;
    duckHTMLId = 0;
    duckPos = 0;
    updateInterval = null;

    constructor() {
        var body = document.getElementsByTagName("body")[0];
        this.duckPos = new Vec2(screen.width / 2 - 125, screen.height / 2 - 125);
        // console.log(this.duckPos);

        do {
            this.duckHTMLId = "Duck" + Math.floor(Math.random() * 1000);
        } while(document.getElementById(this.duckHTMLId));

        this.duckHTML = document.createElement("img");
        this.duckHTML.src = "SRC/Images/duck.gif";
        this.duckHTML.classList.add("duck");
        this.duckHTML.id = this.duckHTMLId;
        this.duckHTML.style.left = this.duckPos.x + "px";
        this.duckHTML.style.top = this.duckPos.y + "px";
        this.duckHTML.onclick = function() {
            updateGame(1, this.id);
        };
        body.appendChild(this.duckHTML);

        var updateFun = this.update;
        // this.updateInterval = setInterval(function(duckPos, duckHTML){updateFun(duckPos, duckHTML)}, 15, this.duckPos, this.duckHTML);
        this.updateInterval = setInterval(function(duck){updateFun(duck)}, 1500, this);
    }

    // update(duckPos, duckHTML) {
    update(duck) {
        var action;
        var count = 0;
        do {
            count++;


            action = actions[Math.floor(Math.random() * actions.length)];
            // for(var i = 0; i < 25; i++) {
            //     actions[i + 8] = action;
            // }
            if(duck.duckPos == undefined) {
                duck.duckPos = new Vec2(screen.width / 2, screen.height / 2);
                console.error("Duck position is undefined");
            }
            duck.duckPos = duck.duckPos.add(new Vec2(action.multiply(10).x, action.multiply(10).y));

            // console.error(duck.duckPos.outside(new Vec2(0, 0), new Vec2(screen.width, screen.height)));

        } while(!duck.duckPos.outside(new Vec2(0, 0), new Vec2(screen.width - 125, screen.height - 125)) && count < 1000);

        if(count == 1000) {
            console.error("Considering duck to be in illegal position! Resetting to default ");
            duck.duckPos = new Vec2(screen.width / 2 - 125, screen.height / 2 - 125);
            return;
        }

        // console.log("Adding " + action.x + ", " + action.y + " to " + duck.duckPos.x + ", " + duck.duckPos.y);
        duck.duckHTML.style.left = duck.duckPos.x + "px";
        duck.duckHTML.style.top = duck.duckPos.y + "px";
    }

    isMyId(id) {
        return id == this.duckHTMLId;
    }

    destroy() {
        this.duckHTML.parentNode.removeChild(this.duckHTML);
        clearInterval(this.updateInterval);
    }
}

var actions = [
    new Vec2(0, 1),
    new Vec2(1, 1),
    new Vec2(1, 0),
    new Vec2(1, -1),
    new Vec2(0, -1),
    new Vec2(-1, -1),
    new Vec2(-1, 0),
    new Vec2(-1, 1)
];


console.log("Duck loaded");