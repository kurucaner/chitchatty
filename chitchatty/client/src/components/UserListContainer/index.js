import React, {useEffect, useState} from "react";

import UserCard from "../UserCardContainer";

const UserList = () => {
    const [users, setUsers] = useState([])
    
    const getUserList = async() => {
        
            fetch("http://localhost:9292/users")
                .then(resp =>resp.json())
                .then(data => {
                    console.log(data)
                    setUsers(data)
    })} 

    useEffect(()=>{getUserList()}, [])

    const userArr= users.map((user)=> {
        return (<UserCard key={user.id} user={user} />)
    })

    return (
        <ul>
            {userArr}
        </ul>
    );
}

export default UserList;