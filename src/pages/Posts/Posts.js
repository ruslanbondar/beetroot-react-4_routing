import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Posts.module.scss';

const url = 'https://jsonplaceholder.typicode.com';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${url}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      <div className={styles.postsWrapper}>
        {posts.map((post) => {
          return (
            <Link to={`${post.id}`} key={post.id}>
              {post.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
