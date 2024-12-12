const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text "
              placeholder="Make task "
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text"
              placeholder="Employe Name "
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text"
              placeholder=" design, dev, etc "
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3>Discription </h3>
          <textarea
            className="w-full h-44 text-sm px-4 py-2 rounded bg-transparent outline-none border-[1px] mb-3 border-gray-400"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
        </div>

        <button className="bg-emerald-500 py-3 px-5 rounded-xl mt-5 ml-5 hover:bg-emerald-600 text-sm">
          {" "}
          Create Task
        </button>
      </form>
    </div>
  );
};
export default CreateTask;
