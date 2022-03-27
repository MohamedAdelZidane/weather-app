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
        console.log(this.state.toggle_value);
    }


    render() {

        return (
            <div class="container">

                <div class="row" style={{paddingTop: '5%'}}>
                {/* <nav class="navbar"> */}
                    <div class="col-6">
                        <a class="app_name">Instaweather</a>

                        


                        {/* <form class="d-flex">
                            <NavLink active className={({ isActive }) => (isActive ? "link-active" : "link")} to={"Temp_Celsius"} >
                                <RecieveProps sendToggleValue={this.state.toggle_value} />
                                <button onClick={(e) => this.getBtnValue(e)} type="submit" class="c_button">C</button>

                            </NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={"Temp_Celsius"} >
                            <RecieveProps sendToggleValue={this.state.toggle_value} />
                                <button onClick={(e) => this.getBtnValue(e)} type="submit" class="f_button">F</button>

                            </NavLink>
                        </form> */}
                    </div>
                    <div class="col-6">

                    <NavLink to={"Temp_Celsius"} >
                                <RecieveProps sendToggleValue={this.state.toggle_value} />
                                {/* <button onClick={(e) => this.getBtnValue(e)} type="submit" class="c_button">C</button>
                                 */}
                    <button type="submit" class="f_btn" onClick={(e) => this.getBtnValue(e)} >F</button>


                            </NavLink>
                 
    
                            <NavLink to={"Temp_Celsius"} >
                            <RecieveProps sendToggleValue={this.state.toggle_value} />
                                {/* <button onClick={(e) => this.getBtnValue(e)} type="submit" class="f_button">F</button> */}

    <button type="submit" class="c_btn" onClick={(e) => this.getBtnValue(e)}>C</button>


                            </NavLink>



                    </div>
                {/* </nav> */}
                </div>


                









                {/* <div class="row">
                    <div class="col-6">
                        <a class="navbar-brand" id="app_name">Instaweather</a>
                    </div>

                    <div id="toggle_buttons" class="col-6">
                        <NavLink active className={({ isActive }) => (isActive ? "link-active" : "link")} to={"Temp_Celsius"} >
                            <RecieveProps sendToggleValue={this.state.toggle_value} />
                            <button onClick={(e) => this.getBtnValue(e)} type="submit" class="c_button">C</button>

                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to={"Temp_Celsius"} >
                           
                            <button onClick={(e) => this.getBtnValue(e)} type="submit" class="f_button">F</button>

                        </NavLink>
                    </div>

                </div> */}






            </div>
        )
    }
}


export default (NavBar);