import React from "react";
import { Col, Row } from "react-bootstrap";
import TaskList from "./TaskList";

const ListArea = ({
  tasklist,
  switchTask,
  totalHour,
  handleOnSelectBox,
  ids,
}) => {
  const entryList = tasklist.filter((item) => item.type === "entry");
  const badList = tasklist.filter((item) => item.type === "bad");

  const badHours = badList.reduce((acc, item) => acc + +item.hr, 0);
  return (
    <div>
      <Row>
        <Col>
          <TaskList
            title="Good List"
            type="right"
            name="entry"
            list={entryList}
            switchTask={switchTask}
            handleOnSelectBox={handleOnSelectBox}
            ids={ids}
          />
        </Col>
        <Col>
          <TaskList
            title="Bad List"
            name="bad"
            list={badList}
            switchTask={switchTask}
            handleOnSelectBox={handleOnSelectBox}
            ids={ids}
          />
          <div className="mt-4 text-end text-danger fw-bold">
            You could have saved : {badHours} Hrs
          </div>
        </Col>
        <div className="text-center mt-5 fw-bold">
          Total allocated Hours is: {totalHour} Hrs
        </div>
      </Row>
    </div>
  );
};

export default ListArea;
