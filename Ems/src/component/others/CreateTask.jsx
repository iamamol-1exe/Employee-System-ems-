import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [data, setData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [asign, setAsign] = useState("");
  const [category, setCategory] = useState("");
  const [discription, setDiscription] = useState("");

  const [newtask, setNewTask] = useState({});

  // console.log(data.employees);
  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      title: title,
      taskDate: date,
      category: category,
      description: discription,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

 

    data.forEach((ele) => {
      if (asign == ele.firstName) {
        ele.tasks.push(newtask);
        ele.taskNumber.newTask = ele.taskNumber.newTask + 1;
        console.log("pakda gayya");
        console.log(ele);
      }
    });
    setData(data);
    // localStorage.setItem("employees", JSON.stringify(data));

    setTitle("");
    setAsign("");
    setCategory("");
    setDiscription("");
    setDate("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text "
              placeholder="Make task "
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              value={asign}
              onChange={(e) => {
                // console.log(e.target.value);
                setAsign(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text"
              placeholder="Employe Name "
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                // console.log(e.target.value);
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3"
              type="text"
              placeholder=" design, dev, etc "
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3>Discription </h3>
          <textarea
            value={discription}
            onChange={(e) => {
              // console.log(e.target.value);
              setDiscription(e.target.value);
            }}
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
