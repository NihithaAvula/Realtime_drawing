noseX = 0;
noseY = 0;
lefttWristX = 0;
rightWristX = 0;
difference = 0;

function preload(){

}

function setup(){
 canvas = createCanvas(500,500);
 canvas.position(700,110);
 video = createCapture(VIDEO);
 video.size(500,500);
 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw(){
background("#FF2A2A");
document.getElementById("square_side").innerHTML = "sides of the square = "+difference+"px";
fill("#000000");
stroke("#000000");
square(noseX,noseY,difference);
}


function gotPoses(results){
if(results.length> 0){
    console.log(results);
    console.log("noseX = " + results[0].pose.nose.x);
    console.log("noseY = " + results[0].pose.nose.y);
    console.log("rightWristX= " + results[0].pose.rightWrist.x);
    console.log("leftWristX = " + results[0].pose.leftWrist.x);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    lefttWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(lefttWristX-rightWristX);
    console.log("difference ="+difference);

}
}