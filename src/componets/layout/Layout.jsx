import React from 'react'
import './style.css'
import Header from '../header/Header'
import Form from '../form/Form'
import List from '../list/List'

const Layout = ({todos, onChange, onRemove, addTodo}) => {

    return (
      <div className='Layout'>
        <Header/>
        <Form addTodo={addTodo}/>
        <List todos={todos} onChange={onChange} onRemove={onRemove}/>
      </div>
    )
  }


  export default Layout;