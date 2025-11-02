import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #eee;
  margin-top: 8px;
  height: 100px;
  text-align: center;
`;

const Link = styled.a`
  display: block;
`;

const Instagram = styled.i`
  margin-top: 20px;
  font-size: 40px;
  color: #888;
`;

const Small = styled.small`
  color: #888;
`;

const Footer = () => {
  return(
  <StyledFooter>
    <Link href="https://www.instagram.com/2025_kyowa?igsh=ODhtMm5naGs4dHJ5&utm_source=qr">
      <Instagram className="fa-brands fa-instagram"></Instagram>
    </Link>
    <Small>2025/11/2 nishikawa</Small>
  </StyledFooter>
  )
}

export default Footer;