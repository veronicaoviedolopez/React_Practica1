import React, {Component} from 'react';
import Movie from './movie/movie';
import './App.css';
import Tittle from './tittle/tittle';
import Navbar from './navbar/mynavbar';
import Favorite from './favorite/favorite';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div>
          <Navbar></Navbar>
          <Tittle className="App-title" text = "CARTELERA CINE BEDU"></Tittle>
          </div>
          <hr/>
        </header>
        <div className="App-content">
          <div className="App-movielist">
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
          </div>
          <div className="App-favoritelist">
            <div className="favoritelist-tittle" ><h4>Lista Favoritos</h4> </div>
            <Favorite/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
