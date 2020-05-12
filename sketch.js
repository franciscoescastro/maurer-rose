let rose = {
  petals: 6,
  angle: 71
};

function setup() {
  let canvas = createCanvas(600, 500)
  canvas.parent('canvas-container')
  angleMode(DEGREES)
  setUpRoseSelector()
}

function draw() {
  background(0)
  translate(width / 2, height / 2)
  stroke(255)
  strokeWeight(0.3)
  noFill()
  beginShape()
  for(let a = 0; a <= 360; a++) {
    let angle = a * rose.angle
    let r = 230 * sin(rose.petals * angle)
    let x = r * cos(angle)
    let y = r * sin(angle)
    vertex(x, y)
  }
  endShape()
}

function setUpRoseSelector() {
  let selectRose = document.getElementById('select-rose')
  selectRose.value = 5
  selectRose.addEventListener('change', event => {
    switch(parseInt(event.target.value)) {
      case 1:
        rose.petals = 2
        rose.angle = 39
        break;
      case 2:
        rose.petals = 3
        rose.angle = 47
        break;
      case 3:
        rose.petals = 4
        rose.angle = 31
        break;
      case 4:
        rose.petals = 5
        rose.angle = 97
        break;
      case 5:
        rose.petals = 6
        rose.angle = 71
        break;
      case 6:
        rose.petals = 7
        rose.angle = 19
        break;
    }
  })
}