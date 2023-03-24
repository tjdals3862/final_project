import React, { useState } from 'react'
import "../css/main.css"
const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <div className="menu" style={{fontFamily: 'Roboto Mono'}} >
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
              <li><span onClick={toggleDropdown}>요양원안내</span></li>
              {isOpen && (
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              )}
            </div>
            <div>
              <li><span onClick={toggleDropdown}>면회</span></li>
              {isOpen && (
                <ul>
                  <li>면회신청</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              )}
            </div>
            <div>
              <li><span onClick={toggleDropdown}>내정보</span></li>
              {isOpen && (
                <ul>
                  <li>내정보 확인</li>
                  <li>결제하기</li>
                  <li>결제 내역 확인</li>
                </ul>
              )}
            </div>
            <div>
              <li><span onClick={toggleDropdown}>공지사항</span></li>
              {isOpen && (
                <ul>
                  <li>이달의 후원자</li>
                  <li>후원하기</li>
                  <li>자원봉사신청</li>
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
