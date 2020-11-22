(() => {
  const clearBody = () => {
    const body = document.getElementsByTagName('body')[0];
    body.querySelectorAll('*').forEach(element => element.remove());
  }

  const setupGameArea = () => {
    const gameArea = document.createElement('div');
    gameArea.className += 'gameArea';
    gameArea.id = 'gameArea';
    gameArea.setAttribute('tabindex','0');
    document.body.appendChild(gameArea);
  }

  const launchGame = () => {
    new SNAKE.Board({
      boardContainer: "gameArea",
      fullScreen: true,
    });
    document.getElementsByTagName('body')[0].classList.add('page-snake');
  }

  const snake = () => {
    clearBody();
    setupGameArea();
    launchGame();
  };

  const konami = () => {
    const easter_egg = new Konami();
    easter_egg.code = snake;
    easter_egg.load();
  };

  konami();
})();
