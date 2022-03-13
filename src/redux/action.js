import { ADD_TODO,INC_COUNT,DEC_COUNT,ADD_DATA,TOGGLE_TODO, GET_TODO_SUCCESS } from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const incCounter = (payload) => {
    return {
        type: INC_COUNT,
        payload
    }
}

export const decCounter = (payload) => {
    return{
        type: DEC_COUNT,
        payload
    }
}

export const addData = (payload) => {
    return {
        type: ADD_DATA,
        payload,
    }
}
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

