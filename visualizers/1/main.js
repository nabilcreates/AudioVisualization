var song;
var cnv;

function preload(){
    song = loadSound('./song.mp3')
    
}

function setup(){

    cnv = createCanvas(512,512)
    
    song.play()
    fft = new p5.FFT(0,512)
    
}

function draw(){
    background(0)

    var spectrum = fft.analyze()

    for(var i = 0; i < spectrum.length; i++){
        var freq = spectrum[i];
        var y = map(freq , 0 , 256 , 0 , height)

        stroke(255)
        line(i,height,i,y)
    }
    
    // PAUSE / PLAY ON CANVAS PRESS
    cnv.mouseClicked(function(){
        if(song.isPlaying()){
            song.pause()
        }else{
            song.play()
        }
    })
    
}
