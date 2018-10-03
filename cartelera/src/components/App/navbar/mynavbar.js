import React, {Component} from 'react';
import './mynavbar.css';

export default class myNavbar extends Component {
    render()
      {
        return(
            <div className="mynavbar">
                <img className="Logo" src="https://pmcdeadline2.files.wordpress.com/2016/06/logo-tv-2.jpg?w=80&h=80&crop=1" alt="MyLogo" ></img>
                <button className="button" >Home </button>
                <hr></hr>
            </div>
        );
    };
}