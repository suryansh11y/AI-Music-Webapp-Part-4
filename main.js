
song = "";
song1 = "";
song1_status = "";
song2_status = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function preload()
{
    song = loadSound("Imagin.mp3.mp3");
    song1 = loadSound("Counting.mp3.mp3");
}

function setup() {
    canvas = createCanvas(400, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);

    song1_status = song.isPlaying();
    song2_status = song1.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2){
        circle(rightWristX,rightWristY,20);
        song1.stop();
        if(song1_status == false){
            song.play();
            document.getElementById("sas").innerHTML = "Playing Imgagin Thunder Song ";
        }
    }

    
    if(scoreLefttWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song1.stop();
        if(song2_status == false){
            song1.play();
            document.getElementById("sas").innerHTML = "Playing Counting  Stars Song "
        }
    




}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log('Posenet Is Initialized ')
}



function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX  + " leftWristY = "+ leftWristY );

        rightWristX =results[0].pose.rightWrist.x;
        rightWristY =results[0].pose.rightWrist.y;

        console.log("rightWristX =" + rightWristX  + " rightWristY = "+ rightWristY );
    }
}


