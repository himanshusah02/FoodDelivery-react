import React from "react";

class UserClass1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/himanshusah2");
        const json = await data.json();

        console.log(json);
    }

    render(){
        const{name, location} = this.props;
        const {count} = this.state;

        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={()=>{

                }}></button>

            </div>
        )
    }
}

export default UserClass1;