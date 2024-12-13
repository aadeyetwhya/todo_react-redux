import React,{useRef } from 'react'
import { FaPen, FaSave } from 'react-icons/fa';
import {  useDispatch } from 'react-redux'
import { removeTodo, updateTodo, changeEditable, changeCompleted } from '../features/todo/todoSlice'




function EachTodo(props) {
    const inputRef = useRef(null)
    const dispatch = useDispatch()



    const handleEditbutton = (e, id, editable) => {
        console.log(editable)
        e.preventDefault();
        dispatch(changeEditable(id));
    
        if (editable) {   //i.e. save in store
          let text = inputRef.current.value;
    
          dispatch(updateTodo({ id, text: text }))
        }
        
      }

      const handleSelect = (e, id) => {
        // e.preventDefault();
    
        dispatch(changeCompleted(id));
      }
    
  return (
   <li
    className="mt-4 flex justify-between items-center bg-zinc-800 px-3 py-2 w-3/5   rounded"

  >
    {props.editable ?
      <input type="text" className='bg-zinc-700 w-4/5 h-full rounded text-xl p-1 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' ref={inputRef} defaultValue={props.text} style={{ color: 'white' }} />
      :
      <div className='flex flex-row'><input type="checkbox" onClick={(e) => handleSelect(e,props.id)} checked={props.completed}
      />
        <div className='text-white pl-3 text-2xl' style={{ textDecoration: props.completed ? 'line-through  3px black' : 'none' }} onClick={(e) => handleSelect(e, props.id)}>
          {props.text}
        </div>
      </div>
    }
    <div>

      {props.editable ?
        <button className="mr-2 text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
          onClick={(e) => handleEditbutton(e, props.id, props.editable)}>
          <FaSave className="w-6 h-6 text-white-800 " />
        </button>
        :
        <button className="mr-2 text-white bg-yellow-400 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
          onClick={(e) => handleEditbutton(e, props.id, props.editable)} >
          <FaPen className="w-6 h-6 text-white-300 " />
        </button>}


      <button

        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
        onClick={() => dispatch(removeTodo(props.id))}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>

  </li>
  )
}

export default EachTodo
