import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

export const EmployeeChild2 = () => {
  const { data,test } = useContext(EmployeeContext);
  return (
    <div>
      <h1>EMPsLOYEE CHILD 2</h1>
      {data}
      <button onClick={()=>{test(101)}}>TEST</button>
    </div>
  );
};
