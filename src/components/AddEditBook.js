import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { add, reset, save } from '../redux/action/action';

function EditBook(props) {
    const history = useHistory();
    const [title, setTitle] = useState(props.selectedBook.title);
    const [author, setAuthor] = useState(props.selectedBook.author);
    const [publisher, setPublisher] = useState(props.selectedBook.publisher);

    const handleSave = () => {
        const book = {
            title: title,
            author: author,
            publisher: publisher,
            isbn: props.selectedBook.isbn || Math.random()
        }
        if (props.selectedBook.isbn) {
            props.save(book);
        } else {
            props.add(book);
        }
        history.push("/");
    }

    const handleCancel = () => {
        props.reset();
        history.push("/");
    }

    return (
        <div className="parent">
            <h1>{props.selectedBook.isbn ? 'Edit Book' : 'Add New Book'}</h1>
            <label>Book Name</label>
            <input type="text" id="name" placeholder="Enter book name..."
                value={title} autoComplete="off" onChange={(e) => setTitle(e.target.value)} />

            <label>Author</label>
            <input type="text" id="author" placeholder="Enter book author..."
                value={author} autoComplete="off" onChange={(e) => setAuthor(e.target.value)} />

            <label>Publisher</label>
            <input type="text" id="publisher" placeholder="Enter book published by..."
                value={publisher} autoComplete="off" onChange={(e) => setPublisher(e.target.value)} />

            <input type="button" value="Save" onClick={handleSave} />
            <input type="button" value="Cancel" onClick={handleCancel} />
        </div>
    )
}

const mapStateToProps = state => ({
    selectedBook: state.selectedBook
})
const mapDispatchToProps = dispatch => ({
    add: book => dispatch(add(book)),
    save: book => dispatch(save(book)),
    reset: book => dispatch(reset(book))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditBook)