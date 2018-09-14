import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component{
  
  linkToflicrkImage = () =>{
    this.props.onClick_link(this.props.flickr_image_link);
  };

  linkToflickrAuthorsPage = () => {
    this.props.onClick_link(`https://www.flickr.com/photos/${this.props.flickr_authors_link_page}`)
  }

  render(){
   return(
      <div className="photo-frame-title-container">
        <div className="photo-frame">
          <img src={ this.props.url } alt="one"/>
        </div>
        <div className="photo-title">
          <p>
            <a to="#" onClick={this.linkToflicrkImage}> { this.props.flickr_image_link } </a>
            <span>by</span>
          </p> 
          <p>
            <a onClick={this.linkToflickrAuthorsPage}>{`https://www.flickr.com/photos/${this.props.flickr_authors_link_page}` }</a>
          </p>
        </div>
      </div>
    )
  }
 
};

Image.propTypes={
  url: PropTypes.string.isRequired,
  flickr_image_link: PropTypes.string.isRequired,
  flickr_authors_link_page: PropTypes.string.isRequired,
  onClick_link : PropTypes.func.isRequired,
}


export default Image;