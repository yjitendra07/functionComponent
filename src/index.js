import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
function getTime() {
  return new Date().toLocaleTimeString();
}
const Test = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail nameOfAuthor="Sriansh" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail nameOfAuthor="Srisanth" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail nameOfAuthor="Srishti" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<Test />, document.getElementById('root'));
