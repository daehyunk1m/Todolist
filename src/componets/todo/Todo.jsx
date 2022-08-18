import React from 'react'
import './style.css'

const Todo = ({todo, onChange, onRemove}) => {
    return (
      <div>
        <div className='Todo-container' key={todo.id}>
          <div className='Todo-content'>
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>  
          </div>
          <div className='Todo-btn'>
            <button className='Todo-btn-remove' onClick={() => onRemove(todo.id)}>삭제하기</button>
            { todo.isDone === false
                ?<button className='Todo-btn-done' onClick={ () => onChange(todo.id) }>완료</button>
                :<button className='Todo-btn-done' onClick={ () => onChange(todo.id) }>취소</button>
            }
          </div>
        </div>
      </div>
    )
  }

  export default Todo;