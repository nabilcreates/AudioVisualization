var song;
var cnv;

function preload(){
    song = loadSound('path/to/your/song.mp3')
}

function setup(){
    cnv = createCanvas(512,512)
}

function draw(){
    // YOU CAN CHANGE THE BACKGROUND COLOR, ITS OKAY :)
    background(0)

    // START YOUR CODE HERE
    
    // PAUSE / PLAY ON CANVAS PRESS [DO NOT REMOVE]
    cnv.mouseClicked(function(){
        if(song.isPlaying()){
            song.pause()
        }else{
            song.play()
        }
    })
    
}
