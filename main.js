gameOver = false;
isScared = false;
level = 1;

//initializes canvas
Crafty.init(1000, 1000, document.getElementById("game"));

//upper left corner (player start)
const dim1 = { x: 5, y: 5, w: 50, h: 50 };

//bottom right corner (goal)
const dim2 = { x: 950, y: 950, w: 50, h: 50 };

const wall1 = Crafty.e("2D, Canvas, Color")
  .attr({ x: 200, y: 0, w: 40, h: 800 })
  .color("black");

const wall2 = Crafty.e("2D, Canvas, Color")
  .attr({ x: 800, y: 600, w: 40, h: 400 })
  .color("black");

const goal = Crafty.e("2D, Canvas, Color").attr(dim2).color("chartreuse");

const player = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
  .fourway(200)
  .attr(dim1)
  .color("cyan");

player.bind("EnterFrame", function () {
  if (
    goal.x < player.x + player.w &&
    goal.x + goal.w > player.x &&
    goal.y < player.y + player.h &&
    goal.h + goal.y > player.y
  ) {
    //found goal - end of maze

    isScared = true;
    if ((isScared = true)) {
      var scare = document.createElement("audio");
      scare.autoplay = "1";
      scare.src = "scream.mp3";

      var exorcist = document.createElement("img");
      exorcist.src = "exorcist.jpg";
      exorcist.style.zIndex = 1;
      game.append(exorcist);

      game.append(scare);
      gameOver = true;
    }
    gameOver = true;
    if ((gameOver = true)) {
      //   scare.autoplay = false;
    }
  } else if (
    //bump into wall
    (wall1.x < player.x + player.w &&
      wall1.x + wall1.w > player.x &&
      wall1.y < player.y + player.h &&
      wall1.h + wall1.y > player.y) ||
    (wall2.x < player.x + player.w &&
      wall2.x + wall2.w > player.x &&
      wall2.y < player.y + player.h &&
      wall2.h + wall2.y > player.y)
  ) {
    var exorcist = document.createElement("img");
    exorcist.src = "exorcist.jpg";
    exorcist.style.zIndex = 1;
    game.append(exorcist);
    gameOver = true;
    console.log("game over!");

    // No collision
    this.color("cyan");
  }
});
