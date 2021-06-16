import React from "react";

interface TodoItemProps {
  name: string;
}

function TodoItem(props: TodoItemProps) {
  return(
    <div>{props.name}</div>
  )
}

export default TodoItem;