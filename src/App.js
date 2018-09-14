import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// components
import Header from './components/Header.js';
import PhotoList from './components/PhotoList.js';

class App extends Component {
  state={
    photos : [],
    loadingState : true,
  };

  componentDidMount(){
    this.searchPhoto();
  };

  searchPhoto=(query='safe') => {
    axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${query}&nojsoncallback=?`)
          .then(response => {
            this.setState({
              photos : response.data.items,
              loadingState : false
            });
          })
          .catch(error => {
            console.log('Error fetching data' ,error);
          })
  };

  redirectToFlickr=(url) =>{
    window.location.href= url;
  }

  render() {
    return (
        <div>
          <Header onSearchPhoto={this.searchPhoto}/>
          <div className="wrapper">
          	<section className="main-content">
          	 {
              (this.state.loadingState) 
               ?
                <p> Loading data ... </p>
               :
                <PhotoList records={this.state.photos} externalLink={this.redirectToFlickr} />
             }
          	</section>
          </div>
        </div>
    );
  }
}

export default App;
