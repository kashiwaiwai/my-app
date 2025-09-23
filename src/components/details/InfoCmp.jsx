import styled from "styled-components"

// https://saruwakakun.com/html-css/reference/css-sample

const Div = styled.div`
  margin-top: 12px;
`;

const DetailDiv = styled.div`
    position: relative;
  background: #e0f2f7;
  box-shadow: 0px 0px 0px 5px #e0f2f7;
  border: dashed 2px white;
  padding: 4px 4px;
  margin: 8px 8px 0;

  &::after{
    content: "";
    position: absolute;
    right: -7px;
    top: -7px;
    border-width: 0 15px 15px 0;
    border-style: solid;
    border-color: transparent white #80c7e9 transparent;
    box-shadow: -1px 1px 1px rgba(0,0,0,0.15);
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-left: 8px;
  font-size: 24px;
  width: 200px;
  

  border-bottom: solid 3px #80c7e9;
  position: relative;

  &::after{
    position: absolute;
    content: '';
    display: block;
    border-bottom: 3px solid #0095b7;
    bottom: -3px;
    width: 20%;
  }
`;
const Text = styled.p`
  margin: 0;

`;
const Deadline = styled.p`
  margin: 0;
  padding-top: 16px;
  color: rgb(220,0,0);

`;
const Link = styled.a`
  display: block;
`;

const InfoCmp = ({info}) => {

  return(
    <Div>
      <Title>{info.title}</Title>
      <DetailDiv>
        <Text>{info.text}</Text>
        <Deadline>{info.deadline}</Deadline>
        <Link href={info.link}>{info.linkText}</Link>
      </DetailDiv>
    </Div>
  );
}

export default InfoCmp;