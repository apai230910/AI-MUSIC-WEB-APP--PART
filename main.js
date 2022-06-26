song1 = "";

song2 = "";

leftWristX = 0;

leftWristY = 0;

rightWristY = 0;

rightWristX = 0;

scoreLeftWrist = 0;

scoreRightWrist = 0;

status_of_song = "";

function preload() {

 song1 = loadSound("music.mp3");

 song2 = loadSound("music2.mp3");

}

function setup() {

 canvas = createCanvas(600 ,500);

 canvas.center();

 video = createCapture(VIDEO);

 video.hide();
 
 poseNet = ml5.poseNet( video , modalLoaded);

 poseNet.on( "pose", gotPoses );

}

function modalLoaded() {

 console.log("PoseNet Intialized");

}

function gotPoses(results) {

 if(results.length > 0) {

 console.log(results);

 scoreLeftWrist = results[0].pose.keypoints[9].score;

 leftWristX = results[0].pose.leftWrist.x;

 leftWristY = results[0].pose.leftWrist.y;

 rightWristY = results[0].pose.rightWrist.y;

 rightWristX = results[0].pose.rightWrist.x;
  
}

}

function draw() {

 image(video,0 ,0 , 600 ,500);

 fill("#FF0000");

 stroke("#FF0000");

 if(scoreLeftWrist > 0.2) {

 song2.isPlaying(false);
  
 song1.isPlaying(true);

 }
 
 if(scoreLeftWrist > 0.2) {

 song1.isPlaying(false);
  
 song2.isPlaying(true);

 }

}