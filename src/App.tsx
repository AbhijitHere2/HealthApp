import { useState } from "react";
import "./App.css";
import AnalyticsHealthData from "./components/AnalyticsHealthData/AnalyticsHealthData";
import NavBar from "./components/NavBar/NavBar";
import ShowHealthData from "./components/ShowHealthData/ShowHealthData";
import { MainContextWrapper } from "./mainContext/mainContext";
import AddHealthData from "./components/AddHealthData/AddHealrhData";

function App() {
  const [loadContent, setLoadContent] = useState(<AddHealthData />);
  const btnArr = [
    {
      id: 1,
      lable: "AddHealthData" ,
      btFun: () => {
        setLoadContent(<AddHealthData />);
      },
    },
    {
      id: 2,
      lable: "ShowHealthData" ,
      btFun: () => {
        setLoadContent(<ShowHealthData/>);
      },
    },
    {
      id: 3,
      lable: "AnalyticsHealthData" ,
      btFun: () => {
        setLoadContent(<AnalyticsHealthData />);
      },
    },
  ];

  return (
    <MainContextWrapper>
      <div>
        <NavBar btnArr={btnArr} />
        {loadContent}
      </div>
    </MainContextWrapper>
  );
}

export default App;
