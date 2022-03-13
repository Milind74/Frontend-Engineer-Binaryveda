import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo } from '../redux/action';

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
           <h1>Todo List</h1>


           {state.map((el)=>{
               return (
                   <div key = {el.id} style={{display:"flex"}}>
                      <input style={{marginTop:"20px"}} type="checkbox" onClick={()=>handleToggle(el.id)}/>

                        {el.status? <h1 style={{textDecoration:"line-through"}}>{el.title }</h1> :  <h1>{el.title }</h1>}
                        {/* <p>{`${el.status}`}</p> */}

                        {/* <button onClick={()=>handleToggle(el.id)}>toggleTodo</button>    */}
                   </div>
               )
           })
           }
        </>
    );
}

export default TodoList;