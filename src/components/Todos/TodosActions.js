import React from "react";
import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.modules.css";

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        {" "}
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
