import React from 'react';
import "./Events.css";

export default class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="app-1">
                <h2 style={{color:'white'}}>Events</h2>
                <p style={{color:'white'}}>
                    Hello, this is Vishnu
                    <br/>
                    yolo
                    
                </p>
            </div>    
        )
    }
}
