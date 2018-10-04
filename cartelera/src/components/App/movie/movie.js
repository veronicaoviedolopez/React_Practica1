import React, {Component} from 'react';
import './movie.css';

export default class Movie extends Component{
    render(){
        const {title, image, gener, click} = this.props
        const Button = () => <button className="Media-AddToFavorites" 
                        onClick={() => click(title)}>Agregar a favoritos</button>;
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
               <Button></Button>
            </div>   
        </div>
        );
    }
}

