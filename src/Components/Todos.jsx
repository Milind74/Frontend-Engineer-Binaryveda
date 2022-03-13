// import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid"
import { addTodo } from '../redux/action';

const Todos = () => {
const [title, setTitle] = React.useState("");

const dispatch = useDispatch(); //hook
React.useEffect(() => {

}, [])

const handleAdd=()=>{
    const payload={
        title,
        status:false,
        id:uuid()
    }

    const addTodoAction= addTodo(payload);

    dispatch(addTodoAction)
}
    return (
        <>  
           <h1>Todos</h1>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="add something.." />
            <button onClick={handleAdd}>ADD</button>
        
        </>
    );
}

export default Todos;