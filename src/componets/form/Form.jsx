import React, { useState } from 'react'
import './style.css'



const Form = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const onChangeHandler = (event) => {
      setTitle(event.target.titleValue);
      setBody(event.target.conValue);
    }
  
    return (
        <div className='Form'>
          <div className='Form-content'>
            <div className='Form-input-wrap'>
              <div className='Form-input-group'>
                <div className='Form-input-title'>제목</div>
                <input className='Form-input' type='text' onChange={onChangeHandler} titleValue={title}/>
              </div>
              
              <div className='Form-input-group'>
                <div className='Form-input-title'>내용</div>
                <input className='Form-input' type='text' onChange={onChangeHandler} conValue={body}/>
              </div>
            </div>  
              <button onClick={
                () => {
                  if (title !=='' && body !==''){
                    addTodo(title, body)
                    setTitle('');
                    setBody('');
                  }
                }
              } className='Form-btn'>추가하기</button>  
          </div>
        </div>
    )
  }

  export default Form;