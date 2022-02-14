import React from 'react';

class SearchBar extends React.Component{
    state = {term:''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    };
    onInputChange = (event) => {
        this.setState({term:event.target.value});
    };

    render(){
        return(
          <div className="search-bar ui segment">
              <form
                  className="ui form"
                  onSubmit={this.onFormSubmit}
              >
                  <div className="field">
                      <label>Search For a Video</label>
                    <input type="text"
                           value={this.state.term}
                           onChange={this.onInputChange}
                    />
                  </div>
              </form>
          </div>
        );
    }
}
export default SearchBar;
