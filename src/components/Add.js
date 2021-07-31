import React from 'react';

const AddPerson = (() => {
    return(
      <>
      <div className="container">
      <h2 className="title">강사관리</h2>
      <ul className="table">
        <li className="category">
          <ul>
            <li>가맹점</li>
            <li>강사명</li>
            <li>휴대전화</li>
          </ul>
        </li>
        <li className="info">
          <ul>
            <li>두서킷 정관점</li>
            <li><input type="text" placeholder="name" className ="text"></input></li>
            <li><input type="text" className ="mobile"></input></li>
          </ul>
        </li>
      </ul>
      <div className="button">
        <button type="button" className="btn">등록</button>
      </div>
      </div>
      </>
    )
  });
  


export default AddPerson;