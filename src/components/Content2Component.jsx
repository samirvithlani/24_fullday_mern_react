import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../redux/ContentSlice'

export const Content2Component = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state.content)
    //data,isLoading,error
    //state.data.map
    //state.isLoading
    useEffect(() => {
      
    dispatch(fetchApi())

    }, [])
    
  return (
    <div>
        <h1>Content2Component</h1>
        {
            state.isLoading && <h1>LOading...</h1>
        }
        <table></table>
    </div>
  )
}
