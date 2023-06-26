

import React, { useEffect, useState } from 'react'
import "./home.css"
import Cards from './Cards'
import Axios from 'axios'

const Home = () => {
const[users,Setusers]=useState([])

const fetchData=async()=>{
      await Axios.get("https://dummyjson.com/users").then((res)=>{
console.log(res.data.users)
Setusers(res.data.users)

      }).catch((error)=>console.log(error))
}
useEffect(()=>{
fetchData()
},[])

  return (
    <div className="mybox">

        {users.map=((ele=><Cards img={ele.img} id={ele.id} firstname={ele.firstname} lastname={ele.lastname} age={ele.age} email={ele.email} gender={ele.gender} maidenName={ele.maidenName}/>))}

    </div>
  )
}

export default Home