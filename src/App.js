import './App.css';
import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='App'>
        <ParticlesBg type="cobweb" bg={true} color="#c7edd1" className="particles-bg"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
    )
  }
}

export default App;
