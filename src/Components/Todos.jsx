// import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid"
import { addTodo } from '../redux/action';
import {Link} from 'react-router-dom'
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
         <p>

<Link style={{color:"blue",textDecoration:"none"}} to = '/'>Back to Home</Link>
   </p> 
        <div style={{marginBottom:"20px"}}>
        <input style={{marginTop:"10px",borderRadius:"8px"}} type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="add something.." />
            <button style={{borderRadius:"15px",marginLeft:"10px"}} onClick={handleAdd}>ADD</button>
        </div>
          
        </>
    );
}

export default Todos;