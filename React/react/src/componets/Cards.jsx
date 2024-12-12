import {} from "react";
import Card from "./Card";
import { Datacontext } from "../Context/Usercontext";
import { useContext } from "react";

const Cards = () => {
  const data = useContext(Datacontext);
  console.log(data);
  return (
    <>
      {data.map((ele) => {
        return (
          <>
            {" "}
            <Card user={ele} />
          </>
        );
      })}
    </>
  );
};

export default Cards;
