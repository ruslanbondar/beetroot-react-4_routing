import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Posts } from './pages/Posts/Posts';
import { SinglePost } from './pages/SinglePost/SinglePost';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
