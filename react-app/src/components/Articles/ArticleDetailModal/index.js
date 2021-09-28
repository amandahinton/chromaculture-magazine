import React from 'react';
import { Modal } from '../../../context/Modal';
import ArticleDetail from './ArticleDetail'


function ArticleDetailModal({article, showArticleModal, setShowArticleModal}) {

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
}

export default ArticleDetailModal;
