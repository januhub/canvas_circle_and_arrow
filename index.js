// create a canvas context by id myCanvas
var ctx = document.getElementById('myCanvas').getContext('2d');

// create a circle with black stroke and filled with blue with radius 50px
var intersectionX = 175;
const initialX = 350;
const initialY = 65;

renderPicture = function (arrowX, arrowY) {

    // circl arrow hit x coordinate


    // create a canvas context by id myCanvas
    var ctx = document.getElementById('myCanvas').getContext('2d');

    // create a circle with black stroke and filled with blue with radius 50px
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = arrowX > intersectionX ? 'blue' : 'yellow';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // create a rectangle with 50px height and 200px width with a black stroke and filled with black
    arrowWidth = 50

    ctx.beginPath();
    ctx.rect(arrowX, arrowY, 125, 20);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // attach a black triagle at the left side of the  above rectangle
    ctx.beginPath();
    ctx.moveTo(arrowX, arrowWidth);
    ctx.lineTo(arrowX, 100);
    ctx.lineTo(arrowX - arrowWidth, 75);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


// create a function called moveArrow which will move the arrow to the right
function moveArrow() {



    var x = initialX;
    var y = initialY;
    var interval = setInterval(function () {
        // get the canvas context and clear all 
        var ctx = document.getElementById('myCanvas').getContext('2d');
        ctx.clearRect(0, 0, 500, 500);

        console.log(x, 'x');
        x -= 5;
        renderPicture(x, y);
        if (x <= intersectionX) {
            clearInterval(interval);
        }
    }
        , 100);
}

function reset() {
    var ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    renderPicture(initialX, initialY);
}

reset();