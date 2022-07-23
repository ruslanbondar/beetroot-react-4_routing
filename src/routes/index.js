import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Posts } from '../pages/Posts/Posts';
import { SinglePost } from '../pages/SinglePost/SinglePost';
import { Contacts } from '../pages/Contacts/Contacts';
import ContactMUI from '../pages/ContactMUI/ContactMUI';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Homepage</h1>} />
      <Route path="/about" element={<Navigate to="/contact" />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/contactMUI" element={<ContactMUI />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      {/* <Route path="*" element={<h1>Not Found Page</h1>} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
