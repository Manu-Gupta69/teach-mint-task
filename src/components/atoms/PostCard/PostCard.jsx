import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./PostCard.scss";

const PostCard = ({ title, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsModalOpen(true)} className="post-card-parent">
        <h3>{title}</h3>
        <p>{`${content.slice(0, Math.min(40, content.length))}...`}</p>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{title}</h2>
          <p>{content}</p>
        </Modal>
      )}
    </>
  );
};

export default PostCard;
