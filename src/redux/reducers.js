import {ADD_TODO,TOGGLE_TODO, GET_TODO_SUCCESS, GET_TODO_FAILURE} from "./actionTypes"

const initialState = {
    todos:[
      {
          id:1,
          title: "Push latest build",
          status:false
      }
    ],
   
}

const reducer = (state=initialState,action)=>{
    const {type,payload} = action;
     switch(type){
         case ADD_TODO:{
            //  const updated=[...state.todos,payload]
             return {
                 ...state,
                 todos:[...state.todos,payload],
             }
         }
        
         case TOGGLE_TODO:{
             const toggleTodo=state.todos.map((item) =>item.id===payload?{...item,status:!item.status}:item)

             console.log(payload)
             console.log(toggleTodo)
             return {
                 ...state,
                 todos:toggleTodo
             }
         }
         case GET_TODO_SUCCESS:{
             return {
                 ...state,
                 todos:payload
             }
         }
         case GET_TODO_FAILURE:{
            return {
                ...state,
               isLoading:false,
               isError:true
            }
        }
         default: return state
     }
}

export {reducer}