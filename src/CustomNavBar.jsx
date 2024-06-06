import React from 'react';

const CustomNavBar = () => {
  return (
    <>
      <nav>
        <div className='logo'>AEON</div>
        <ul className='main'>
          <li>
            <a href='/showcase' onClick={(e) => e.preventDefault()}>
              ShowCase
            </a>
          </li>
          <li>
            <a href='/docs' onClick={(e) => e.preventDefault()}>
              Docs
            </a>
          </li>
          <li>
            <a href='/blog' onClick={(e) => e.preventDefault()}>
              Blog
            </a>
          </li>
          <li>
            <a href='/analytics' onClick={(e) => e.preventDefault()}>
              Analytics
            </a>
          </li>
          <li>
            <a href='/templates' onClick={(e) => e.preventDefault()}>
              Templates
            </a>
          </li>
          <li>
            <a href='/enterprise' onClick={(e) => e.preventDefault()}>
              Enterprise
            </a>
          </li>
        </ul>

        <div className='search'>
          <input
            className='search-field'
            type='text'
            placeholder='Search documentation...'
          />
        </div>
      </nav>
    </>
  );
};

export default CustomNavBar;
