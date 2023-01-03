import "./UserList.css"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardCompo from './CardCompo'

const UserList = () => {
    const [users , setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <div className='ListCont'>
       {users.map((user , index) => <CardCompo className={'singelCard'} key={index} user={user} /> )}

    </div>
  )
}

export default UserList