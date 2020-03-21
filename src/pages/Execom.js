import React from 'react';
import "./Execom.css";
import {general,CS,IAS,WEA,PES,RAS} from "../data/currEx.js"
import git from "../images/git.svg"
import x from "../images/x.png"
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
                    <h1>Our Current Execom</h1>
                </div>

                <div class="hr-theme-slash-2">
                    <div class="hr-line"></div>
                        <div class="hr-icon"><img src={x} style={{width:"10px",height:"10px"}}/></div>
                    <div class="hr-line"></div>
                </div>

                {/* General Body */}
                <div className="header">
                    <h2>General Body</h2>
                </div>
                <div className="general">
                    
                    {general.map((profile)=>(
                        <Card profile={profile}/>
                    ))}
                </div>

                <div class="hr-theme-slash-2">
                    <div class="hr-line"></div>
                        <div class="hr-icon"><img src={x} style={{width:"10px",height:"10px"}}/></div>
                    <div class="hr-line"></div>
                </div>

                {/* Computer Society */}
                <div className="header">
                    <h2>Computer Society</h2>
                </div>
                <div className="general">
                    
                    {CS.map((profile)=>(
                        <Card profile={profile}/>
                    ))}
                </div>

                <div class="hr-theme-slash-2">
                    <div class="hr-line"></div>
                        <div class="hr-icon"><img src={x} style={{width:"10px",height:"10px"}}/></div>
                    <div class="hr-line"></div>
                </div>

                {/* Industrial application */}
                <div className="header">
                    <h2>Industrial Applications Society</h2>
                </div>
                <div className="general">
                    
                    {IAS.map((profile)=>(
                        <Card profile={profile}/>
                    ))}
                </div>

                <div class="hr-theme-slash-2">
                    <div class="hr-line"></div>
                        <div class="hr-icon"><img src={x} style={{width:"10px",height:"10px"}}/></div>
                    <div class="hr-line"></div>
                </div>

                {/* Women in eng */}
                <div className="header">
                    <h2>Women In Engineering Affinity Group</h2>
                </div>
                <div className="general">
                    
                    {WEA.map((profile)=>(
                        <Card profile={profile}/>
                    ))}
                </div>

                <div class="hr-theme-slash-2">
                    <div class="hr-line"></div>
                        <div class="hr-icon"><img src={x} style={{width:"10px",height:"10px"}}/></div>
                    <div class="hr-line"></div>
                </div>

                {/* Power Energy  */}
                <div className="header">
                    <h2>Power Energy Society</h2>
                </div>
                <div className="general">
                    
                    {PES.map((profile)=>(
                        <Card profile={profile}/>
                    ))}
                </div>

                <div class="hr-theme-slash-2">
                    <div class="hr-line"></div>
                        <div class="hr-icon"><img src={x} style={{width:"10px",height:"10px"}}/></div>
                    <div class="hr-line"></div>
                </div>

                {/* Robotics and Auto.. */}
                <div className="header">
                    <h2>Robotics And Automation Society</h2>
                </div>
                <div className="general">
                    
                    {RAS.map((profile)=>(
                        <Card profile={profile}/>
                    ))}
                </div>

                <div class="hr-theme-slash-2">
                    <div class="hr-line"></div>
                        <div class="hr-icon"><img src={x} style={{width:"10px",height:"10px"}}/></div>
                    <div class="hr-line"></div>
                </div>
            </div>
        )
    }
}
