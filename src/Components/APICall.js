import axios from 'axios';




export const APICall = (config, callback, errorcallback) => {

    // var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude)
    }

    window.onload = getLocation;

    
    
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/30.016893,31.377033`;
    
    // const dynamic_url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${latitude},${longitude}`;


    // console.log(url)
    axios.get(url, config)
        .then(res => {
            console.log("API Call File ")
            console.log(res.data)

            if (callback != null) {
                callback(res);
            }
        })
        .catch(err => {
            if (errorcallback != null) {
                errorcallback(err);

            }
        })

}