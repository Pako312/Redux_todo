import React, { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import TodoItem from "./components/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/todo/actions";
import { getTodos } from "./redux/todo/selectors";
import { showActiveActionCreator, showAllActionCreator, showCompletedActionCreator } from "./redux/filter/actions"
import './App.css';


const App = () => {
  const todos = useSelector(getTodos)
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const handleInputChange = (value) => {

    setInputValue(value)
  }

  const handleClickAddButton = (e) => {
    e.preventDefault()
    const trimedValue = inputValue.trim()
    if (trimedValue !== '') {
      dispatch(addTodo(trimedValue))
      setInputValue('')
    }
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }
  const handleShowAll = (id) => {
    dispatch(showAllActionCreator(id))
  }
  const handleShowActive = (id) => {
    dispatch(showActiveActionCreator(id))
  }
  const handleShowCompleted = (id) => {
    dispatch(showCompletedActionCreator(id))
  }

  const renderTodoItem = (todo, idx) => {
    return (
      <TodoItem
        key={todo.id}
        isComplete={todo.isComplete}
        text={todo.text}
        onClick={() => handleToggleTodo(todo.id)}
        onDelete={() => handleDeleteTodo(todo.id)}
      />
    )
  }


  return (
    <div className={'container'}>
      <div>
        <form>
          <Input
            type='submit'
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button onClick={handleClickAddButton}>
            +
          </Button>
        </form>
      </div>
      <div className={'todo-list'}>
        {todos.map(renderTodoItem)}
      </div>
      <div className={'filter-buttons'}>
        <Button onClick={handleShowAll}>
          show all
        </Button>
        <Button onClick={handleShowActive}>
          show active
        </Button>
        <Button onClick={handleShowCompleted}>
          show completed
        </Button>
      </div>
    </div>
  );
}

export default App;
