import React from 'react';
import faker from 'faker';

function getTime() {
  return new Date().toLocaleTimeString();
}
const CommentDetail = props => {
  return (
    <>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
      </div>
      <div className="content">
        <a href="/" className="author">
          {props.nameOfAuthor}
        </a>

        <span className="date"> {getTime()}</span>

        <div className="text">Nice blog post!</div>
      </div>
    </>
  );
};

export default CommentDetail;
