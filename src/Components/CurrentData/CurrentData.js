import React, { Component } from "react";
import './style.css'

import { APICall } from "../APICall";


var toggle_value;

export const RecieveProps = (props) => {
    const { sendToggleValue } = props
    // console.log(props)
    toggle_value = sendToggleValue;
    console.log("Done " + toggle_value)

    return (
        <div>
        </div>
    )

}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var image1 = <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M68.8508 73.8998C83.9882 73.8998 96.2595 61.8581 96.2595 47.0038C96.2595 32.1495 83.9882 20.1077 68.8508 20.1077C53.7133 20.1077 41.442 32.1495 41.442 47.0038C41.442 61.8581 53.7133 73.8998 68.8508 73.8998Z" fill="#FCB641" />
    <path d="M67.7157 13.1911C66.8258 13.1911 66.1035 12.4688 66.1035 11.5788V1.9051C66.1035 1.01512 66.8258 0.292816 67.7157 0.292816C68.6057 0.292816 69.328 1.01512 69.328 1.9051V11.5788C69.328 12.4688 68.6057 13.1911 67.7157 13.1911Z" fill="#FCB641" />
    <path d="M88.5464 19.903C88.1337 19.903 87.7209 19.745 87.4065 19.4306C86.7761 18.8002 86.7761 17.7812 87.4065 17.1508L94.2474 10.3099C94.8778 9.6795 95.8968 9.6795 96.5272 10.3099C97.1576 10.9403 97.1576 11.9593 96.5272 12.5897L89.6863 19.4306C89.3719 19.745 88.9591 19.903 88.5464 19.903Z" fill="#FCB641" />
    <path d="M42.1143 24.6721C41.7016 24.6721 41.2888 24.5141 40.9744 24.1997L34.1352 17.3604C33.5048 16.73 33.5048 15.7111 34.1352 15.0807C34.7656 14.4502 35.7845 14.4502 36.4149 15.0807L43.2542 21.9199C43.8846 22.5503 43.8846 23.5693 43.2542 24.1997C42.9398 24.5141 42.5271 24.6721 42.1143 24.6721Z" fill="#FCB641" />
    <path d="M85.8958 72.8454C85.6701 72.8454 77.3008 72.8454 77.3008 72.8454C77.4507 71.2332 77.5507 71.0945 77.5539 70.1304C77.5797 61.5305 71.8384 54.0172 63.44 52.1663C58.6531 51.1119 54.0839 51.8906 50.3031 53.9318C45.6904 47.0667 38.0482 42.4362 29.2887 41.9009C28.1617 41.7462 27.0202 41.6543 25.8513 41.6543C11.5746 41.6543 0 53.598 0 68.3214C0 75.9942 3.16168 82.8932 8.19199 87.7574C12.6403 92.6926 18.8169 95.8817 26.1302 96.4121C26.1302 96.4121 85.6701 96.7072 85.8958 96.7072C91.8838 96.7072 96.7368 91.2238 96.7368 84.7747C96.7368 78.3288 91.8822 72.8454 85.8958 72.8454Z" fill="white" />
</svg>;


var image2 = <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M66 32.9994L58.5492 39.8158L61.5544 49.4582L51.6794 51.5909L49.4582 61.4463L39.8343 58.3767L32.9995 65.8133L26.1657 58.3767L16.5418 61.4463L14.3206 51.5909L4.44448 49.4582L7.45079 39.8158L0 32.9994L7.45079 26.1842L4.44557 16.5418L14.3206 14.408L16.5418 4.55367L26.1657 7.62331L32.9995 0.186722L39.8343 7.62331L49.4582 4.55367L51.6794 14.4091L61.5544 16.5418L58.5492 26.1842L66 32.9994Z" fill="#FCB641" />
    <path d="M32.9995 52.3127C43.4584 52.3127 51.9371 43.8341 51.9371 33.3751C51.9371 22.9161 43.4584 14.4375 32.9995 14.4375C22.5405 14.4375 14.0618 22.9161 14.0618 33.3751C14.0618 43.8341 22.5405 52.3127 32.9995 52.3127Z" fill="#FDC567" />
</svg>;

var images = [image1, image2];




class CurrentData extends Component {


    constructor(props) {

        super(props);
        this.state = {
            current_data: [],
            icon: "",
            temp: "",
        }
    }



    componentDidMount() {

        var config = { "Access-Control-Allow-Origin": "*" }
        APICall(config, (res) => {

            console.log("I'm Here, Got Data from apiCalls File")

            this.setState({
                current_data: res.data.currently,
                icon: res.data.currently.icon,
            })
        }, (err) => {
            alert(err);
        });


    }



    handleDateFormat(current_date) {
        // console.log(current_date + " Current date in handeDateFormat()")
        var d = new Date(current_date * 1000);
        // console.log(d)
        // let DateOnly = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
        var formattedDate = d.getDate() + ", " + d.getFullYear();
        // console.log(formattedDate + "formattedDate");
        var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
        // console.log(hours);
        var ampm = hours >= 12 ? 'pm' : 'am';
        // console.log(ampm);


        let day = days[d.getDay()];
        // console.log(day);

        var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
        var formattedTime = hours + ":" + minutes + " " + ampm;
        // console.log(formattedTime)

        formattedDate = day + " " + formattedDate + " ";
        console.log(formattedDate)

        return (formattedDate);
    }

    displayIcon() {
        let counter = images.length - 1;
        let iconText = this.state.icon;
        console.log(this.state.icon)
        if (iconText === "clear-night") {
            return images[0]
        } else {
            return images[1]
        }
    }

    convertTempToInt(current_temp) {
        let parseInt = current_temp ^ 0;
        console.log(parseInt)

        return parseInt

    }

    render() {
        let current_date = this.state.current_data.time;
        let current_short_summary = this.state.current_data.summary;
        let current_temp = this.state.current_data.apparentTemperature;
        let current_text_summary = this.state.current_data.icon;
        console.log(current_temp)
        return (
            <div class="container">



                <div class="row">
                    <div class="col-6 currentData">
                        <div>
                            <span id="city_name">New Cairo</span>
                        </div>
                        <div>
                            <span id="todays_date">{this.handleDateFormat(current_date)}</span>
                        </div>
                        <div>
                            <span id="current_icon"> {this.displayIcon()}


                            </span>
                        </div>
                        <div>
                            <span id="current_summary">{current_text_summary}</span>
                        </div>
                    </div>



                    <div class="col-6 currentData">
                        <div>


                            <span id="current_temp">
                                {this.convertTempToInt(current_temp)}
                            </span>
                        </div>
                        <div>
                            <span id="high_low_temp">81 / 63</span>
                        </div>
                        <div id="short_summary">
                            <span>{current_short_summary}</span>
                        </div>
                    </div>

                </div>



            </div>
        )
    }
}


export default (CurrentData);