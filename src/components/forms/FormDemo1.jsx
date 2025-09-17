import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MyButton } from "../common/MyButton";

export const FormDemo1 = () => {
  //react-hook-form
  const { register, handleSubmit } = useForm();
  const [output, setoutput] = useState({});
  const [isSubbmited, setisSubbmited] = useState(false)
  //register : input register..
  //handleSubmi : function -->submit event...

  const submitHandler = (data) => {
    console.log(data); //{name,age}
    setoutput(data);
    setisSubbmited(true) //true
  };

  return (
    <div>
      <h1>FORM DEMO 1</h1>
      <MyButton name="form"></MyButton>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>GENDER</label> <br></br>
          MALE :
          <input type="radio" value="male" {...register("gender")}></input>{" "}
          &nbsp;&nbsp; FEMALE :
          <input type="radio" value="female" {...register("gender")}></input>
        </div>
        <div>
          <label>HOBBIES</label>
          <br></br>
          CHESS :{" "}
          <input type="checkbox" {...register("hobbies")} value="chess"></input>
          &nbsp; CRICKET :{" "}
          <input
            type="checkbox"
            {...register("hobbies")}
            value="cricket"
          ></input>
          &nbsp; Foot BALL :{" "}
          <input
            type="checkbox"
            {...register("hobbies")}
            value="football"
          ></input>
          &nbsp;
        </div>
        <div>
          <label>COUNTRY</label>
          <select {...register("country")}>
            <option value="INDIA">INDIA</option>
            <option value="USA">USA</option>
            <option value="CHINA">CHINA</option>
          </select>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>

{
  isSubbmited == true && 
  <div>
        <h1>OUTPUT</h1>
        <h2>NAme : {output.name}</h2>
        <h3>Age : {output.age}</h3>
      </div>
}
      
    </div>
  );
};
