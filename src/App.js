import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Dinh nghia props cach 1
function NumberOne(prop1) {
    return(
            <div className="col-6">
                <div className="card">
                    <img className="card-img-top" src={prop1.linkanh} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{prop1.tieude}</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>
    )
}
//Dinh nghia props cach 2== theo class
class NumberTwo extends Component {
    render() {
        return (
            <div className="col-8">
                <div className="card">
                    <img className="card-img-top" src={this.props.linkanh} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.tieude}</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>
        );
    }
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <p className="App-intro">
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <div className="container">
                    <div className="row">
                        <NumberOne tieude={"Tieu de 1"} linkanh="https://i.a4vn.com/2017/3/27/tai-sao-au-mobile-la-noi-quy-tu-nhieu-gai-xinh-nhat-cong-dong-ga-8cdbc3.jpg"/>
                        <NumberOne tieude={"Tin tuc 2"} linkanh={"https://znews-photo.zadn.vn/w660/Uploaded/kcwvouvs/2018_01_17/phuongly.jpg"}/>
                        <NumberOne tieude={"Tieu de 3"} linkanh={"http://tayninh24h.vn/attachments/anh-girl-xinh-3-1024x5761-jpg.1108/"}/>
                        <NumberTwo tieude="TH True Milk" linkanh={"https://static3.rongbaycdn.com/original//rb_up_new/2016/03/23/0/201603120808_anh_girl_xinh_81.jpg"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
