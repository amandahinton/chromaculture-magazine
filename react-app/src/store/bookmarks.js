const VIEW_USER_BOOKMARKS = 'bookmarks/VIEW_USER_BOOKMARKS'
const UNSAVE_USER_BOOKMARK = 'bookmarks/UNSAVE_USER_BOOKMARK'

const viewUserBookmarks = (bookmarks) => ({
    type: VIEW_USER_BOOKMARKS,
    bookmarks
})

const unsaveUserBookmark = (bookmark) => ({
    type: UNSAVE_USER_BOOKMARK,
    bookmark
})

export const getUserBookmarks = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/bookmarks`)

    if (response.ok) {
        const bookmarks = await response.json().then(res => res = res.bookmarks)
        dispatch(viewUserBookmarks(bookmarks))
    }
}

export const postUserBookmark = async ({ user_id, article_id }) => {
    const data = new FormData()
    data.append("user_id", user_id)
    data.append("article_id", article_id)

    const res = await fetch(`/api/articles/${article_id}/bookmarks`,
        {
            method: 'POST',
            body: data
        });

    if (res.ok) return
}

export const deleteUserBookmark = (article_id, bookmark_id) => async dispatch => {
    const res = await fetch(`/api/articles/${article_id}/bookmarks/${bookmark_id}`, {
        method: 'DELETE',
    })

    if (res.ok) dispatch(unsaveUserBookmark(bookmark_id))
}


const initialState = {}

const bookmarkReducer = (state= initialState, action) => {
    let newState

    switch(action.type){

        case VIEW_USER_BOOKMARKS:
            newState = {};
            action.bookmarks.forEach(bookmark => {
                newState[bookmark.id] = bookmark
            })
            return newState

        case UNSAVE_USER_BOOKMARK: {
            const newState = { ...state }
            delete newState[action.bookmark_id]
            return newState
        }

        default:
            return state;
    }
}
export default bookmarkReducer
