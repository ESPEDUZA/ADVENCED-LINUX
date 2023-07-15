import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UsersList from './UsersList';
import PostsList from './PostsList';
import CommentsList from './CommentsList';
import './App.css'

function App() {
  return (
      <>
        <style>{`
        nav {
          background-color: #333;
          padding: 10px;
        }
        nav ul {
          list-style-type: none;
          padding: 0;
        }
        nav a {
          color: #fff;
          text-decoration: none;
        }
        .users-list {
          margin: 10px;
        }
      `}</style>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/comments">Comments</Link></li>
              </ul>
            </nav>
            <div className="users-list">
              <Routes>
                <Route path="/users" element={<UsersList />}>

                </Route>
                <Route path="/posts" element={<PostsList />}>

                </Route>
                <Route path="/comments" element={<CommentsList />}>

                </Route>
              </Routes>
            </div>
          </div>
        </Router>
      </>
  );
}

export default App;