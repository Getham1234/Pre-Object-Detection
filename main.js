img = "";
status = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResults);
}

function draw(){
    image(img, 0, 0, 640, 420);
    noFill();
    stroke("#FF0000");
    text("Dog", 45, 75);
    rect(30, 60, 450, 350);

    text("Cat", 330, 100);
    rect(300, 80, 260, 320);

    stroke("#0000FF");
    text("Bowl", 290, 320)
    rect(275, 305, 150, 100)
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}