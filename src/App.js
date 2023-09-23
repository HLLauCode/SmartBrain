import './App.css';
import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg'
// import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//   apiKey: '6982e30b2c0042db811ef8657c3c312b'
//  });

 
const clarifaiRequestOption = (imageUrl) => {
  const PAT = '6982e30b2c0042db811ef8657c3c312b';
  const USER_ID = 'c1z3v00fdmjx';       
  const APP_ID = 'my-first-application-qqjot';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
  });
  const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions;
}

// fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", clarifaiRequestOption(this.state.input))
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
    }
  }
  
  calculateFaceBox = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }

  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }      
  
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", clarifaiRequestOption(this.state.input))
      .then(response => response.json())
      .then(result => this.displayFaceBox(this.calculateFaceBox(result)))
      .catch(error => console.log('error', error));

  }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, box, imageUrl, route }= this.state;
    return (
      <div className='App'>
        <ParticlesBg type="cobweb" bg={true} color="#c7edd1" className="particles-bg"/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home'
        ? <>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition box={box} imageUrl={imageUrl}/>
          </>
        : (route === 'signin' 
          ? <SignIn onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange}/>
          )

        }
      </div>
    )
  }
}

export default App;
