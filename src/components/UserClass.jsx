import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }
    }

    render(){
        const {name, location, contact} = this.props
        const { count } = this.state

        return(
            <div>
                <h2>count: {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase</button>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: {contact}</h2>
                <UserContext.Consumer>
                    {({defaultUser}) => {
                        return <h1>{defaultUser}</h1>
                    }}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default UserClass
