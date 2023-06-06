import axios from "axios";

const apiEP =
  process.env.NODE_ENV === "production"
    ? " "
    : "http://localhost:8000/api/v1/task/";

//Give all the tasks
export const fetchTasks = async () => {
  try {
    const { data } = await axios.get(apiEP);
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
    const { data } = await axios.post(apiEP, obj);
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
    const { data } = await axios.patch(apiEP, obj);
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
    const { data } = await axios.delete(apiEP, { data: ids });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
