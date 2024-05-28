import React, { createContext, useState } from "react";

const mainContext:any = createContext({ HealthData: [] });

const initialValue =[{
  id:1,
    name:"kunal",
    bp:110,
    sugar:80,
    Hr:120
}]

export const MainContextWrapper: React.FC<any> = (props) => {
  const [HealthData, setHealthData] = useState(initialValue);
  return (
    <mainContext.Provider
      value={{
        HealthData: HealthData,
        setHealthData:setHealthData
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
}; 

export default mainContext;

