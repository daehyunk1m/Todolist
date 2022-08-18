import React from 'react';
import Todo from '../todo/Todo';
import './style.css'

const List = ({todos, onChage, onRemove}) => {
    return (
      <div className='List'>
        <div className='List-wrap'>
          <h2>Working.. 🔥</h2>
          {todos.map(todo => todo.isDone === false 
          ?<Todo todo={todo} onChage={onChage} onRemove={onRemove} Key={todo.id}/>
          : null
          )}
        </div>
        <div className='List-wrap'>
          <h2>Done...! 🎉</h2>
          {todos.map(todo => todo.isDone === true 
          ?<Todo todo={todo} onChage={onChage} onRemove={onRemove} Key={todo.id}/>
          : null
          )}
        </div>
      </div>
    )
  }

  export default List;