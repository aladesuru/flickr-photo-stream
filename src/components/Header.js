import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm.js';

const Header=(props) => 
<header>
  <div className="wrapper header">
   <h2>Flickr Photo Stream</h2>
   <SearchForm  onTextChange={ props.onSearchPhoto }/>
  </div>
</header>

Header.propTypes={
	onSearchPhoto: PropTypes.func.isRequired
}

export default Header;