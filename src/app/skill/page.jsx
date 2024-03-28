"use client"
// import { FaMinus } from "react-icons/fa";
import { useState } from 'react';
import styles from './skill.module.css'; // Import your CSS module

const Skill = () => {
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    if (comment.trim() !== "" && email.trim() !== "") {
      const newComment = {
        text: comment,
        email: email,
      };
      setComments((prevComments) => [...prevComments, newComment]);
      setComment("");
      setEmail("");
    }
  };

  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onDeleteHandler = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Flexbox}>
        <h3 className={styles.Text}>Email</h3>
        <input
          type="email"
          value={email}
          onChange={onChangeEmailHandler}
          className={styles.Box}
          placeholder="Your email..."
        />
      </div>

      <div className={styles.Flexbox}>
        <h3 className={styles.Text}>Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeCommentHandler}
          className={styles.Box}
          placeholder="Your comment..."
        />
        <button onClick={onClickHandler} className={styles.Button}>
          Submit
        </button>
      </div>

      {comments.map((comment, index) => (
        <div key={index} className={styles.Flexbox}>
          <div className={styles.comment}>
            <div>Email: {comment.email}</div>
            <div>{comment.text}</div>
          </div>
          {/* <button onClick={() => onDeleteHandler(index)} className={styles.delete}>
            <FaMinus />
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default Skill;
