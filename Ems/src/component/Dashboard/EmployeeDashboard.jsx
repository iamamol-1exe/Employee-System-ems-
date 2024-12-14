import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  
  return (
    <>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        
        <Header data={data} />
        <TaskListNumber data={data}></TaskListNumber>
        <TaskList data={data}></TaskList>
      </div>
    </>
  );
};

export default EmployeeDashboard;
