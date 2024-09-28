import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer id="footerType" className={`footer__wrap ${props.element}`}>
      <h2 className="blind">푸터 영역</h2>
      <div className="footer__inner footer__container"> {/* 클래스명을 수정 */}
        <div className="footer__menu">
          <div></div>
          <div>
            <h3>관련사이트</h3>
            <ul>
              <li>
                <a href="https://indistreet.com/" target="_blank" rel="noopener noreferrer">
                  인디스트릿
                </a>
              </li>
              <li>
              <a href="https://www.mule.co.kr/" target="_blank" rel="noopener noreferrer">
                뮬
              </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>소통 마당</h3>
            <ul>
              <li>
                <NavLink to="/talk">인디토크</NavLink>
              </li>
              <li>
                <NavLink to="/together">같이봐요</NavLink>
              </li>
              <li>
                <NavLink to="/review_perform">공연 후기</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>공연장</h3>
            <ul>
              <li>
                <NavLink to="/info_perform">공연 정보</NavLink>
              </li>
              <li>
                <NavLink to="/promote_perform">공연 홍보</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>회원정보</h3>
            <ul>
              <li>
                <NavLink to="/signup">회원가입</NavLink>
              </li>
              <li>
                <NavLink to="/mypage">마이페이지</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2024 Gig-Vibe.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

