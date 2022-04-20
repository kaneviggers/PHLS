const axios = require('axios');

url = `http://192.168.1.80/api/VZbaIYHIkNqgInHul20P6Ju2j62XO3jxlrApA4hZ/lights/1/state`;
try {
    axios.put(url, {
        on: true,
    });
} catch (err) {
    console.error(err);
}