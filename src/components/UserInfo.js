import React from 'react'

const UserInfo = ({ users }) => {
    console.log(users)
    return(
        <>
        {users.map(user => {
            return(
                <ul className="user-table-info" key={user.id}>
                <li>{user.name}</li>
                <li>{user.phone}</li>
                <li>{user.email}</li>
                <li>2021-08-21</li>
            </ul>
            )
        })}

    </>
    )   
}

export default UserInfo