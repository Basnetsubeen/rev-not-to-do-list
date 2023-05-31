import { Button, Container } from "react-bootstrap";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import ListArea from "./components/ListArea";
import { useEffect, useState } from "react";
import {
  deleteServerTask,
  fetchTasks,
  insertTask,
  switchServerTask,
} from "./helpers/axiosHelper";
const weeklyHrs = 24 * 7;

const App = () => {
  const [tasklist, setTasklist] = useState([]);
  const [ids, setIds] = useState([]);
  const totalHour = tasklist.reduce((acc, item) => acc + +item.hr, 0);

  //Extra hook to fetch all the tasks
  useEffect(() => {
    fetchServerTask();
  }, []);

  // Updates the task with setTasklist and fetch data
  const fetchServerTask = async () => {
    const data = await fetchTasks();
    data.status === "success" && setTasklist(data.result);
  };

  const addTask = async (task) => {
    if (totalHour > weeklyHrs) {
      alert("You have exceeded the total hour");
    }

    // setTasklist([...tasklist, task])
    const result = await insertTask(task);
    result.status === "success" && fetchServerTask();
  };

  const switchTask = async (_id, type) => {
    //if(item._id === _id){
    //item.type = type
    //  }
    // return item
    const result = await switchServerTask({ _id, type });
    result.status === "success" && fetchServerTask();
  };

  const handleOnSelectBox = (e) => {
    const { checked, value } = e.target;
    if (value === "entry" || value === "bad") {
      let idsToDelete = [];
      tasklist.forEach((item) => {
        if (item.type === value) {
          idsToDelete.push(item._id);
        }
      });
      //Tick all or untick all
      if (checked) {
        setIds([...ids, ...idsToDelete]);
      } else {
        const filterArg = ids.filter((item) => !idsToDelete.includes(item));
        setIds(filterArg);
      }
      return;
    }
    // Individual tick and untick
    if (checked) {
      setIds([...ids, value]);
    } else {
      const filterArr = ids.filter((item) => item !== value);
      setIds(filterArr);
    }
  };
  const handleOnDelete = async () => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    // const filterArray = tasklist.filter((item) => !ids.includes(item.id));
    // setTasklist(filterArray);

    const result = await deleteServerTask(ids);
    result.status === "success" && fetchServerTask() && setIds([]);
  };

  return (
    <div className="wrapper">
      <h1 className="text-center py-3 fw-bold">My Not To Do List</h1>
      <Container>
        <AddTaskForm addTask={addTask} />
        <hr />
        <ListArea
          tasklist={tasklist}
          switchTask={switchTask}
          totalHour={totalHour}
          handleOnSelectBox={handleOnSelectBox}
          ids={ids}
        />
        {ids.length > 0 && (
          <div className="mt-2 text-center">
            <Button variant="danger" onClick={handleOnDelete}>
              Delete Task
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
