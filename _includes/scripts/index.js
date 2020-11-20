(() => {
  const robots = () => {
    const robotContainer = document.querySelector('.hero .robots');
    const links = [...document.querySelectorAll('.hero h1 a')];
    const robots = [...document.querySelectorAll('.hero .robots .robot')];

    const showRobot = robot => robot.classList.add('visible');
    const hideRobot = robot => robot.classList.remove('visible');
    const hideAllRobots = () => robots.map(hideRobot);
    const isRobotActive = (robot) => robot.classList.contains('active');
    const isRobotVisible = (robot) => robot.classList.contains('visible');

    const startRobot = robot => {
      robot.classList.add('active');
      robot.play();
    };

    const stopRobot = robot => {
      robot.classList.remove('active');
      robot.pause();
      robot.currentTime = 0;
    }

    const stopAllRobots = () => robots.map(stopRobot);

    const toggleRobot = (robot) => {
      if (isRobotActive(robot)) {
        stopRobot(robot);
      } else {
        startRobot(robot);
      }
    }

    const handleRobotChange = (event) => {
      const elementIndex = links.indexOf(event.target);
      const selectedRobot = robots[elementIndex];

      if (!isRobotVisible(selectedRobot)) {
        stopAllRobots();
        hideAllRobots();
        showRobot(selectedRobot);
      }
    }

    robotContainer.addEventListener('click', () => {
      const visibleRobot = document.querySelector('.hero .robots .robot.visible');
      toggleRobot(visibleRobot);
    });

    links.forEach((link) => link.addEventListener('mouseenter', handleRobotChange));

    setTimeout(() => {
      document.querySelector('.logo').classList.remove('activated');
      stopAllRobots();
    }, 1500);
  }

  robots();
})();
