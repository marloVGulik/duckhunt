var ducks = [
    
];

for(var i = 0; i < 100; i++) {
    ducks.push(new Duck());
}

// console.log(duck);
// duck.destroy();


var gameCounter = 0;
var scoreCounter = 0;

var hitsHTML = document.getElementById("hits");
var missHTML = document.getElementById("miss");

hitsHTML.innerHTML = "0 hits";
missHTML.innerHTML = "0 miss";

function updateGame(hit, id) {
    gameCounter++;
    scoreCounter += hit;

    for(var i = 0; i < ducks.length; i++) {
        if(ducks[i].isMyId(id)) {
            ducks[i].destroy();
            ducks.splice(i, 1);
        }
    }

    hitsHTML.innerHTML = scoreCounter + " hits";
    missHTML.innerHTML = scoreCounter - gameCounter + " miss";

    if(gameCounter >= 20) {
        console.error("restart");
    }
    
}