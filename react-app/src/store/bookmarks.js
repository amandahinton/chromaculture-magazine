const VIEW_USER_BOOKMARKS = 'bookmarks/VIEW_USER_BOOKMARKS'

const viewUserBookmarks = (bookmarks) => ({
    type: VIEW_USER_BOOKMARKS,
    bookmarks
})


export const getUserBookmarks = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/bookmarks`)

    if (response.ok) {
        const bookmarks = await response.json().then(res => res = res.bookmarks)
        dispatch(viewUserBookmarks(bookmarks))
    }
}


const initialState = {}

const bookmarkReducer = (state= initialState, action) => {
    let newState

    switch(action.type){

        case VIEW_USER_BOOKMARKS:
            newState = {...state};
            action.bookmarks.forEach(bookmark => {
                newState[bookmark.id] = bookmark
            })
            return newState

        default:
            return state;
    }
}
export default bookmarkReducer
