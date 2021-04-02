import React, { useState } from "react";

const List = ({ user }) => {
  return (
    <>
      {user.map((x) => {
        const { id, name, age, image } = x;
        return (
          <li className='person'>
            <img src={image} alt={name} />
            <div>
              <h5>{name}</h5>
              <p>{age} Yo</p>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default List;
