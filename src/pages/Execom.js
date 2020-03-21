import React from 'react';
import "./Execom.css";
import general from "../data/currEx.js"
import git from "../images/git.svg"
import link from "../images/link.svg"

var imy={
    width: 120,
    height: 120,
    borderRadius: 150/1.5,
    overflow: "hidden",
    borderWidth:2,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    // padding:"10px",
    // alignSelf:'center',
    // alignContent:'center',
    
}


class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="card">
                <div className="name">
                    <h2 className="profileName">{this.props.profile.name}</h2>
                    <h3 className="profilePos">{this.props.profile.position}</h3>
                </div>
                
                <div className="dp">
                    <img style={imy} src={this.props.profile.image} alt="oof" />
                </div>

                <div className="links">
                {/* <center> */}
                    <a  href={this.props.profile.git}>
                        <img className="logoGit" src={git}/>
                    </a>

                    <a  href={this.props.profile.link}>
                        <img className="logoLink"src={link}/>
                    </a>
                {/* </center> */}
                </div>   
            </div>
        );   
    }
}

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    

    render(){
        return(
            <div className="app">
                <div className="header">
                    <h1>Our current Execom</h1>
                </div>

                <div className="general">
                    {general.map((profile)=>(
                        <Card profile={profile}/>
                    ))}
                </div>
            </div>
        )
    }
}
