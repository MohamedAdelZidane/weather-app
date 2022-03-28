import React, { Component } from "react";
import './style.css'
import { APICall } from "../APICall"
import { Link, NavLink } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";

import { RecieveProps } from "../CurrentData/CurrentData";


class NavBar extends Component {

    state = {
        toggle_value: ""
    }

    getBtnValue = (e) => {
        this.setState({
            toggle_value: e.target.innerHTML
        })
        e.preventDefault();
        console.log(this.state.toggle_value);
    }


    render() {

        return (
            <div class="container">
                <div class="row" style={{ paddingTop: '5%' }}>
                    <div class="col-6">
                        <a class="app_name">Instaweather</a>
                    </div>
                    <div class="col-6">
                        <NavLink to={"Temp_Celsius"} >
                            <RecieveProps sendToggleValue={this.state.toggle_value} />
                            <button type="submit" class="f_btn" onClick={(e) => this.getBtnValue(e)} >F</button>
                        </NavLink>
                        <NavLink to={"Temp_Celsius"} >
                            <RecieveProps sendToggleValue={this.state.toggle_value} />
                            <button type="submit" class="c_btn" onClick={(e) => this.getBtnValue(e)}>C</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}


export default (NavBar);