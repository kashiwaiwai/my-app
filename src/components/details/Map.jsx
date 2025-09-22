import styled from "styled-components";

const Div = styled.div`
  margin-top: 12px;
`;

const DetailDiv = styled.div`
    position: relative;
  background: #e7f2e4;
  box-shadow: 0px 0px 0px 5px #e7f2e4;
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
    border-color: transparent white #77be7c transparent;
    box-shadow: -1px 1px 1px rgba(0,0,0,0.15);
  }
`;

const MapFrame = styled.iframe`
  border: 0;
  width: 90%;
  height: 300px;
  display: block;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0 0 0 8px;
  font-size: 24px;
  width: 80px;

  border-bottom: solid 3px #c6e0c4;
  position: relative;

  &::after{
    position: absolute;
    content: '';
    display: block;
    border-bottom: 3px solid #2f7a3e;
    bottom: -3px;
    width: 30%;
  }
`;

const Text = styled.p`
    margin: 0 0 0 8px;
`;

const Map = () => {
  return(
    <Div>
      <Title>地図</Title>
      <DetailDiv>
        <Text>〒760-0066 香川県高松市福岡町２丁目２−１</Text>
        <MapFrame 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.1451926804098!2d134.0646237!3d34.3467827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553ec8265a23213%3A0xc78ed2f3861e0dd9!2z44Ob44OG44OrIOODkeODvOODq-OCrOODvOODh-ODsw!5e0!3m2!1sja!2sjp!4v1758099106837!5m2!1sja!2sjp" 
      allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      ></MapFrame>
      </DetailDiv>
    </Div>
  )
}

export default Map;