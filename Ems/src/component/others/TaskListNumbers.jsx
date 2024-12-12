const TaskListNumber = () => {
  return (
    <>
      <div className="flex mt-10 justify-between gap-4 screen  ">
        <div className="  w-[30%] bg-red-400 py-6 px-9 rounded-xl">
          <h2 className="text-white text-2xl font-semibold">0</h2>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
        <div className="  w-[30%] bg-blue-400 py-6 px-9 rounded-xl">
          <h2 className="text-white text-2xl font-semibold">0</h2>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
        <div className="  w-[30%] bg-yellow-400 py-6 px-9 rounded-xl">
          <h2 className="text-white text-2xl font-semibold">0</h2>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
        <div className="  w-[30%] bg-orange-400 py-6 px-9 rounded-xl">
          <h2 className="text-white text-2xl font-semibold">0</h2>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
