import React, { useState } from 'react'
import "../css/main.css"
const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu">
        <nav className="navbar">
          <div className="navbar_logo">            
            <a href="/">KH 요양원</a>
          </div>

          <ul className="navbar_menu">
            <li>
              <a href="/">Home</a>
              <div>
                <a hidden herf="/home" style={{}}>a</a>
              </div>
            </li>

            <div>
              <li><span onClick={toggleDropdown}>메뉴1</span></li>
              {isOpen && (
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              )}
            </div>
            <div>
              <li><span onClick={toggleDropdown}>메뉴2</span></li>
              {isOpen && (
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              )}
            </div>
            <div>
              <li><span onClick={toggleDropdown}>메뉴3</span></li>
              {isOpen && (
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              )}
            </div>
            <div>
              <li><span onClick={toggleDropdown}>메뉴4</span></li>
              {isOpen && (
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              )}
            </div>
            <div>
              <li><span onClick={toggleDropdown}>메뉴5</span></li>
              {isOpen && (
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              )}
            </div>


          </ul>

          <div className="navbar_login">
            <a href="/">로그인</a>
            <a href="/">회원가입</a>
          </div>

          <a href="/" className="navbar_toggleBtn">
            
          </a>
        </nav>  
      </div>
    </>
  )
}

export default MainHeader
