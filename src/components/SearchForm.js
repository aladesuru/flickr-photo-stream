import React, { Component } from 'react';

class SearchForm extends Component {

  textChangeHandler = (e) => {
    e.preventDefault();
    this.props.onTextChange(this.queryString.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="searchform" onSubmit={this.textChangeHandler}>
       <input type="text" 
         placeholder="search by tags" 
         className="search-input"
         ref={(input) => this.queryString = input } />
       <input type="submit" name="" value="Search" className="search-btn" />
     </form>
    );
  }
}

export default SearchForm;
