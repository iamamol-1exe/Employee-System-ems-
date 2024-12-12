import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./componets/Cards";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    console.log("button is clicked");
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    setData(response.data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="m-11">
        <div className="p-5 mt-5 bg-gray-950">
          {data.map(function (ele) {
            return (
              <div
                key={ele.id}
                className="bg-gray-200 flex items-center justify-between w-full px-7 py-6 rounded mb-3 "
              >
                <h1 className="text-black font-semibold " key={ele.id}>
                  {ele.author}
                </h1>
                <img className="h-96 w-96" src={ele.download_url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <Cards></Cards>
    </>
  );
};

export default App;
