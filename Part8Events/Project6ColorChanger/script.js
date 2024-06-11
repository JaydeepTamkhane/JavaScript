// the color is in the form #RRGGBB
// so total 7 value and first is #

let radomValue = function () {
  return Math.floor(Math.random() * 16);
};

let randomColor = function () {
  let color = "#";
  let hexValues = "0123456789ABCDEF";
  // total 7 vlaue # is done so 6 remaining
  for (let i = 0; i < 6; i++) {
    color += hexValues[radomValue()];
  }
  return color;
};

let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");

let interval;
startButton.addEventListener("click", function (e) {
  interval = setInterval(function () {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
});

stopButton.addEventListener("click", function () {
  clearInterval(interval);
});
