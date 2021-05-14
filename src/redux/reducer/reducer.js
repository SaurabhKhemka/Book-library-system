const bookList = [
    {
        "isbn": "9781593275846",
        "title": "Eloquent JavaScript, Second Edition",
        "author": "Marijn Haverbeke",
        "publisher": "No Starch Press"
    },
    {
        "isbn": "9781449331818",
        "title": "Learning JavaScript Design Patterns",
        "author": "Addy Osmani",
        "publisher": "O'Reilly Media"
    },
    {
        "isbn": "9781449365035",
        "title": "Speaking JavaScript",
        "author": "Axel Rauschmayer",
        "publisher": "O'Reilly Media",
    },
    {
        "isbn": "9781449325862",
        "title": "Git Pocket Guide",
        "author": "Richard E. Silverman",
        "publisher": "O'Reilly Media"
    },
    {
        "isbn": "9781449337711",
        "title": "Designing Evolvable Web APIs with ASP.NET",
        "author": "Glenn Block, et al.",
        "publisher": "O'Reilly Media"
    }
];

const initialState = {
    bookList,
    filteredBookList: bookList,
    selectedBook: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOK':
            const res = state.bookList.filter((book) => {
                return (book.title.toLowerCase().includes(action.payload) || book.publisher.toLowerCase().includes(action.payload) || book.author.toLowerCase().includes(action.payload));
            });
            return { ...state, filteredBookList: res };
        case 'ADD_BOOK':
            const books1 = state.bookList.concat(action.payload);
            return { ...state, filteredBookList: books1, bookList: books1 };
        case 'SAVE_BOOK':
            const books2 = state.bookList.map((book, i) =>
                book.isbn !== action.payload.isbn ? book : action.payload
            );
            return { ...state, filteredBookList: books2, bookList: books2 };
        case 'EDIT_BOOK':
            return { ...state, selectedBook: action.payload };
        default: return initialState;
    }
}