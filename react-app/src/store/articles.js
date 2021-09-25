// action types
const VIEW_ALL_ARTICLES = 'article/VIEW_ALL_ARTICLES'
const VIEW_USER_ARTICLES = 'article/VIEW_USER_ARTICLES'
const VIEW_OUR_ARTICLES = 'article/VIEW_OUR_ARTICLES'
const VIEW_ONE_ARTICLE = 'articles/VIEW_ONE_ARTICLE'

// action creators

const viewAllArticles = (articles) => ({
    type: VIEW_ALL_ARTICLES,
    articles
})

const viewUserArticles = (articles) => ({
    type: VIEW_USER_ARTICLES,
    articles
})

const viewOurArticles = (articles) => ({
    type: VIEW_OUR_ARTICLES,
    articles
})

const viewOneArticle = (article) => ({
    type: VIEW_ONE_ARTICLE,
    article
})


// thunks

export const getAllArticles = () => async dispatch => {
    const response = await fetch(`/api/articles/`);

    if (response.ok) {
        const articles = await response.json().then(res => res = res.articles)
        dispatch(viewAllArticles(articles))
    }
}

export const getUserArticles = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/articles`)

    if (response.ok) {
        const articles = await response.json().then(res => res = res.articles)
        dispatch(viewUserArticles(articles))
    }
}

export const getOurArticles = () => async dispatch => {
    const response = await fetch(`/api/articles/featured`)

    if (response.ok) {
        const articles = await response.json().then(res => res = res.articles)
        dispatch(viewOurArticles(articles))
    }
}

export const getOneArticle = (articleId) => async dispatch => {
    const response = await fetch(`/api/articles/${articleId}`)

    if (response.ok) {
        const article = await response.json()
        dispatch(viewOneArticle(article))
    }
}


// reducers

const initialState = {}

const articleReducer = (state= initialState, action) => {
    let newState

    switch(action.type){
        case VIEW_ALL_ARTICLES:
            newState = {...state};
            action.articles.forEach(article => {
                newState[article.id] = article
            })
            return newState

        case VIEW_USER_ARTICLES:
            newState = {...state};
            action.articles.forEach(article => {
                newState[article.id] = article
            })
            return newState

        case VIEW_OUR_ARTICLES:
            newState = {...state};
            action.articles.forEach(article => {
                newState[article.id] = article
            })
            return newState

        case VIEW_ONE_ARTICLE:
            newState = {...state};
            newState[action.article.id] = action.article
            return newState

        default:
            return state;
    }
}
export default articleReducer
