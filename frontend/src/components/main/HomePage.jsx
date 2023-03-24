import React from 'react'
import MainBottom from '../include/MainBottom'
import MainHeader from '../include/MainHeader'

const HomePage = () => {
  return (
    <>
      <MainHeader/>
      <div style={{fontFamily: "Single Day"}}>
        <h3>
          행복한 삶의 새로운 시작을 
          함께하는
        </h3>        
        <h2>KH요양원</h2>
      </div>
{/*       <div>
        <img src="images/main.jpg" 
        style={{width:"100%", 
        position: "relative", margin: "0"
        ,padding: "0"}}/>
      </div> */}
      <div class="main_banner">
        <p class="move_txt01"><i>행복한 삶의</i> 새로운 시작을<br />함께하는<span>  샤이닝 요양원</span></p>
        <p class="move_txt02">
            환자의 마음을 살피는 자세를 기본으로 시대에 발맞춘 고품질의 의료서비스를 제공합니다.
        </p>
    </div> 
    <div class="main_info_link">
    	<div class="info">
        	<i>진료예약 및 문의</i>
            <strong>1544-6062</strong>
            <span>일요일·공휴일은 휴진입니다.</span>
            <dl>
            	<dt>평일</dt>
                <dd>오전 09:00 - 오후 05:00</dd>
                <dt>토요일</dt>
                <dd>오전 09:00 - 오후 12:30</dd>
            </dl>
        </div>
        <div class="link">
        	<p>Link Service</p>
            <ul>
            	<li><a href="/sh_page/page10.php">요양서비스</a></li>
                <li><a href="/sh_page/page40.php">노인장기요양보험</a></li>
                <li><a href="/bbs/board.php?bo_table=table38">가족 소통방</a></li>
                <li><a href="/bbs/board.php?bo_table=table34">자료실</a></li>
                <li><a href="/bbs/board.php?bo_table=table18">자원봉사</a></li>
                <li><a href="/bbs/board.php?bo_table=table19">후원안내</a></li>
            </ul>
        </div>
    </div>

      
      <MainBottom/>
    </>
  )
}

export default HomePage
