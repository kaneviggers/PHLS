# HueLightSystem
Very cool Philips Hue Light System PHLS

============CUSTOM CLASSES============
    hueLight:
    huelight is a class that creates instances of 3 variables used for displaying lights.
    each case is assigned a name, and a number. 

============CUSTOM FUNCTIONS==========

    setLightState (lightID, onOrOff, lightColor):
    setlightstate sends data via an HTTP request to the hue bridge. 
    the provided data defines the light's brightness, hue and saturation.


    disco():
    disco makes a specified light  display a random color. 
    in unison with setInteval(), disco() can make a light flash random colors for a disco effect.
    example : setInterval (disco, timeInterval)


    randInt(min, max):
    chooses a random number within a given value range of min and max
    e.g: min = 10, max = 20, random number will be between 10 and 20.
    the same number does not repeat twice in a row. this makes it different from the in-built Math.random module.


    candleLight(lightID, color):
    candleLight can make a chosen light with a chosen color flicker like a candle.