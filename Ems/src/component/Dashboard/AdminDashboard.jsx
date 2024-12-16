import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDasboard = (props) => {

  return (
    <>
      <div className="h-screen w-full p-6">
        <Header changeUser={props.changeUser}></Header>
        <CreateTask></CreateTask>
        <AllTask></AllTask>
      </div>
    </>
  );
};

export default AdminDasboard;
