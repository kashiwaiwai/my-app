import styled from "styled-components"


const StyledHeader = styled.header`
  margin: 0;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #d3d3d363;
  background-image: url("/header.jpg");
  background-position: center center;
  background-size: cover;
`;

const StyledImg = styled.img`
  height: 60px;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  font-family: "Yuji Boku",serif;
  text-shadow: 1px 2px 1px white;
`;

const Header = () => {
  return(
    <>
      <StyledHeader>
        <StyledImg src="logo.png" alt="協和中校章"/>
        <StyledTitle>
          協和中2021年卒同窓会
        </StyledTitle>
      </StyledHeader>
    </>
  )
}

export default Header;