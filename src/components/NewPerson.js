import React, {useEffect, useState} from 'react'
import { dbService }from '../firebase';

function NewPerson() {
    //firebase에 있는 name 가져오기
    const [Names, setNames] = useState([]);

    useEffect( () => {
       //realtime 유동은 onSnapshot으로 ~
       dbService.collection("names").onSnapshot( (snapshot) => {
          const nameArray = snapshot.docs.map( doc => ({id:doc.id, ...doc.data(),
          }))
          setNames(nameArray)
       })
    }, [])
    return (
        <>
           {Names.map( name => {
               return(
                <ul className="user-table-info" key={name.id}>
                <li>{name.Name}</li>
                <li>{name.Mobile}</li>
                <li>{name.Email}</li>
                <li>{name.createdAt}</li>
                </ul>
               )
           }
)}
        </>
    )
}


export default NewPerson