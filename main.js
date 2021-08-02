scoreRightWrist = 0;
scoreLeftWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song = "";
function preload(){
  song = loadSound("music.mp3");
}
function setup(){
   canvas = createCanvas(720,400);
   canvas.center();
   video  = createCapture(VIDEO);
   video.hide();
   canvas.position(350,350)
}
function modelLoaded(){
    console.log("poseNet is initilized!");
  }
  function gotPoses(results){
    if (results.length > 0){
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      rightWristX  = results[0].pose.rightWrist.x;
      rightWristY  = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
      console.log("leftWristX = " + lefttWristX +" leftWristY = "+ leftWristY);
    }
  }
function draw(){
    image(video,0,0,720,400);
    fill(0,100,25);
    rect(90, 40, 460,20);
    rect(90,420,460,20);
    rect(40, 90, 20, 300);
    rect(580,90,20,300);
    fill(0, 0, 128);
    circle(50, 50, 80);
     circle(50, 430, 80);
      circle(590, 50, 80);
       circle(590, 430, 80)
}
function play(){
    song.play();
}

function Pro(){
    window.location.replace="Pro.html";
    window.location="Pro.html";
}

