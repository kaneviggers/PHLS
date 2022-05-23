/*
const axios = require('axios');

const URL = "http://192.168.1.66/api/VZbaIYHIkNqgInHul20P6Ju2j62XO3jxlrApA4hZ";

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

        switch(preset) {
            case "defaultWhite":
                this.sat = 0,
                this.bri = 255,
                this.hue = 0
                break
            case "defaultWarm":
                this.sat = 175,
                this.bri = 255,
                this.hue = 8000
                break
            case "defaultCold":
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

var chooseScene = async (scene) => {
    for (light in scenes[scene]) {
        try{
            var res = await axios.put(URL + `/lights/${scenes[scene][light].id}/state`, {
                on: true,
                sat: scenes[scene][light].sat,
                bri: scenes[scene][light].bri,
                hue: scenes[scene][light].hue,
            });
            console.log(res.data);
        } catch(err) {
            console.error(err);
        }
    }
}

let scenes = {
    "Default" : [
        new hueLight(1, "pink")
    ]
}

chooseScene("Default");
*/