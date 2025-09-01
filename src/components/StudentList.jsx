import React from 'react'

export const StudentList = (props) => {
    //{students:[{},{},{}],getStudentData:f,deletStudent:f}
  return (
    <div>
        
        <h1>STUDENT LIST</h1>
        {
            props.students.length==0 && <h1>No student found..</h1>
        }
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>AGE</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.students.map((stu)=>{
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>{props.getStudentData(stu.id)}}>INFO</button>
                                <button style={{margin:2}} className='btn btn-danger' onClick={()=>{props.deleteStudent(stu.id)}}>DELETE</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
