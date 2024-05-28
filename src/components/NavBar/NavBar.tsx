import React from "react";
import logo from "../images/logo2.jpg";

const NavBar:React.FC<{btnArr: any}> = ({btnArr}) => {


const navBtn = btnArr.map((bt:any)=>{

    return( <button className="text-white" onClick={()=>{bt.btFun()}} key={bt.id}>{bt.lable}</button>)
})


  return (
    <div className="bg-blue-400 h-20 flex justify-between items-center p-5 ">
      <div className="flex space-x-5 justify-between items-center">
        <img className="h-11 rounded-2xl" src={logo} alt="logo" />

        {/* <button className="text-white">btn1</button>
        <button className="text-white">btn2</button>
        <button className="text-white">btn3</button> */}

        {navBtn}
      </div>
      <button className="text-white">login</button>
    </div>
  );
};

export default NavBar;
