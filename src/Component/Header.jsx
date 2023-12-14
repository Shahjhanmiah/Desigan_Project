import React from 'react';

const Header = () => {
  const writePost = () => {
    // Handle writePost logic
    console.log('Write a Post clicked');
  };

  const joinGroup = () => {
    // Handle joinGroup logic
    console.log('Join Group clicked');
  };

  return (
    <header>
      <nav className="d-flex justify-content-between">
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">All Posts(32)</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Article</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Event</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Education</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Job</a>
          </li>
        </ul>

        <ul className="nav gap-2">
          <li className="nav-item">
            <button type="button" className="btn btn-primary" onClick={writePost}>Write a Post</button>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-secondary" onClick={joinGroup}>Join Group</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
