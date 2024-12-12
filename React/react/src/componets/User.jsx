import { useState } from "react";

const User = () => {

   const[username ,setuser] =useState('dogma')
     
   const changeuser =()=>{
    console.log("button is clicked");
    setuser('Amol')
   }

  return <>
    <h1>user name is {username}</h1>
    <button onClick={changeuser}>change username</button>
   
   </>;
};

export default User;
