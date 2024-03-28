let sunSize = 50; // Dimensiunea soarelui
let numPlanets = 5; // Numărul de planete
let planetSizes = [40, 30, 25, 35, 27]; // Dimensiunile mai mari ale planetelor
let orbitRadii = [100, 150, 200, 250, 300]; // Razele orbitei
let orbitColors = ["#FFD700", "#7FFFD4", "#FFA07A", "#87CEEB", "#FF6347"]; // Culorile orbitei
let planetColors = ["#FFFFFF", "#A9A9A9", "#32CD32", "#1E90FF", "#FF4500"]; // Culorile planetelor
let angles = [2, 1, 3, 9, 7]; // Unghiurile inițiale ale planetelor
let rotationSpeeds = [0.005, 0.004, 0.003, 0.002, 0.001]; // Viteza de rotație a planetelor

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
 translate(width/2,height/2);

  // Desenare soare
  fill(255, 200, 0);
  ellipse(0, 0, sunSize, sunSize);

  // Desenare planetelor și orbitele lor
  for (let i = 0; i < numPlanets; i++) {
    let x = orbitRadii[i] * cos(angles[i]);
    let y = orbitRadii[i] * sin (angles[i]);
    
    // Desenare orbite
     noFill();
    stroke(orbitColors[i]);
    ellipse(0, 0, orbitRadii[i] * 2, orbitRadii[i] * 2);
    
    // Desenare planetă
    fill(planetColors[i]);
    ellipse(x, y, planetSizes[i], planetSizes[i]);
    
    angles[i] += rotationSpeeds[i]; // Viteza de rotație a planetelor
  }
}

