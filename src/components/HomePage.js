import React from 'react';
import { connect } from 'react-redux';
import { edit, search } from '../redux/action/action';
import { useHistory } from "react-router-dom";
import BookList from './BookList';

function HomePage(props) {
    const history = useHistory();

    const onSearch = (value) => {
        props.search(value);
    }

    const handleClick = () => {
        props.edit({});
        history.push("/add");
    }

    return (
        <div>
            <input type="text" name="search" placeholder="Enter search text..."
                autoComplete="off" onChange={(e) => onSearch(e.target.value)} />
            {
                props.filteredBookList.length > 0 ?
                    <BookList filteredBookList={props.filteredBookList} /> :
                    <div><h1>Book Not Found ?</h1>
                        <input type="button" value="Add Book" onClick={handleClick} /></div>
            }

        </div>
    )
}

const mapStateToProps = state => ({
    filteredBookList: state.filteredBookList
})
const mapDispatchToProps = dispatch => ({
    search: searchText => dispatch(search(searchText)),
    edit: book => dispatch(edit(book))
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)