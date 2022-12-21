
import { Component } from 'react';
import './App.css';
import imageTop from './top.jpg';
import imageButtom from './buttom.jpg';
import { Country } from './Country';

class App extends Component {
  render(){
    return <div className='main'>
      <div className='container'>
        <img src={imageTop} alt='countryTop' width='800px'/>
      </div>
      <div className='container'>
        <h1>Which countries do you want to visit?</h1>
      </div>
      <div>
        <Country/>
      </div>
      <div className='container'>
        <img src={imageButtom} alt='countryButtom' width='800px'/>
      </div>
    </div>
  }

}

export default App;
