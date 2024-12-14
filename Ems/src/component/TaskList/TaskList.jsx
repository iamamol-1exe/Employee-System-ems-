import AcceptedTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <>
      <div
        id="tasklist"
        className="h-[50%] flex overflow-x-auto items-center justify-start gap-3 w-full flex-nowrap py-4 mt-11"
      >
        {data.tasks.map((ele, id) => {
          if (ele.active) {
            return <AcceptedTask key={id} data={ele} />;
          }
          if (ele.newTask) {
            return <NewTask key={id} data={ele} />;
          }
          if (ele.failed) {
            return <FailedTask key={id} data={ele}  />;
          }
          if (ele.completed) {
            return <CompleteTask key={id} data={ele}  />;
          }
        })}
      </div>
    </>
  );
};

export default TaskList;
