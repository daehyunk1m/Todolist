import React, { useState } from 'react'
import './style.css'



const Form = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // 분명 같은 것 같았는데 함수형으로 선언한 onChange 파라미터는 작동을 안했고,
    // 화살표 형으로 작성한 코드는 작동을 한다?!
    return (
        <div className='Form'>
          <div className='Form-content'>
            <div className='Form-input-wrap'>
              <div className='Form-input-group'>
                <div className='Form-input-title'>제목</div>
                <input className='Form-input' type='text' value={title} onChange={(event) => {
                  setTitle(event.target.value);
                }} />
              </div>
              
              <div className='Form-input-group'>
                <div className='Form-input-title'>내용</div>
                <input className='Form-input' type='text' value={body} onChange={(event) => {
                  setBody(event.target.value)
                }} />
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