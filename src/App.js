import React, { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import TodoItem from "./components/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/todo/actions";
import { getTodos } from "./redux/todo/selectors";
import styles from './style.module.scss';
import { TYPE_OF_FILTER } from "./redux/filter/reducer";
import { filterTodo } from "./redux/filter/actions";
import { getActiveFilter } from "./redux/filter/selectors";

const App = () => {
  const todos = useSelector(getTodos)
  const [inputValue, setInputValue] = useState('')
  const activeTodoFilter = useSelector(getActiveFilter)
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

  const GetTodosByFilter = {
    [TYPE_OF_FILTER.SHOW_ALL]: todos,
    [TYPE_OF_FILTER.SHOW_ACTIVE]: todos.filter(todo => !todo.isComplete),
    [TYPE_OF_FILTER.SHOW_COMPLETED]: todos.filter(todo => todo.isComplete),
  }
  const filterTodos = (todos, filter) => {
    if (filter === TYPE_OF_FILTER.SHOW_ALL) {
      return todos
    }
    if (filter === TYPE_OF_FILTER.SHOW_ACTIVE) {
      return todos.filter(todo => !todo.isComplete)
    }
    if (filter === TYPE_OF_FILTER.SHOW_COMPLETED) {
      return todos.filter(todo => todo.isComplete)
    }
    return todos
  }
  const filteredTodos = activeTodoFilter ? GetTodosByFilter[activeTodoFilter] : todos


  return (
    <div className={styles.container}>
      <header>
        <h1>
          Todo List
        </h1>
      </header>
      <div className={styles.formBox}>
        <form>
          <Input

            type='submit'
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className={styles.plusBtn}> 
          <Button onClick={handleClickAddButton}>
            +
          </Button>
          </div>
        </form>
      </div>
      <div className={'todo-list'}>
        {filterTodos(todos, activeTodoFilter).map(renderTodoItem)}
      </div>
      <div className={styles.filterButtons}>
        <Button onClick={() => dispatch(filterTodo(TYPE_OF_FILTER.SHOW_ALL))}>
          show all
        </Button>
        <Button onClick={() => dispatch(filterTodo(TYPE_OF_FILTER.SHOW_ACTIVE))}>
          show active
        </Button>
        <Button onClick={() => dispatch(filterTodo(TYPE_OF_FILTER.SHOW_COMPLETED))}>
          show completed
        </Button>
      </div>
      <script src="https://kit.fontawesome.com/c0e6a1ffb7.js"
        crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
