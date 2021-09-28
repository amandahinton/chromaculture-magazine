// ACTION TYPES
const VIEW_COMMENTS = 'comments/viewComments'
const ADD_COMMENT = 'comments/addComment'
const EDIT_COMMENT = 'comments/editComment'
const REMOVE_COMMENT = 'comments/removeComment'


// ACTION CREATORS
const viewComments = (comments) => ({
    type: VIEW_COMMENTS,
    comments
})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})


// THUNKS
export const readComments = (articleId) => async (dispatch) => {
    const res = await fetch(`/api/comments/`);
    const comments = await res.json()
    dispatch(viewComments(comments.comments))
}

export const createComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/articles/${comment.articleId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            comment
        })
    })

    if (res.ok) {
        const createdComment = res.json()
        dispatch(addComment(createdComment))
        return createdComment
    }
}

export const updateComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/articles/${comment.articleId}/comments/${comment.commentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            comment
        })
    })

    if (res.ok) {
        const content = await res.json();
        dispatch(editComment(content));
        return content
    }
}

export const deleteComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/articles/${comment.article_id}/comments/${comment.id}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(removeComment(comment.comment_id))
    }
}


// REDUCER
const initialState = {};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_COMMENTS: {
            const newState = {}
            const thoughts = action.comments
            thoughts.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        }
        case ADD_COMMENT: {
            const newState = { ...state }
            newState[action.comment.id] = action.comment
            return newState
        }
        case EDIT_COMMENT: {
            const newState = { ...state }
            newState[action.comment.id] = action.comment
            return newState
        }
        case REMOVE_COMMENT: {
            const newState = { ...state }
            delete newState[action.commentId]
            return newState
        }
        default:
            return state;
    }
}

export default commentsReducer
