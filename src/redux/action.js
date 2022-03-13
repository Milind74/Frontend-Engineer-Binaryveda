import { ADD_TODO,TOGGLE_TODO, GET_TODO_SUCCESS } from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
   return {
    type: TOGGLE_TODO,
    payload
   }
}

export const getTodoSuccess = (payload)=>{
    return {
        type: GET_TODO_SUCCESS,
        payload
    }
}

