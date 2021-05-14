import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

function BookList(props) {
    return (
        <table id="book-table">
            <thead>
                <tr>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.filteredBookList.map((book, i) => {
                        return (
                            <Book book={book} key={i} />
                        )
                    }
                    )
                }
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    filteredBookList: state.filteredBookList
})
export default connect(mapStateToProps)(BookList)