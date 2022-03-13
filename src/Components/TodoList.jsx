import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../redux/action';
import Todos from './Todos';
import styles from "../Styles/Navbar.module.css";
import {Link} from 'react-router-dom'


const TodoList = () => {

const dispatch =useDispatch();

  const state = useSelector((state)=>state.todos)//hook
  console.log(state)
  const handleToggle=(id)=>{
    dispatch(toggleTodo(id))  
  }

    console.log(state)
    return (
        <>
        <p>

<Link style={{color:"blue",textDecoration:"none"}} to = '/'>Back to Home</Link>
   </p> 

<p>Todays</p>


           {state.map((el)=>{
               return (
                 <div className={styles.disp} key = {el.id}>
                   <div   style={{display:"flex",width:"100%",margin:"auto"}}>
                      <input style={{marginTop:"8px",marginLeft:"30px"}} type="checkbox" onClick={()=>handleToggle(el.id)}/>
                        {el.status? <p style={{textDecoration:"line-through"}}>{el.title }</p> :  <p>{el.title }</p>}

                   </div>

                   </div>
               )
           })
           }
           <Todos/>

        </>
    );
}

export default TodoList;