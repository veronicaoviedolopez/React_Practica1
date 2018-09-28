import React, {Component} from 'react';
import './movie.css';

export default class Movie extends Component{
    render(){
        const {title, image, gener} = this.props
        return(
            <div className="Media">
            <div className="Media-cover">
                <img
                    src={image}
                    alt=""
                    width={260}
                    height={160}
                    className = "Media-image"
                />
                <h3 className="Media-title">{title}</h3>
                <h4 className="Media-title">{gener}</h4>
                <p className="Media-author">ver mas</p>
                <p className="Media-author">Agregar a Favoritos</p>
            </div>   
        </div>
        );
    }
}

