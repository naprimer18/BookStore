import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

  render() {

    return (
      <div className ="redact">
        
        <React.Fragment>
          <input type="text" ref={(input) => { this.searchInput = input }} placeholder="Enter the title"/>
          <button onClick={() => this.props.onFindBook(this.searchInput.value)}>Find Book</button >
        </React.Fragment>

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
