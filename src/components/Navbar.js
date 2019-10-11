import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li className='bar'>
            <Link to='/mixedgame'>Mixed Game</Link>
          </li>
          <li className='bar'>
            <Link to='/gametwo'>Game two</Link>
          </li>
          <li className='bar'>
            <Link to='/gameone'>Game one</Link>
          </li>
          <li className='bar'>
            <Link to='/dogslist'>DogList</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
