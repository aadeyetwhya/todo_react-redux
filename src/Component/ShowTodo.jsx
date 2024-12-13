import React, { useState, } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import EachTodo from './EachTodo';

function ShowTodo() {
  const todos = useSelector(
    state => state.todo.todos
  )
  const dateNow = useSelector(
    state => state.todo.date
  )
  let formattedDate = dateNow.replace(" ", " , ")
  // const [editInput, setEditInput] = useState('');



 
  

  return (
    <>
      <ul className="list-none flex flex-col items-center py-10">
        <p style={{ color: 'white', paddingBottom: '20px', fontSize: '20px' }}>Todos for : {formattedDate} (Today)</p>
        {

          Array.isArray(todos) && todos.length > 0 ? (
            todos.map((eachTodo) => {

              return <EachTodo key={eachTodo.id} editable={eachTodo.editable} id={eachTodo.id} text={eachTodo.text} completed={eachTodo.completed} />

            })
          ) :
            <h1 className="bg-red-800 w-5/6 p-3 text-xl " style={{ color: 'white', margin: '20px' }}>No todos till now</h1>
        }


      </ul >
    </>
  )
}

export default ShowTodo
