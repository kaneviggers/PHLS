# HueLightSystem
Very cool Philips Hue Light System PHLS

============CUSTOM CLASSES============
    hueLight:
    huelight is a class that creates instances of 3 variables used for displaying lights.
    each case is assigned a name, and a number. 

============CUSTOM FUNCTIONS==========

    setLightState:
    setLightState (lightID, onOrOff, lightColor)
    setlightstate sends data via an HTTP request to the hue bridge. 
    the provided data defines the light's brightness, hue and saturation.

    - lightID is a integer used to specify what light will be affected
    - onOrOff specifies if the light is on or off
    - lightcolor gets the sat, bri and hue values of the library, "hueLight".


    disco:
    disco()
    disco makes a specified light  display a random color. 
    in unison with setInteval(), disco() can make a light flash random colors for a disco effect.
    example : setInterval (disco, timeInterval)
    same colors do not appear twice in a row.