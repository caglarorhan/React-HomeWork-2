import React from 'react';

const validationComp = (props)=>{
    const commentOfLength = (props.sentencelengthvalue<5)?"Too short":"Text is long enough!"
  return (
      <div>
          <p>Comment about sentence length: {commentOfLength}</p>
      </div>

  )
};

export default validationComp
