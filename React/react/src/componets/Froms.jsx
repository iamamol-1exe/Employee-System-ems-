
import { useState } from "react";
import "./Froms.css";

const Froms = () => {
   const [username,setuser]=useState('')
    

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(e)
    console.log(e.target.value);

  };
  return (
    <div className="mains">
      <div className="Fromss">
         <p>{username}</p>
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
        >
          <label htmlFor="Name" className="text-color-white">
            Name
          </label>
          <br />
          <input id="Name" className="border-5" type="text"value={username}
          onChange={(e)=>{
            console.log(e.target.value)
            setuser(e.target.value)
          }}
            />
          <br /> <br />
          <button className="bg-yellow-200 "
          >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Froms;
