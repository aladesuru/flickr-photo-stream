import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.js';

const PhotoList = (props) => {
const result = props.records;
let photos;
if (result.length > 0) {
    photos = result.map((photo , index) => 
      <Photo 
            flickr_image={photo.media.m}
            author_id={photo.author_id}
            photo_description={photo.description}
            photo_title={photo.link}
            photo_tag={ photo.tags}
            key={ index }
            tab_id={ index }
            external_link={props.externalLink}/>
    );

} else {
  photos = "Sorry no match result" ;
}

return(
  <ul>
    { photos }
  </ul>
  );
};

PhotoList.propTypes = {
	records: PropTypes.array.isRequired,
  externalLink : PropTypes.func.isRequired,
}

export default PhotoList;

