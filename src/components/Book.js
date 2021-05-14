import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { edit } from '../redux/action/action';

function Book(props) {
    const history = useHistory();
    const editBook = (e) => {
        props.edit(props.book);
        history.push("/edit");
    };

    return (
        <tr key={props.book.isbn}>
            <td> {props.book.title}</td>
            <td> {props.book.author}</td>
            <td> {props.book.publisher}</td>
            <td><a href="#" onClick={() => editBook(props.book)}>Edit</a></td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    edit: book => dispatch(edit(book))
})
export default connect(null, mapDispatchToProps)(Book)