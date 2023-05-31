import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const initialObj = {
  tasK: "",
  hr: "",
  type: "entry",
};

const AddTaskForm = ({ addTask }) => {
  const [form, setForm] = useState(initialObj);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTask(form);
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2">
          <Col md="7">
            <Form.Control
              placeholder="Task"
              name="task"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md="3">
            <Form.Control
              placeholder="Hr"
              name="hr"
              required
              onChange={handleOnChange}
            />
          </Col>
          <Col md="2">
            <Button type="submit">Add Task</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddTaskForm;
