import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addBook() {
      
      this.props.onAddBook("Название: " + this.bookName.value + " ,Автор : " + this.autorName.value + " , Стоимость " + this.bookCost.value  + " BYN");
      this.bookName.value = '';
      this.autorName.value = '';
      this.bookCost.value = '';
  }

  render() {
    console.log(this.props.Books);
    return (
      <div className ="redact">
        <React.Fragment>
          <input type="text" ref={(input) => { this.bookName = input }} placeholder="bookName" />
          <input type="text" ref={(input) => { this.autorName = input }} placeholder="autorName" />
          <input type="text" ref={(input) => {this.bookCost = input }} placeholder="bookCost in BYN"/>
          <button onClick={this.addBook.bind(this)}>Add Book</button>
        </React.Fragment>

        <div>
          <input type="text" ref={(input) => { this.searchInput = input }} placeholder="Enter the title"/>
          <button onClick={() => this.props.onFindBook(this.searchInput.value)}>Find Book</button >
        </div>

        

        <ol>
          {this.props.Books.map((Book, index) =>
            <li key={index}>
            <button className="deletButton" onClick={() => this.props.onRemoveBooks(index)}>✖</button >
            {Book.name}
             </li>
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
    onAddBook: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_BOOK', payload });
    },

    onFindBook: (name) => {
      console.log('name', name);
      dispatch({ type: 'FIND_BOOK', payload: name});
    },

   onRemoveBooks: (index) => {
      console.log("deleted " + index);
      dispatch({ type: 'DELETE_BOOK', payload: index  } );
    }
    
  })
)(App);
