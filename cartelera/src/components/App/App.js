import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import MyNavbar from './navbar/mynavbar';
import Movie from './movie/movie';
import { Row, Col} from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div>
            <MyNavbar></MyNavbar>
          </div>
          <hr/>
          <h1 className="App-title">CARTELERA CINE BEDU </h1>
        </header>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <code>
            <Movie title="InterEstelar" gener="Acción" image = "http://2.bp.blogspot.com/-_DGDXwanEjA/VDxnbllbQ_I/AAAAAAAAap0/Zk_ABBPvFPE/s250-c/Wallpaper_Latino_Interestelar_V2_Preview_JPosters.png"/>
            </code>
          </Col>
          <Col xs={6} md={4}>
            <code>{'<Col xs={6} md={4} />'}</code>
          </Col>
          <Col xsHidden md={4}>
            <code>{'<Col xsHidden md={4} />'}</code>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
