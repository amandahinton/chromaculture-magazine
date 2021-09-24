import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import ArticleDetail from './ArticleDetail'

function ArticleDetailModal({articleId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <button
            className="article-detail-button"
            onClick={() => setShowModal(true)}>
            read more
        </button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <ArticleDetail articleId={articleId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default ArticleDetailModal;
