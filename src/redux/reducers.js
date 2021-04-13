import {FILTER_ALL} from './actionTypes'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO,UPDATE_TODO, SET_FILTER } from './actionTypes'
import * as  _  from 'underscore'

const initialTodoState = {
    nextId: 1,
    data:
    {
        // 1: {
        //     content: 'Content 1',
        //     completed: false
        // }
    }
}

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completed: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case TOGGLE_TODO:{
            console.log(action.payload)
            return(
                {
                    ...state,
                    data:{
                        ...state.data,
                        [action.payload.id]:{
                            ...state.data[action.payload.id],
                            completed: !(state.data[action.payload.id].completed)
                        }
                    }
                }
            )
        }
        case UPDATE_TODO:{
            console.log(action.payload)
            return(
                {
                    ...state,
                    [action.payload.id] : {
                        ...state.data[action.payload.id],
                        completed: false,
                        content: action.payload.content
                    }
                }
            )
        }
        case DELETE_TODO:{
            let id=action.payload.id;
            console.log(id)
            return(
                {
                    ...state,
                    data : _.omit(state.data,id)
                }
            )
        }
        default: {
            return state
        }
    }
}


export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }
        default: {
            return state;
        }
    }
}