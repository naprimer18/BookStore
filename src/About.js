import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
 
  findBook() {
    console.log('findBook', this.searchInput.value);
    this.props.onFindBook(this.searchInput.value);
  }

  render() {

    return (
      <div className ="redact">
        
        <div>
          <input type="text" ref={(input) => { this.searchInput = input }} placeholder="Enter the title"/>
          <button onClick={this.findBook.bind(this)}>Find Book</button >
        </div>

        <ol>
          {this.props.Books.map((Book, index) =>
            <li key={index}>{Book.name}</li>
          )}
        </ol>

      </div>
    );
  }
}

export default connect(
  state => ({
    Books: state.Books.filter(Book => Book.name.includes(state.filterBooks))
  }),
  dispatch => ({
    onFindBook: (name) => {
      console.log('name', name);
      dispatch({ type: 'FIND_BOOK', payload: name});
    }   
  })
)(About);
