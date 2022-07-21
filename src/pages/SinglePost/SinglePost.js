import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://jsonplaceholder.typicode.com';

export const SinglePost = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`${url}/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
