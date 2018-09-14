import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image.js'


const Photo = (props) => {
  return(
      <li>
        <Image 
          url={props.flickr_image } 
          flickr_image_link={ props.photo_title }
          flickr_authors_link_page={ props.author_id }
          onClick_link={props.external_link} />

        <div className="photo-description-container">
          <h4>Photo Description</h4>
          <input type="checkbox" id={`tab${props.tab_id}`} />
          <div className="photo-description">
            { props.photo_description }
          </div>

          <div className="veiw-more-btn-contanier">
            <label htmlFor={`tab${props.tab_id}`} className="desc-veiw-more-btn">
              Read <span> more description</span>
            </label>
          </div>
        </div> 

        <div className="photo-tag-container">
          <h4>Tags</h4>
          <div className="photo-tags">
            { props.photo_tag}
          </div>
        </div> 
    </li>
  )
};


Photo.propTypes = {
  flickr_image : PropTypes.string.isRequired,
  author_id : PropTypes.string.isRequired,
  photo_description: PropTypes.string.isRequired,
  photo_title: PropTypes.string.isRequired,
  photo_tag: PropTypes.string.isRequired,
  tab_id: PropTypes.number.isRequired,
  external_link: PropTypes.func.isRequired
}

export default Photo;