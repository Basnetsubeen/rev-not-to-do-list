import React from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TaskList = ({
  title,
  name,
  type,
  list = [],
  switchTask,
  handleOnSelectBox,
  ids,
}) => {
  return (
    <div className=" mt-3">
      <h2 className="text-center">{title}</h2>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check
                  type="checkbox"
                  value={name}
                  onChange={handleOnSelectBox}
                />
              </th>
              <th>Task</th>
              <th>Hour</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr>
                <td>
                  <Form.Check
                    type="checkbox"
                    value={item._id}
                    onChange={handleOnSelectBox}
                    checked={ids.includes(item._id)}
                  />
                </td>
                <td>{item.task}</td>
                <td>{item.hr}</td>
                <td>
                  {type === "right" ? (
                    <Button
                      variant="success"
                      onClick={() => switchTask(item._id, "bad")}
                    >
                      <i class="fa-solid fa-arrow-right"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      onClick={() => switchTask(item._id, "entry")}
                    >
                      <i class="fa-solid fa-arrow-left"></i>
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TaskList;
