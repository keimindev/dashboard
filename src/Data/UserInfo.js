import React from 'react'

const UserInfo = ({ users }) => {
    return(
        <>
        {users.map(user => {
            return(
                <ul className="user-table-info" key={user.id}>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.phone}</li>
                <li>{user.email}</li>
                <li>2021-08-05</li>
                <li className="del-btn">Delete</li>
            </ul>
            )
        })}

    </>
    )   
}

export default UserInfo