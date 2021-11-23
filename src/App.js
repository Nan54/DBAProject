import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}


