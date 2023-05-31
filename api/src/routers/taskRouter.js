import express from "express";
import {
  DeleteTask,
  getSingleTask,
  getTask,
  insertTask,
  updateTask,
} from "../model/task/TaskModel.js";

const router = express.Router();

//Get all the task
router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = _id ? await getSingleTask(_id) : await getTask();
    res.json({
      status: "success",
      message: "Your all task are here.",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//Insert all the task
router.post("/", async (req, res, next) => {
  try {
    const result = await insertTask(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Your task has been inserted successfully.",
          result,
        })
      : res.json({
          status: "error",
          message:
            "Your task has not been inserted successfully. P[ease try again!!",
          result,
        });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//Updates the task
router.patch("/", async (req, res, next) => {
  try {
    const { _id, type } = req.body;
    const result = await updateTask(_id, type);
    res.json({
      status: "success",
      message: "Your task has been updated successfully.",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

//delete single or multiple task
router.delete("/", async (req, res, next) => {
  try {
    const ids = req.body;
    const result = await DeleteTask(ids);
    res.json({
      status: "success",
      message: "Your task has been deleted successfully.",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
