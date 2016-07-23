 /*
  * Variable Declaration
  */
var leftLocationY = 150;
var rightLocationY = 150;
var context = null;
var requestID;
var ballX = 300, ballY = 200;
var directionX, directionY;
var speed = 2;
var paddleDirection;
var leftPlayerScore = 0, rightPlayerScore = 0;
var colour = "#CFCFC4";
var mouseLocation;
var canvasMinY;
var buttonCounter = 0;

 /*
  * Main call for the program
  */
beforeInit();

 /*
  * This function draws the game board and starts main loop when the start button is clicked.
  */
function beforeInit(){
    context = $('#pongMouse')[0].getContext("2d");
    renderNet();
    renderLeft();
    renderRight();
    drawScores();
    $('#start').click(init);

}

 /*
  * This function draws the net on the pitch
  */
function renderNet(){
    context.lineWidth = "5";
    context.strokeStyle = colour;
    context.beginPath();
    context.moveTo(300 ,20);
    context.lineTo(300, 60);
    context.moveTo(300 ,100);
    context.lineTo(300, 140);
    context.moveTo(300 ,180);
    context.lineTo(300, 220);
    context.moveTo(300 ,260);
    context.lineTo(300, 300);
    context.moveTo(300 ,340);
    context.lineTo(300, 380);
    context.closePath();
    context.stroke();
}

 /*
  * This function draws the player paddle on the pitch
  */
function renderLeft(){
    context.fillStyle = colour;
    context.beginPath();
    context.rect(30, leftLocationY, 7, 100);
    context.closePath();
    context.fill();
}

 /*
  * This function draws the AI paddle on the pitch
  */
function renderRight(){
    context.fillStyle = colour;
    context.beginPath();
    context.rect(570, rightLocationY, 7, 100);
    context.closePath();
    context.fill();
}

 /*
  * This function renders and moves the ball on the pitch. The movement is caused by the updating shown later
  */
function renderBall(){

    if(ballY <= 0){
        directionY = 1;
        setSpeed();
    } else if (ballY >= 400){
        directionY = -1;
        setSpeed();
    }

    if(directionX == 1)
    {
        ballX +=4;
    }
    else{
        ballX -=4;
    }

    if(directionY == 1)
    {
        ballY += speed;
    }
    else{
        ballY -= speed;
    }

    context.lineWidth = "10";
    context.strokeStyle = colour;
    context.beginPath();
    context.moveTo(ballX, ballY);
    context.lineTo(ballX, ballY + 10);
    context.closePath();
    context.stroke();
}

 /*
  * This function clears everything on the canvas
  */
function clearCanvas(){
    context.clearRect(0, 0, 600, 400);
}

 /*
  * This function randomly selects a speed for the ball
  */
function setSpeed(){
    speed = Math.random() * 4;
}

 /*
  * This function is called when the player moves his mouse onto the canvas. It also adjusts the paddle accordingly.
  */
function onMouseMove(event){

    mouseLocation = event.pageY - canvasMinY;

    if(leftLocationY >= 0 && (leftLocationY + 100) <= 400)
        leftLocationY = mouseLocation;
    else if(leftLocationY < 0)
    {
        leftLocationY = 0;
    }
    else if(leftLocationY + 100 > 400)
    {
        leftLocationY = 300;
    }
}

 /*
  * This function is called every frame for the AI to move and try to hit the ball. The AI will only move if the ball
  * is past half way on the board.
  */
function AI(){

    if(ballX > 300) {
        if(rightLocationY == 0){
            paddleDirection = 1;
        }else if(rightLocationY + 100 == 400){
            paddleDirection = -1;
        }

        if(ballY > rightLocationY+100){
            paddleDirection = 1;
        }else if(ballY < rightLocationY){
            paddleDirection = -1;
        }


        if (paddleDirection == 1) {

            if(!((ballY < rightLocationY + 95) && (ballY > rightLocationY + 3))) {
                rightLocationY += 3;
            }

        }
        else {
            if(!((ballY < rightLocationY + 100) && (ballY > rightLocationY))) {
                rightLocationY -= 3;
            }
        }
    }
}

 /*
  * This function is called every frame to detect whether the ball hits the player paddle and reflects accordingly
  */
function detectLeftCollision(){
    if (ballX >= 35 && ballX <= 39) {
        if ( (ballY  <= leftLocationY + 110) && (ballY  >= leftLocationY - 10)) {
            directionX = 1;

            if(ballY < leftLocationY + 33){
                directionY = -1;
                setSpeed();
            }

            if(ballY > leftLocationY + 66){
                directionY = 1;
                setSpeed();
            }


        }


    }
}

 /*
  * This function is called every frame to detect whether the ball hits the AI paddle and reflects accordingly
  */
function detectRightCollision(){
    if (ballX >= 568 && ballX <= 572) {
        if ( (ballY <= rightLocationY + 110) && (ballY >= rightLocationY - 10)) {
            console.log("Hit");
            directionX = -1;
            if(paddleDirection == 1){
                paddleDirection = -1;
            }else{
                paddleDirection = 1;
            }

            if(ballY < rightLocationY + 33){
                directionY = -1;
                setSpeed();
            }

            if(ballY > rightLocationY + 66){
                directionY = 1;
                setSpeed();
            }
        }
    }
}

 /*
  * This function checks to see if the ball goes past the paddles to detect a win and increments the score counter
  */
function detectWin(){
    if(ballX < 30){
        rightPlayerScore +=1;
        ballX = 300;
        ballY = 200;
        temp = Math.random()*2;
        if(temp <= 1){
            directionY = -1;
        }else{
            directionY = 1;
        }
    }
    if(ballX > 577){
        leftPlayerScore +=1;
        ballX = 300;
        ballY = 200;
        temp = Math.random()*2;
        if(temp <= 1){
            directionY = -1;
        }else{
            directionY = 1;
        }
    }

    if(leftPlayerScore == 7){
        finishGame("HUMAN");
    }else if (rightPlayerScore == 7){
        finishGame("COMPUTER");
    }


}

 /*
  * This function draws the scores on the screen and updates every frame.
  */
function drawScores(){
    context.font = "32px sans-serif";
    context.fillText(leftPlayerScore.toString(), 200, 50);
    context.fillText(rightPlayerScore.toString(), 385, 50);
}

 /*
  * This function draws the scores on the screen and updates every frame.
  */
function finishGame(winner){

    cancelAnimationFrame(requestID);
    $("#winnerArea").html("<p>" + winner + " WINS!!!</p>")

}

 /*
  * This function is the main game loop. It is called every screen update and detects for mouse movement, redraws
  * elements and controls the AI movement.
  */
function update(){
    clearCanvas();
    detectWin();
    drawScores();
    detectLeftCollision();
    detectRightCollision();

    $(document).mousemove(onMouseMove);
    AI();
    renderNet();
    renderLeft();
    renderRight();
    renderBall();
}

 /*
  * This function is the first called when the start button is pressed. It renders the ball on the screen and
  * starts the screen update process. It also works out the location of the canvas and it's max and min locations for
  * the mouse movement
  */
function init(){
    canvasMinY = $('#pongMouse').offset().top;
    canvasMinY +=( ($('#pongMouse').outerHeight() - $('#pongMouse').height()) / 2);
    buttonCounter++;

    if(buttonCounter == 1) {
        renderBall();
        setTimeout(nextFrame, 1000);
    }
}

 /*
  * This function is what performs the 60 frames per seconds on the screen.
  */
function nextFrame() {
    requestID = requestAnimationFrame(nextFrame);
    update();
}
