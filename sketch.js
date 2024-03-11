function setup() {
    createCanvas(1000, 1000);
    background("green");
    
  }
  
  function draw() {
    
    stroke("orange");
    fill ("orange");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 5, 5);
    }
  }