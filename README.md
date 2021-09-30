
![](https://github.com/amandahinton/chromaculture/blob/main/react-app/src/images/chromaculture-05.png)

Chromaculture is a digital magazine for about color. The inspiring collection of stories from around the web about palettes, pigments, and color-related projects will take you to surprising places in the spectrum! Chromaculture blends color theory, science, art history, industry information, and pop culture in a way that is modern, informative, provocative, and playful.

### Chromaculture can be found at: https://chromaculture.herokuapp.com/

# Features
* Users
  * User signup, login/logout authentication, and authorization to perform operations throughout the site
  * Password hashing and protection from csurf attacks
  * Demo account for testing functionality
* Articles
  * Visitors can browse all articles through the Discover feed grid or the splash page features
  * Article preview modals link to the internal article detail with comments and previous/next article browsing as well as to the external full article
* Bookmarks
  * Logged-in users can save articles to their profile by clicking the bookmark icon on the article preview modal or the article detail page
  * Clicking again will remove the article from the user's profile
* Comments
  * Logged-in users can view all comments on all articles
  * Logged-in users can add, edit, or delete their own comments

# Roadmap
* Articles
  * Users will be able to add articles
  * Users will be able to edit and delete their own articles
  * Articles added by an editor will be displayed on the Discover feed
  * Articles added by users will be bookmarked to their user page
* Notes
  * Users can add marginalia; these notes are private the user
  * Users can edit and delete their notes
* Search
* New content

### You can see the feature list, user stories, database schema, and more on the project wiki at: https://github.com/amandahinton/chromaculture/wiki

# Technologies Used

Frontend
  * React
  * Redux
  * Javascript
  * HTML
  * CSS

Backend
  * Python
  * Flask
  * SQLAlchemy
  * Node.js

Database
  * PostgreSQL

Deployment and Version Control
  * Git + Github
  * Heroku
  * Docker


# Database Structure
![](https://github.com/amandahinton/chromaculture/blob/main/design/database_schema.png)

# Brand and wireframes
![](https://github.com/amandahinton/chromaculture/blob/main/design/styles.png)


# Screenshots
![](https://github.com/amandahinton/chromaculture/blob/main/design/screenshots/splash.png)
![](https://github.com/amandahinton/chromaculture/blob/main/design/screenshots/discover.png)
![](https://github.com/amandahinton/chromaculture/blob/main/design/screenshots/article_preview.png)
![](https://github.com/amandahinton/chromaculture/blob/main/design/screenshots/comments.png)

# Code Highlights
Bookmark thunks and backend api routes
```js
export const getUserBookmarks = (userId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/bookmarks`)

    if (response.ok) {
        const bookmarks = await response.json().then(res => res = res.bookmarks)
        dispatch(viewUserBookmarks(bookmarks))
    }
}


export const postUserBookmark = ({ user_id, article_id }) => async dispatch => {
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
```

``` py
@user_routes.route('/<int:userId>/bookmarks')
@login_required
def get_user_bookmarks(userId):
    articles_bookmarked = []
    bookmarks = db.session.query(Bookmark).join(Article) \
        .filter(Bookmark.article_id == Article.id) \
        .filter(Bookmark.user_id == userId).all()
    for bookmark in bookmarks:
        saves = Bookmark.query.filter(Bookmark.article_id == bookmark.article_id).all()
        saver_list = [save.user_id for save in saves]
        articles_bookmarked.append(bookmark.to_dict(saver_list))

    return {'bookmarks': articles_bookmarked}


@article_routes.route('/<int:articleId>/bookmarks', methods=["POST"])
@login_required
def add_bookmark(articleId):
    user_id = request.form['user_id']
    new_bookmark = Bookmark(
        user_id=user_id,
        article_id=articleId
    )
    db.session.add(new_bookmark)
    db.session.commit()
    saves = Bookmark.query.filter(Bookmark.article_id == new_bookmark.article_id).all()
    saver_list = [save.user_id for save in saves]
    return new_bookmark.to_dict(saver_list)

```


JSX flow through the components related to articles
``` js
// DISCOVER
return (
      <div className="discover-container">
         <div className="discover-article-intro">
         <p>Chromaculture is for artists, designers, and those obsessed with all things color! Stop by to see the latest articles we've gathered, and log in to bookmark your favorites and join us in the comments section.</p>
         </div>
         <div className="discover-article-div">
               <h2 className="discover-article-title">browse articles</h2>
               <ArticleAll articles={articles} />
         </div>
      </div>
);

// ARTICLE ALL
return (
      <ul className="article-grid">
         {articles && articles?.map((article) => {
               return <ArticleCard key={article.id} article={article} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />;
         })}
      </ul>
)
// ARTICLE CARD
return (
        <li className="article-card">
            <img className="article-card-image" src={article.image_url} alt="article preview" />
            <h3 className="article-card-title">{article.title}</h3>
            <p className="article-card-description">{article.description}</p>
            <div className="article-card-modal-button">
                <ArticleDetailModal article={article} showArticleModal={showArticleModal} setShowArticleModal={setShowArticleModal} />
            </div>
        </li>
);

 // ARTICLE DETAIL MODAL
return (
    <>
        <button
            className="article-detail-button"
            onClick={() => setShowArticleModal(article)}>
            read more
        </button>
        {showArticleModal && showArticleModal?.id === article?.id && (
        <Modal onClose={() => {
            setShowArticleModal(null);
        }}>
            <ArticleDetail article={article} setShowArticleModal={setShowArticleModal} />
        </Modal>
      )}
    </>
);

// ARTICLE DETAIL
if (article) {
        return (
            <div className="modal-wrapper-div article-modal-container">
                <div className="modal-header">
                    <div className="comments-link-on-modal">
                        <a href={articlePage} className="secondary-link-as-button">comments <i className="fas fa-comment"></i></a>
                    </div>
                    <div className="close-button-div">
                        <i onClick={closeOverlay} className="fas fa-window-close close-modal-x"></i>
                    </div>
                </div>

                <ArticleContent article={article} />
            </div>
        );
} else {
        return null
}

// ARTICLE CONTENT
if (article) {
      return (
         <div className="article-content-container">
               <div className="bookmark-div">
                  {bookmarkIcon}
               </div>
               <div className="article-info">
                  <h1 className="article-title">{article.title}</h1>
                  <img className="article-image" src={article.image_url} alt="article preview" />
                  <p className="article-author">{article.author}</p>
                  <p className="article-source">{article.source}</p>
                  <p className="article-savers">{(article.saver_list).length} bookmarked</p>
                  <p className="article-description">{article.description}</p>

                  <div className="article-quote-div">
                     <i className="fas fa-quote-left"></i>
                     <p className="article-quote">{article.quote}</p>
                     <i className="fas fa-quote-right"></i>
                  </div>

                  <a href={article.link_url} className="primary-link-as-button" target={"_blank"} rel={"noreferrer"}>full article <i className="fas fa-arrow-right"></i></a>
               </div>

         </div>
      );
   } else {
      return null
   }

````


# Conclusion
The Chromaculture app is painstakingly styled to present the curated content in a beautiful, responsive, and engaging way. The text throughout the app is real with thoughtful overviews and pull quotes from each article. I look forward to maintaining the app and adding new color stories, and I hope that users enjoy the vibrant theme and fascinating topic.


# Developer notes

Start application
   ```bash
   pipenv shell
   flask run
   ```

   ```bash
   npm start
   ```

Install dependencies
   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```
* psycopg2-binary MUST remain a dev dependency can't install it on apline-linux (layer in the Dockerfile that will install (not binary) psycopg2
* After adding new python dependencies to pipfiles, regenerate requirements.txt before deployment
   ```bash
   pipenv lock -r > requirements.txt
   ```

Local database
   ```bash
   pipenv shell
   flask seed undo
   flask db downgrade
   flask db migrate
   flask db upgrade
   flask seed all
   ```

Heroku database
   ```bash
   heroku login
   heroku run -a chromaculture flask db upgrade
   heroku run -a chromaculture flask seed all
   ```
