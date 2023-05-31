import TaskSchema from "./TaskSchema.js";

// insert task
export const insertTask = (obj) => {
  return TaskSchema(obj).save();
};

//find task
export const getTask = () => {
  //single task
  return TaskSchema.find();
};
export const getSingleTask = (_id) => {
  // multiple task
  return TaskSchema.findById(_id);
};

// update task
export const updateTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true });
};

// Delete task
export const DeleteTask = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
