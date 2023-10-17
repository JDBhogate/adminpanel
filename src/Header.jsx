import React from 'react';
import { BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className="search-box">
        <div className="search-input">
          <input type="text" placeholder="search" />
          <BsSearch className='icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
