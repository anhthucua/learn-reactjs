import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import queryString from "query-string";
import { useLocation, useSearchParams } from "react-router-dom";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const location = useLocation();
  const [todoList, setTodoList] = useState(initTodoList);

  let [searchParams, setSearchParams] = useSearchParams();

  const [filteredStatus, setFilteredStatus] = useState(() => {
    // const params = queryString.parse(location.search); ===> ver 5

    // return params.status || "all";

    const params = searchParams.get('status');
    return params || 'all';
  });

  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    console.log(todo, idx);
    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    // newTodoList[idx] = newTodo;

    // update todoList
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
    setSearchParams({ status: "all" });
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
    setSearchParams({ status: "completed" });
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
    setSearchParams({ status: "new" });
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList
        todoList={renderedTodoList}
        onTodoClick={handleTodoClick}
      ></TodoList>

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
