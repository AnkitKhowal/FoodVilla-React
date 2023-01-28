import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionComponent from "./Profile";
import { Component } from "react";


class AboutUs extends Component {
    constructor(props){
        super(props);
        console.log("Parent - Contrcutor");
    }

    componentDidMount(){
        //Best Place  to Make An api call 
        console.log("Parent - componentDidMount");
    }
    
    render() {
        console.log("Parent - render");
        return (
            <>
                <div>About US Page</div>
                {/* <ProfileFunctionComponent firstName = "Ankit" lastName="Khowal"></ProfileFunctionComponent> */}
                <Profile firstName="Ankit" lastName="Child1" />
                {/* <Profile firstName="Ankit" lastName="Child2" /> */}
            </>
        )
    }
}

export default AboutUs;


/**
 * Parent - Constructor
 * Parent - Render
 * Child1 - Constructor
 * Child1- Render
 * Child2 - Constructor
 * Child2 - Render
 * 
 * Child1- componentDidMount
 * Child2- componentDidMount
 * Parent- compnentDidMount
 */