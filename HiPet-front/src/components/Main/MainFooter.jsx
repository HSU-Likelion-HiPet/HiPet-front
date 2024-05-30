import React from "react";
import styled from "styled-components";
import logo from "../../assets/HiPetFooterLogo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <Logo src={logo} alt="Hi pet" />
        <Menu>
          <MenuItem>문의하기</MenuItem>
          <MenuItem>이용약관</MenuItem>
          <MenuItem>개인정보처리방침</MenuItem>
          <MenuItem>서비스소개</MenuItem>
        </Menu>
      </TopSection>
      <FooterBottom>
        <FooterDivider />
        <BottomContent>
          <Contact>Contact: bnh060828@naver.com</Contact>
          <Copyright>All copyright by 2024 하이펫</Copyright>
        </BottomContent>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #f7f8fa;

  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 290px;
  height: 91px;
  margin-bottom: 20px;
`;

const Menu = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  font-size: 16px;
  color: #9fa4a8;
`;

const FooterDivider = styled.div`
  width: 100%;
  border-top: 0.5px solid #9fa4a8;
  margin-bottom: 10px;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: 20px;
`;

const BottomContent = styled.div`
  display: flex;
  padding-left: 300px;
  gap: 20px;
`;

const Contact = styled.div`
  font-size: 14px;
  color: #9fa4a8;
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #9fa4a8;
`;
