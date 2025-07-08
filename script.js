const message = `Feliz aniversário, gatinha!!! 🎉🎂

Hoje é o seu dia e eu espero que ele seja tão doce quanto o seu sorriso e tão especial quanto você é para mim. Que cada instante seja cheio de carinho, paz, alegria e muito amor.

Com amor, Helo. 💖`;

let index = 0;

function openMessage() {
  const box = document.getElementById("messageBox");
  const text = document.getElementById("typedText");
  const cat = document.getElementById("cat");
  const music = document.getElementById("bgMusic");

  music.play();
  box.style.display = "block";
  typeWriter();
  launchConfetti();

  function typeWriter() {
    if (index < message.length) {
      text.innerHTML += message.charAt(index);
      index++;
      setTimeout(typeWriter, 40);
    } else {
      setTimeout(() => {
        cat.style.display = "block";
      }, 1000);
    }
  }
}

function launchConfetti() {
  const confetti = document.getElementById("confetti");
  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");
    piece.style.left = Math.random() * 100 + "%";
    piece.style.backgroundColor = ["#ff69b4", "#ffb6c1", "#ff1493", "#ffa07a"][Math.floor(Math.random() * 4)];
    piece.style.animationDuration = (Math.random() * 2 + 3) + "s";
    confetti.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5000);
  }
}
