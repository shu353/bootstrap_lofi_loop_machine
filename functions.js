function play(str) {
  const displayText = (document.getElementById("display").innerHTML =
    "Lofi loop: " + str);
  const audio = document.getElementById(str);

  audio.play();
}

window.document.onkeyup = (event) => {
  const keyPressed = event.key;

  switch (keyPressed) {
    case ("Q", "q"):
      play("Q");
      break;
    case ("W", "w"):
      play("W");
      break;
    case ("E", "e"):
      play("E");
      break;
    case ("A", "a"):
      play("A");
      break;
    case ("S", "s"):
      play("S");
      break;
    case ("D", "d"):
      play("D");
      break;
    case ("Z", "z"):
      play("Z");
      break;
    case ("X", "x"):
      play("X");
      break;
    case ("C", "c"):
      play("C");
      break;
    default:
      break;
  }
};
