import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, pass);

    setemail("");
    setpass("");
  };

  return (
    <>
      <div className=" flex h-screen w-screen items-center justify-center ">
        <div className="border-2 border-red-600 p-20 rounded-xl">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
              className=" bg-transparent text-white outline-none border-2 border-red-600  rounded-full px-2 py-3 text-xl placeholder:text-white pl-6"
              type="email"
              placeholder="Enter your Email"
            />
            <input
              value={pass}
              onChange={(e) => {
                setpass(e.target.value);
              }}
              required
              className=" bg-transparent text-white outline-none border-2 border-red-600  rounded-full px-2 py-3 text-xl placeholder:text-white mt-3 pl-6"
              type="password"
              placeholder="Enter Password"
            />
            <button className="outline-none  bg-red-600  rounded-full px-4 py-3 text-xl placeholder:text-white mt-3">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
