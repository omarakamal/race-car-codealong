window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game


  restartButton.addEventListener('click',()=>{
    location.reload()
  })


  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");

    //creating a new instance of my game class
    game = new Game()

    //call the start method
    game.start()


  }

  
  let time = 0
  let gameInterval = setInterval(() => {
    time++
    // console.log(time)
  }, 1000);

  window.addEventListener('keydown', (event) => {
    // console.log(event.key)



    if (time > 10) {
      if (event.key === 'ArrowUp') {
        game.player.directionY = -10
      }
      else if (event.key === "ArrowDown") {
        game.player.directionY = 10
      }
      else if (event.key === "ArrowLeft") {
        game.player.directionX = -10
      }
      else if (event.key === "ArrowRight") {
        game.player.directionX = 10
      }
    }
    else {
      if (event.key === 'ArrowUp') {
        game.player.top -=10
      }
      else if (event.key === "ArrowDown") {
        game.player.top +=10
      }
      else if (event.key === "ArrowLeft") {
        game.player.left -=10
      }
      else if (event.key === "ArrowRight") {
        game.player.left +=10
      }
    }

  })


  window.addEventListener('keyup', (event) => {
    // console.log(event.key)

    if (event.key === 'ArrowUp') {
      game.player.directionY = 0
    }
    else if (event.key === "ArrowDown") {
      game.player.directionY = 0
    }
    else if (event.key === "ArrowLeft") {
      game.player.directionX = 0
    }
    else if (event.key === "ArrowRight") {
      game.player.directionX = 0
    }
  })

};




const lastElement = document.getElementById('last-element')

lastElement.addEventListener('click', (event) => {
  console.log(event)
})









/* 
steps:

1. create the game area

2. start the game (hide the intro screen and show the game screen)

3. creating the player

*/