const axios = require('axios');

class hueLight {
    preset;
    sat;
    bri;
    hue;

    constructor(preset,sat=null,bri=null,hue=null) {
        this.preset = preset;
        this.sat = sat;
        this.bri = bri;
        this.hue = hue;

        switch(preset) {
            case "default_white":
                this.sat = 0,
                this.bri = 255,
                this.hue = 0
                break
            case "default_warm":
                this.sat = 175,
                this.bri = 255,
                this.hue = 8000
                break
            case "default_cold":
                this.sat = 100,
                this.bri = 255,
                this.hue = 43000
                break
            case "red":
                this.sat = 255,
                this.bri = 255,
                this.hue = 0
                break
            case "orange":
                this.sat = 255,
                this.bri = 255,
                this.hue = 5000
                break
            case "yellow":
                this.sat = 255,
                this.bri = 255,
                this.hue = 9500
                break
            case "green":
                this.sat = 255,
                this.bri = 255,
                this.hue = 25000
                break
            case "teal":
                this.sat = 255,
                this.bri = 255,
                this.hue = 34000
                break
            case "blue":
                this.sat = 255,
                this.bri = 255,
                this.hue = 46000
                break
            case "purple":
                this.sat = 255,
                this.bri = 255,
                this.hue = 50000
                break
            case "magenta":
                this.sat = 255,
                this.bri = 255,
                this.hue = 55000
                break
            case "pink":
                this.sat = 255,
                this.bri = 255,
                this.hue = 60000
                break
        }
    }
}

let scenes = {
    "Default" : {
        1 : new hueLight("teal")
    }
}

console.log(scenes.Default[1]);

url = `http://192.168.1.80/api/VZbaIYHIkNqgInHul20P6Ju2j62XO3jxlrApA4hZ/lights/1/state`;
try {
    axios.put(url, {
        on: true,
        sat: scenes.Default[1].sat,
        bri: scenes.Default[1].bri,
        hue: scenes.Default[1].hue,

    });
} catch (err) {
    console.error(err);
}