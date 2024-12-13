import { createSlice, nanoid } from "@reduxjs/toolkit";
const dateNow=new Date()
const initialState = {
    todos: [
        // {
        //     id: 1,
        //     text: "Hello world",
        //     completed: false,
        //     editable: false
        // }
    ],
    date:dateNow.toDateString()
}
export const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {// all the todos in initalState at present // action is used to send the vlues 
            const tempTodo = {
                id: nanoid(),
                text: action.payload,
                completed:false,
                editable:false
            } 
            state.todos.push(tempTodo)
            state.date=dateNow.toDateString();
        },
        removeTodo: (state, action) => {
            console.log(action.payload)
            let tempTodo1 = state.todos.filter((eachTodo) => {
                return eachTodo.id !== action.payload
            })
            state.todos = tempTodo1

        },
        updateTodo: (state, action) => {
            for(let i=0;i<state.todos.length;i++){
                if(state.todos[i].id===action.payload.id){
                    state.todos[i].text=action.payload.text
                }
            }
        },
        changeEditable: (state, action) => {
            for(let i=0;i<state.todos.length;i++){
                if(state.todos[i].id===action.payload){
                    console.log("ok")
                    state.todos[i].editable=!state.todos[i].editable
                }
                else{
                    state.todos[i].editable=false;//allow only one edit at a time
                }
            }
        },
        changeCompleted:(state,action)=>{
            for(let i=0;i<state.todos.length;i++){
                if(state.todos[i].id===action.payload){
                    console.log("ok")
                    state.todos[i].completed=!state.todos[i].completed
                }
                
            }
        }

    }
})

export const { addTodo, removeTodo, updateTodo,changeEditable,changeCompleted } = todoslice.actions
export default todoslice.reducer;

//learn how the state and screen is uodated? without using useState and setStte in redux