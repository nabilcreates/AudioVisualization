var song;
var cnv;

function preload() {
    song = loadSound('./song.mp3')

}

function setup() {

    cnv = createCanvas(512, 512)

    song.play()
    fft = new p5.FFT(0.1, 512)

    // SET VALUE OF INPUT TO 20
    select('.spectruminput').value(20)
}

function draw() {
    background(0)
    console.log()

    var spectrum = fft.analyze()

    
    var band = select('.spectruminput').value()
    var ellipsespec = spectrum[band]

    ellipse(width / 2, height / 2, ellipsespec)

    for (var i = 0; i < spectrum.length; i++) {
        var freq = spectrum[i];
        var y = map(freq, 0, 512, 0, 50)

        stroke(255)
    }

    // PAUSE / PLAY ON CANVAS PRESS
    cnv.mouseClicked(function () {
        if (song.isPlaying()) {
            song.pause()
        } else {
            song.play()
        }
    })

}