import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDasboard = () => {
  return (
    <>
      <div className="h-screen w-full p-6">
        <Header></Header>
        <CreateTask></CreateTask>
        <AllTask></AllTask>
      </div>
    </>
  );
};

export default AdminDasboard;
