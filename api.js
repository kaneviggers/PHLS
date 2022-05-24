const axios = require('axios');

const user = 'cam' // CHANGE THIS CONSTANT TO YOUR NAME TO USE YOUR ID AND USERNAME


if (user == 'cam') {
    var URL = "http://192.168.68.142/api/AWNVabbtaLISOqHQ9MAbfB2YmACgfMHINUMcBI4U";
} else if (user == 'kane') {
    var URL = "http://192.168.1.66/api/VZbaIYHIkNqgInHul20P6Ju2j62XO3jxlrApA4hZ";
}

class hueLight {
    id;
    preset;
    sat;
    bri;
    hue;

    constructor(id,preset,sat=null,bri=null,hue=null) {
        this.id = id;
        this.preset = preset;
        this.sat = sat;
        this.bri = bri;
        this.hue = hue;

        console.log(typeof(preset));

        console.log(preset);

        switch(preset) {
            case 1:
            case "defaultWhite":
                console.log('cock');
                this.sat = 0,
                this.bri = 255,
                this.hue = 0,
                console.log('defWhite') // Debug (remove later)
                break
            case 2:
            case "defaultWarm":
                this.sat = 175,
                this.bri = 255,
                this.hue = 8000,
                console.log('defWarm') // Debug (remove later)
                break
            case 3:
            case "defaultCold":
                this.sat = 100,
                this.bri = 255,
                this.hue = 43000,
                console.log('defCold') // Debug (remove later)
                break
            case 4:
            case "red":
                this.sat = 255,
                this.bri = 255,
                this.hue = 0,
                console.log('red') // Debug (remove later)
                break
            case 5:
            case "orange":
                this.sat = 255,
                this.bri = 255,
                this.hue = 5000,
                console.log('orange') // Debug (remove later)
                break
            case 6:
            case "yellow":
                this.sat = 255,
                this.bri = 255,
                this.hue = 9500,
                console.log('yellow') // Debug (remove later)
                break
            case 7:
            case "green":
                this.sat = 255,
                this.bri = 255,
                this.hue = 25000,
                console.log('green') // Debug (remove later)
                break
            case 8:
            case "teal":
                this.sat = 255,
                this.bri = 255,
                this.hue = 34000,
                console.log('teal') // Debug (remove later)
                break
            case 9:
            case "blue":
                this.sat = 255,
                this.bri = 255,
                this.hue = 46000,
                console.log('blue') // Debug (remove later)
                break
            case 10:
            case "purple":
                this.sat = 255,
                this.bri = 255,
                this.hue = 50000,
                console.log('purple') // Debug (remove later)
                break
            case 11:
            case "magenta":
                this.sat = 255,
                this.bri = 255,
                this.hue = 55000,
                console.log('magenta') // Debug (remove later)
                break
            case 12:
            case "pink":
                this.sat = 255,
                this.bri = 255,
                this.hue = 60000,
                console.log('pink') // Debug (remove later)
                break
        }
    }
}

var chooseScene = (scene) => {
    for (light in scenes[scene]) {
        try{
            axios.put(URL + `/lights/${scenes[scene][light].id}/state`, {
                on: true,
                sat: scenes[scene][light].sat,
                bri: scenes[scene][light].bri,
                hue: scenes[scene][light].hue,
            });
        } catch(err) {
            console.error(err);
        }
    }
}

let scenes = {
    "Default" : [
        new hueLight(1, 8)
    ]
}

function disco() {
    var randColor = Math.round(Math.random() * 11) + 1
    var setDiscoColor = new hueLight(1,randColor);
    axios.put(URL + `/lights/${setDiscoColor.id}/state`, {
        on: true,
        sat: setDiscoColor.sat,
        bri: setDiscoColor.bri,
        hue: setDiscoColor.hue,
    });

}

/*function candleLight() {                                                  working on this
    var randColor = Math.round(Math.random() * 100) + 1
    var setDiscoColor = new hueLight(1,randColor);
    axios.put(URL + `/lights/${setDiscoColor.id}/state`, {
        on: true,
        sat: setDiscoColor.sat,
        bri: setDiscoColor.bri,
        hue: setDiscoColor.hue,
    });

}
//setInterval(disco, 100);

//chooseScene("Default");

setInterval(candleLight, 1000)


