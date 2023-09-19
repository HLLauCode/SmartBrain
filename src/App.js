import './App.css';
import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='App'>
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
    )
  }
}

export default App;
