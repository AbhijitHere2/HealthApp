import React, { useContext } from "react";
import mainContext from "../../mainContext/mainContext";
import HealthTable from "../../common/HealthTable/HealthTable";

const ShowHealthData:React.FC<any> = () => {
  const healthContext:any = useContext(mainContext);
  const healthContent =[
    "id",
    "name",
    "bp",
    "sugar",
    "Hr"


 ]

  const{ HealthData  }= healthContext;
  console.log("HealthData", HealthData);

  
  return (
  <>
  <div>ShowHealthData</div>

  <HealthTable  healthContent={healthContent} HealthData={HealthData}></HealthTable>
  </>


);

};

export default ShowHealthData;
