var trainElement = document.getElementById("train");
var intervalId;
var trainPosition = 10;
var maxPosition = 500;

function moveTrain() {
  trainPosition += 10;
  if (trainPosition <= maxPosition) {
    trainElement.style.left = trainPosition + "px";
  } else {
    clearInterval(intervalId);
  }
}

function startMoving() {
  intervalId = setInterval(moveTrain, 100);
}

function stopMoving() {
  clearInterval(intervalId);
  trainPosition = 10;
  trainElement.style.left = trainPosition + "px";
}
