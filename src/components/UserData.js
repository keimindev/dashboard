import React, {useEffect, useState } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';

const Users = () =>{
    const [users, setUsers] = useState([])

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( response => { 
                setUsers(response.data);
            });
    }, []);

    return(
        <>
        <UserInfo users={users}/>
        </>
    )

}


export default Users
