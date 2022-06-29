song1 = "";

song2 = "";

leftWristX = 0;

leftWristY = 0;

rightWristY = 0;

rightWristX = 0;

scoreLeftWrist = 0;

scoreRightWrist = 0;

status_of_song_1 = "";

status_of_song_2 = "";

function preload() {

 song1 = loadSound("music.mp3");

 song2 = loadSound("music2.mp3");

}

function setup() {

 canvas = createCanvas(600,500);

 canvas.center();

 video = createCapture(VIDEO);

 video.hide();
 
 poseNet = ml5.poseNet( video , modelLoaded);

 poseNet.on( "pose", gotPoses );

}

function modelLoaded() {

 console.log("PoseNet Intialized");

}

function gotPoses(results) {

 if(results.length > 0) {

 console.log(results);

 scoreLeftWrist = results[0].pose.keypoints[9].score;

 scoreRightWrist = results[0].pose.keypoints[10].score;

 leftWristX = results[0].pose.leftWrist.x;

 leftWristY = results[0].pose.leftWrist.y;

 rightWristY = results[0].pose.rightWrist.y;

 rightWristX = results[0].pose.rightWrist.x;
  
}

}

function draw() {

 image(video,0 ,0 , 600 ,500);

 status_of_song_1 = "false";

 status_of_song_2 = "false";
 
 fill("#FF0000");

 stroke("#FF0000");

 if(scoreLeftWrist > 0.2) {

 circle( leftWristX , leftWristY , 20);

 song2.isPlaying(false);

 }

 if(status_of_song_1  == "false") {

  song1.isPlaying(true);

  document.getElementById("song_name").innerHTML = "Song Name = Harry Potter";

 }
 
 if(scoreRightWrist > 0.2) {

  circle( leftWristX , leftWristY , 20);
 
  song1.isPlaying(false);
 
  }
 
  if(status_of_song_2  == "false") {
 
   song2.isPlaying(true);
 
   document.getElementById("song_name").innerHTML = "Song Name = Peter Pans";
 
  }

}
