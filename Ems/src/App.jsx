import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDasboard from "./component/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  // localStorage.clear()
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [data, setdata] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  console.log(data);
  const handleLogin = (email, password) => {
    if (email == "amol@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (data) {
      const employee = data.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        setloggedInUserData(employee);
      }
    } else {
      alert("invalid email and Password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDasboard changeUser={setUser}></AdminDasboard>
      ) : (
        ""
      )}
      {user == "employee" ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        ></EmployeeDashboard>
      ) : (
        ""
      )}
    </>
  );
};
export default App;
