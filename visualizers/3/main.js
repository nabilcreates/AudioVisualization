var song;
var cnv;

function preload() {
    song = loadSound('./song.mp3')

}

function setup() {

    cnv = createCanvas(512, 512)

    song.play()
    fft = new p5.FFT(0, 64)

}

function draw() {
    background(0)

    var spectrum = fft.analyze()

    var maxheight = height / 2

    for (var i = 0; i < spectrum.length; i++) {
        var freq = spectrum[i];
        var y = map(freq, 0, 256, 0, maxheight)

        var w = map(i, 0, spectrum.length, 0, width)

        fill(0, w, 60)
        rect(w, 0, 2, y)
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