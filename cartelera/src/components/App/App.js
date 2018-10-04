import React, {Component} from 'react';
import Movie from './movie/movie';
import './App.css';
import Tittle from './tittle/tittle';
import Navbar from './navbar/mynavbar';
/*import Favorite from './favorite/favorite'; */


class App extends Component {
  constructor(){
    super();
    this.state={
      myFavorites:[
        "Example1",
        "Example2"
      ],     
    }
  }

  handleClick(title){
    console.log(title);
    this.setState(
     { myFavorites: this.state.myFavorites.push(title)}
    )
  }

  render() {
    return (
      <div className="App">
        <header>
          <div>
          <Navbar></Navbar>
          <Tittle className="App-title" text = "CARTELERA CINE BEDU"></Tittle>
          </div>
        </header>
        <div className="App-content">
          <div className="App-movielist">
            <Movie click= {this.handleClick.bind(this)} title="Interstelar" gener="Ciencia ficción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            <Movie title="El padrino" gener="Drama" image = "https://http2.mlstatic.com/el-padrino-la-trilogia-en-12-casetes-vhs-1-cd-soundtrack-D_NQ_NP_840282-MLM26371756655_112017-F.jpg"/>
            <Movie title="El caballero oscuro" gener="Suspenso" image = "http://3.bp.blogspot.com/-_u48MUqSrRo/UBJ6X1ywISI/AAAAAAAAA2Y/QsIv5lUKN-I/s1600/batman.jpg"/>
            <Movie title="Forrest Gump" gener="Comedia" image = "http://pm1.narvii.com/6901/ab88c3f7cca746a88cc6729103e86fb509635d63r1-225-225v2_00.jpg"/>
            <Movie title="Coco" gener="Animación" image = "https://offthetracks.co.nz/wp-content/uploads/2018/01/au_movie_poster_coco_1_50f85f97.jpeg"/>
            <Movie title="El Señor de los Anillos" gener="Fantasía" image = "https://scontent.fgdl2-1.fna.fbcdn.net/v/t1.0-9/11083929_889013277829059_3981735570872944846_n.jpg?_nc_cat=103&oh=84228d862b7726f6e69203c74440c175&oe=5C23FA8B"/>
            <Movie title="Vengadores: Infinity War" gener="Aventura" image = "https://http2.mlstatic.com/capitan-america-escudo-con-luz-y-sonido-avengers-vengadores-D_NQ_NP_630757-MCO26032560187_092017-F.jpg"/>
            <Movie title="El gladiador" gener="Epica" image = "https://4.bp.blogspot.com/-KM4eVRdHdgY/UliwPKn9wAI/AAAAAAAABI4/a97n-63MTpU/s320/Gladiador.jpg"/>
            <Movie title="La vida es bella" gener="Drama" image = "https://i.pinimg.com/736x/c9/40/ac/c940ac70b573cb996160de18c3cd5104.jpg"/>
          </div>
          <div className="App-favoritelist">
            <div className="favoritelist-tittle" ><h4>Lista Favoritos</h4> </div>    
            {this.state.myFavorites.map(x => {
                return <p className="favoritelist-content" >{x}</p>
              })
            }
            <hr></hr>
            <div className="favoritelist-footer" >
              <h6>Borrar todo</h6> 
              <h6>Detalles</h6> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
