let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);

  line(data.x, data.x + 200, data.y, data.y - 200);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("beige");
}

function draw() {
  line(mouseX, mouseX * 2, mousey, mouseY * 2);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  clientSocket.emit("mouse", message);
}
