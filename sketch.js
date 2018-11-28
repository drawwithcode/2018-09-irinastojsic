var myMap;
var canvas;
var mappa = new Mappa('Leaflet');

var somborLat = 45.773295;
var somborLon = 19.1151469;

var options = {
  lat:somborLat,
  lng:somborLon,
  zoom:5,
  style:'http://{s}.tile.osm.org/{z}/{x}/{y}.png'

}

var image1;
var image2;
var image3;
var image4;
var image5;

function preload(){

image1 = loadImage('./assets/so1.jpg');
image2 = loadImage('./assets/so2.jpg');
image3 = loadImage('./assets/so3.jpg');
image4 = loadImage('./assets/so4.jpg');
image5 = loadImage('./assets/so5.jpg');

}

function setup() {
createCanvas(windowWidth, windowHeight);

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

}

function draw() {
  clear();

fill('gray');
var point = myMap.latLngToPixel(somborLat, somborLon);
ellipse(point.x, point.y, 15);

textSize(25);
fill('gray');
textFont('Arial');
text('Now you know where is Serbia', 70, 50);
text('Press to see Sombor', 105, 80);

if(mouseIsPressed) {
  image(image1, 150, 150, 450, 350);
  image(image2, 750, 70, 500, 350);
  image(image3, 150, 650, 500, 300);
  image(image4, 1750, 600, 400, 400);
  image(image5, 1650, 70, 500, 350);
  }

}



