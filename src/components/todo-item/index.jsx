import React from "react";
import Button from "../button";

const TodoItem = (props) => {
  const {
    isComplete,
    text,
    onClick,
    onDelete
  } = props

  const handleDelete = (e) => {
    e.stopPropagation()
    onDelete()
  }

  return (
    <div
      onClick={onClick}
      style={{
        textDecoration: isComplete ? 'line-through' : 'none'
      }}
      className={'todo-list-item'}
    >
      {text}
      <Button onClick={handleDelete}>
        delete
      </Button>
    </div>
  )
}

export default TodoItem