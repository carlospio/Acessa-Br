import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";




ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
        <Header />
        <Footer />
    </div>
  </div>
  ,
  document.getElementById('root')
);

