import styled from "styled-components"

const StyledDiv = styled.div`
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

const List = styled.dl`
  margin: 0;
  margin-left: 4px;
  font-size: 16px;
`;

const DetailDt = styled.dt`
  float: left;
`;
const DetailDd = styled.dd`
  margin-left: 80px;
`;

const Titel = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-left: 8px;
  width: 80px;
  /* margin: 0 0 0 4px;
  width: 340px;
  background: #f4f4f4;
  border-left: solid 5px dodgerblue;
  border-bottom: solid 3px lightgray; */

  /* background: linear-gradient(transparent 70%, #80c7e9 30%); */

  border-bottom: solid 3px #80c7e9;
  position: relative;

  &::after{
    position: absolute;
    content: '';
    display: block;
    border-bottom: 3px solid #0095b7;
    bottom: -3px;
    width: 30%;
  }

`;

const Date = () => {


  return(
    <StyledDiv>
      <Titel>概要</Titel>
      <DetailDiv>
        <List>
          <DetailDt>開催日時：</DetailDt>
          <DetailDd>2026年1月11日(日) 18時～20時</DetailDd>
        </List>
        <List>
          <DetailDt>開催地　：</DetailDt>
          <DetailDd>パールガーデン 新館 インペリアル ６階</DetailDd>
        </List>
        <List>
          <DetailDt>会費　　：</DetailDt>
          <DetailDd>10000円</DetailDd>
        </List>
      </DetailDiv>
    </StyledDiv>
  )
}

export default Date;