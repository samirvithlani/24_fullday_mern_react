import React, { useState } from "react";
import { StudentList } from "./StudentList";

export const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "ram", age: 23 },
    { id: 2, name: "shyam", age: 24 },
    { id: 3, name: "kunal", age: 25 },
  ]);

  const getStudentData = (id) => {
    //id = 2
    var foundStudent = students.find((stu) => stu.id == id);
    //console.log("found student = ",foundStudent)
    //alert("id = "+id)
    alert("Name = " + foundStudent.name);
  };

  //   const deleteStudent = (id)=>{
  //     //alert("id.."+id) id =2
  //     var afterDeleteStudents =students.filter((stu)=>stu.id != id) //3
  //     console.log("after delete......",afterDeleteStudents)
  //     setStudents(afterDeleteStudents) //2
  //   }

  const deleteStudent = (id) => {
    setStudents(students.filter((stu) => stu.id != id));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>STUDENT COMPONENT</h1>
      <StudentList
        students={students}
        getStudentData={getStudentData}
        deleteStudent={deleteStudent}
      ></StudentList>
    </div>
  );
};
