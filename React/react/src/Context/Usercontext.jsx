import { createContext } from "react";

export const Datacontext = createContext();

const Usercontext = ({ children }) => {
  const users = [
    {
      name: "John Doe",
      age: 25,
      city: "New York",
      profilePhoto: "https://example.com/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      age: 30,
      city: "Los Angeles",
      profilePhoto: "https://example.com/jane-smith.jpg",
    },
    {
      name: "Alice Johnson",
      age: 28,
      city: "Chicago",
      profilePhoto: "https://example.com/alice-johnson.jpg",
    },
    {
      name: "Michael Brown",
      age: 35,
      city: "Houston",
      profilePhoto: "https://example.com/michael-brown.jpg",
    },
    {
      name: "Emily Davis",
      age: 22,
      city: "San Francisco",
      profilePhoto: "https://example.com/emily-davis.jpg",
    },
  ];

  return (
    <>
      <Datacontext.Provider value={users}>
        <div>{children}</div>
      </Datacontext.Provider>
    </>
  );
};

export default Usercontext;
