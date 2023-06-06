import axios from "axios";

const apiEP =
  process.env.NODE_ENV === "production" ? " " : "http://localhost:8000";
const taskEP = apiEP + "/api/v1/task";

//Give all the tasks
export const fetchTasks = async () => {
  try {
    const { data } = await axios.get(taskEP);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//insert task
export const insertTask = async (obj) => {
  try {
    const { data } = await axios.post(taskEP, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//update task
export const switchServerTask = async (obj) => {
  try {
    const { data } = await axios.patch(taskEP, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//Delete task
export const deleteServerTask = async (ids) => {
  try {
    const { data } = await axios.delete(taskEP, { data: ids });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
