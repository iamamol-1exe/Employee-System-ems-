import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [data, setData] = useContext(AuthContext);
  // const data = authData.employees;

  return (
    <>
      <div className="bg-[#1c1c1c] p-4 mt-5 rounded h-70">
        <div className="bg-emerald-400 py-2 mb-3 px-4 flex justify-between rounded">
          <h2 className="w-1/5 ">Employee Name</h2>
          <h3 className="w-1/5 "> New Tasks</h3>
          <h5 className="w-1/5 ">Active Task</h5>
          <h5 className="w-1/5 ">Completed</h5>
          <h5 className="w-1/5 ">Failed</h5>
        </div>
        <div className="h-[80%]coverflow-auto h-full">
          {data.map(function (ele, idx) {
            return (
              <div
                key={idx}
                className="bg-transparent border-2 border-emerald-400 py-2 mb-3 px-4 flex justify-between rounded"
              >
                <h2 className="w-1/5">{ele.firstName}</h2>
                <h3 className="w-1/5 text-blue-600">
                  {ele.taskNumber.newTask}
                </h3>
                <h5 className="w-1/5 text-yellow-400">
                  {ele.taskNumber.active}
                </h5>
                <h5 className="w-1/5 text-green-600">
                  {ele.taskNumber.completed}
                </h5>
                <h5 className="w-1/5 text -red-600">{ele.taskNumber.failed}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTask;
