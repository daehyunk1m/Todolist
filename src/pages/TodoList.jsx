import React, { useState } from 'react';
import Layout from '../componets/layout/Layout';

const Todolist = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다.',
      isDone: false
    },
    {
      id: 2,
      title: '리액트 공부했죠?',
      body: '리액트 너무 어럽네요.',
      isDone: true
    }
  ]);

  // onRemove, onChange 잘 이해 안감..

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onChange = (id) => {
    setTodos(todos.map(
      todo => todo.id === id
        ? {...todo, isDone : !todo.isDone } 
        : todo
    ))
  };

  const addTodo = (title, body) => {
    const todo = {
      id: todos.length+1,
      title: title,
      body: body,
      isDone: false
    }
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <Layout todos={todos} onChange={onChange} onRemove={onRemove} addTodo={addTodo} />      
    </div>
  )
}

export default Todolist;