import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
                avatar_url: ""
            }
        }
        console.log("Child - Constructor" + this.props.lastName);
    }
    async componentDidMount() {
        console.log("Child - componentDidMount" + this.props.lastName);
        const data = await fetch("https://api.github.com/users/ankitkhowal");
        const profile = await data.json();
        this.setState({
            userInfo: {
                name: profile.name,
                location: profile.location,
                avatar_url: profile.avatar_url
            }
        })

    }

    componentDidUpdate() {
        console.log("Child - componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("Child - componentWillUnmount");
    }


    render() {
        console.log("Child - Render" + this.props.lastName);
        return (
            <>
                <div className="flex justify-center">
                    <img src={this.state.userInfo.avatar_url}></img>
                    <div className="font-bold text-lg p-10 m-10">
                        <h1 >Name : {this.state.userInfo.name}</h1>
                        <h1>Location : {this.state.userInfo.location}</h1>
                    </div>
                    <button className = "invisible"onClick={() => {
                        // We do not mutate state directly
                        // Never do this.state.count1 =1
                        //Because react  will not be able to keep track of the state
                        this.setState({
                            count1: 1
                        });
                    }}>Set Count</button>

                </div>
            </>
        )
    }
}

export default Profile;