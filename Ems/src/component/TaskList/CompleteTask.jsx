const CompletdTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 ml-3 h-full w-[300px] bg-emerald-400 rounded-xl">
      <div className="flex items-center justify-between p-3">
        <h3 className="font-semibold  bg-red-500 px-2 py-1 rounded-xl">{data.category}</h3>
        <h4 className="font-semibold text">{data.taskDate}</h4>
      </div>
      <h2 className="px-3 py-1 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm px-3 mt-2 ">
      {data.description}
      </p>
      <div className="mt-6  text-xl font-semibold">
        <button className="w-full">Completed</button>
      </div>
    </div>
  );
};


export default CompletdTask;