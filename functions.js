function play(str) {
  const displayText = (document.getElementById("display").innerHTML =
    "Lofi loop: " + str);
  const audio = document.getElementById(str);

  audio.play();
}

window.document.onkeyup = (event) => {
  const keyPressed = event.key;

  switch (keyPressed) {
    case "Q":
    case "q":
      play("Q");
      break;
    case "W":
    case "w":
      play("W");
      break;
    case "E":
    case "e":
      play("E");
      break;
    case "A":
    case "a":
      play("A");
      break;
    case "S":
    case "s":
      play("S");
      break;
    case "D":
    case "d":
      play("D");
      break;
    case "Z":
    case "z":
      play("Z");
      break;
    case "X":
    case "x":
      play("X");
      break;
    case "C":
    case "c":
      play("C");
      break;
    default:
      break;
  }
};
