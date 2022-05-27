const axios = require('axios');
var globalReferenceNumber = 0
const user = 'cam' // CHANGE THIS CONSTANT TO YOUR NAME TO USE YOUR ID AND USERNAME

if (user == 'cam') {
    var URL = "http://192.168.68.142/api/AWNVabbtaLISOqHQ9MAbfB2YmACgfMHINUMcBI4U";
} else if (user == 'kane') {
    var URL = "http://192.168.1.66/api/VZbaIYHIkNqgInHul20P6Ju2j62XO3jxlrApA4hZ";
}


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


        console.log(preset); //debug, remove later
        //color library, every color has a name and a number value.
        switch(preset) {
            case 0:
            case "defaultWhite":
                this.sat = 0,
                this.bri = 255,
                this.hue = 0,
                console.log('defWhite') // Debug (remove later)
                break
            case 1:
            case "defaultWarm":
                this.sat = 175,
                this.bri = 255,
                this.hue = 8000,
                console.log('defWarm') // Debug (remove later)
                break
            case 2:
            case "defaultCold":
                this.sat = 100,
                this.bri = 255,
                this.hue = 43000,
                console.log('defCold') // Debug (remove later)
                break
            case 3:
            case "red":
                this.sat = 255,
                this.bri = 255,
                this.hue = 0,
                console.log('red') // Debug (remove later)
                break
            case 4:
            case "orange":
                this.sat = 255,
                this.bri = 255,
                this.hue = 5000,
                console.log('orange') // Debug (remove later)
                break
            case 5:
            case "yellow":
                this.sat = 255,
                this.bri = 255,
                this.hue = 9500,
                console.log('yellow') // Debug (remove later)
                break
            case 6:
            case "green":
                this.sat = 255,
                this.bri = 255,
                this.hue = 25000,
                console.log('green') // Debug (remove later)
                break
            case 7:
            case "teal":
                this.sat = 255,
                this.bri = 255,
                this.hue = 34000,
                console.log('teal') // Debug (remove later)
                break
            case 8:
            case "blue":
                this.sat = 255,
                this.bri = 255,
                this.hue = 46000,
                console.log('blue') // Debug (remove later)
                break
            case 9:
            case "purple":
                this.sat = 255,
                this.bri = 255,
                this.hue = 50000,
                console.log('purple') // Debug (remove later)
                break
            case 10:
            case "magenta":
                this.sat = 255,
                this.bri = 255,
                this.hue = 55000,
                console.log('magenta') // Debug (remove later)
                break
            case 11:
            case "pink":
                this.sat = 255,
                this.bri = 255,
                this.hue = 60000,
                console.log('pink') // Debug (remove later)
                break
        }
    }
}

let prevNum = 0
function randInt(max, min) {
    let randNum = Math.round(Math.random() * (max - min))+ min//choose a number between a given range
    
    while (randNum == prevNum) { //if the chosen number is the same as prevDiscoNum, choose another random number
        randNum = Math.round(Math.random() * (max-min) + min)
  }
    prevNum = randNum //save the current value
    
    return(randNum)
}
Math.max

function disco() {
    let randColor = randInt(0, 11) // get random number
    setLightState(lightID, true, new hueLight(randColor))
}


function candleLight(lightId, color) {
    let candleLightValue = randInt(100, 200) //get random number
    while (candleLightValue > (prevNum + 25) && candleLightValue < (prevNum - 25)) {
        console.log('test')
        candleLightValue = randInt(100, 200)
    }
    try {
        axios.put(`${URL}/lights/${lightId}/state`, { //send HTTP req
            on: true, //set on/off state
            sat: color.sat,
            bri: candleLightValue, //set brightness    
            hue: color.hue
        });
    } catch (err) {
        console.error(err)
    }
    console.log(candleLightValue) //debug
     
}


function setLightState(lightId, onOff, color) {  // learn how to use on README.md
    try {
        axios.put(`${URL}/lights/${lightId}/state`, { //send HTTP req
            on: onOff, //set on/off state
            sat: color.sat, //set saturation, brightness, and hue
            bri: color.bri,    
            hue: color.hue
        });
    } catch (err) {
        console.error(err)
    }
    console.log(color);  //debug

}

//setInterval(disco, 800)
setInterval(candleLight, 200, 1, new hueLight('orange'))

