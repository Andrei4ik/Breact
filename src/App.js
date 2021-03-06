import React from 'react';
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPost from './components/FetchedPost'

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
      <div className="col">
        <h2>синхронные посты</h2>
          <Posts />
      </div>
      <div className="col">
      <h2>асинхронные посты</h2>
          <FetchedPost posts={[]} />
      </div>
      </div>
    </div>
  );
}

export default App;
