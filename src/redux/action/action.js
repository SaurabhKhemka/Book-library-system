export const reset = () => ({
    type: "RESET_STATE"
});

export const search = payload => ({
    type: 'SEARCH_BOOK',
    payload: payload
});

export const add = payload => ({
    type: 'ADD_BOOK',
    payload: payload
});

export const save = payload => ({
    type: 'SAVE_BOOK',
    payload: payload
});

export const edit = payload => ({
    type: 'EDIT_BOOK',
    payload: payload
});