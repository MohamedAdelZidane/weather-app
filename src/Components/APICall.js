import axios from 'axios';


export const APICall = (config, callback, errorcallback) => {

    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/30.016893,31.377033`;

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