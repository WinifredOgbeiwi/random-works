import React, { useState, useEffect } from 'react';

function Api() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="posts-container">
      {posts.map(({id,text,author}) => {
        return (
          <div className="post-card" key={id}>
            <h2 className="post-title">{author}</h2>
            <p className="post-body">{text}</p>
            <div className="button">
              <div className="delete-btn">Delete</div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Api