const NewTask = ({ data }) => {
  // console.log(data);

  return (
    <div className=" flex-shrink-0 ml-3 h-full w-[300px] bg-blue-400 rounded-xl">
      <div className="flex items-center justify-between p-3">
        <h3 className="font-semibold  bg-red-500 px-2 py-1 rounded-xl">
          {data.category}
        </h3>
        <h4 className="font-semibold text">{data.taskDate}</h4>
      </div>
      <h2 className="px-3 py-1 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm px-3 mt-2 ">{data.description}</p>
      <div className="flex justify-between mt-3">
        <button className="mt-4 bg-green-500 py-2 px-2 text-sm rounded ml-2">
          Accept Task
        </button>
        <button className="mt-4 bg-red-500 py-2 px-2 text-sm rounded mr-2">
          Decline
        </button>
      </div>
    </div>
  );
};

export default NewTask;
