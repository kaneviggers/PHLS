const axios = require('axios');

class hueLight {
    sat;
    bri;
    hue;

    constructor(preset=null,sat=null,bri=null,hue=null) {
        this.sat = sat;
        this.bri = bri;
        this.hue = hue;

        switch(preset) {
            case dwhite:
                this.sat = 100,
                this.bri = 150,
                this.hue = 8000
            case dred:
                this.sat = 255,
                this.bri = 255,
                this.hue = 1000
        }
    }
}

let scenes = {
    "Default" : {
        1 : new hueLight(preset=dwhite)
    }
}

url = `http://192.168.1.80/api/VZbaIYHIkNqgInHul20P6Ju2j62XO3jxlrApA4hZ/lights/1/state`;
try {
    axios.put(url, {
        on: true,
        sat: 100,
        bri: 150,
        hue: 8000

    });
} catch (err) {
    console.error(err);
}