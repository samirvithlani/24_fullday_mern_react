import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export const EditUser = () => {
    const id = useParams().id;
    const navigate = useNavigate()
    //GETUSER By ID
    //const {register,handleSubmit} = useForm({defaultValues:{name:"text"}})

    const {register,handleSubmit} = useForm({defaultValues:async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        console.log(res.data.data)
        return res.data.data //all _id,
    }})
    const submitHandler = async(data)=>{
        //console.log("data.....",data)
        delete data._id
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
        console.log(res)
        if(res.status==200){
            alert("user updated..")
            navigate("/apidemo1")
        }
    }
  return (
    <div>
        <h1>EDIT USER</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <input type='submit' value="update"></input>
            </div>

        </form>
    </div>
  )
}
