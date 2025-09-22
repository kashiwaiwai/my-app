import InfoCmp from "./InfoCmp";
import infoData from "./InfoData";

const Infomation = () => {
  return(
    <>
      {infoData.map((info) => {
        return (<InfoCmp key={info.id} info={info} />)
      })}
    </>
  )
}

export default Infomation;