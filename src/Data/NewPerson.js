import React, { useEffect, useState} from 'react'
import { dbService }from '../firebase';

function NewPerson({ search, setSearch,  }) {
    //firebase에 있는 name 가져오기
    const [Names, setNames] = useState([]);

    useEffect( () => {
       //realtime 유동은 onSnapshot으로 ~
       dbService.collection("names")
       .orderBy("createdAt","desc")
       .onSnapshot( (snapshot) => {
          const nameArray = snapshot.docs.map( doc => ({id:doc.id, ...doc.data(),
          }))
          setNames(nameArray)
       })
    }, [])


    const handleDelete = async (e) => {
        const val =e.target.value
        const ok = window.confirm("Are you sure you want to delete this member?");
        if(ok){
            await dbService.doc(`names/${val}`).delete();
        }
    }

    return (
        <>      
        
           {Names.filter((name) => {
               if(search == ""){
                   return name
               }else if(name.Name.toString().toLowerCase().includes(search.toString().toLowerCase())){
                   return name
               }else if(name.Mobile.toString().includes(search.toString())){
                   return name
               }
           }).map( name  => {
               return(
                <ul className="user-table-info" key={name.id}>
                <li>{name.Name}</li>
                <li>{name.Mobile}</li>
                <li>{name.Email}</li>
                <li>{name.createdAt}</li>
                <li><button className="del-btn" value={name.id} onClick={handleDelete}>Delete</button></li>
                </ul>
               )
           }
)}
        </>
    )
}


export default NewPerson