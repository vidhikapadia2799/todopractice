import React,{useState} from 'react'
import { connect } from 'react-redux'
import * as  _  from 'underscore'
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes'
import { toggleTodo } from '../redux/actions'
import { updateTodo } from '../redux/actions'
import { deleteTodo } from '../redux/actions'
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

let val="";
const handlesubmit=value=>{
   val=value;
  console.log({"jj":val})
}

const Todo = ({ todo, id, toggleTodo, updateTodo,deleteTodo}) => {

    return(
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div>
                <Checkbox onClick={() => toggleTodo(id)} checked={todo.completed}  color="primary"/>
                <Input style={{textDecoration : todo.completed ? "line-through": "none"}}  onChange={(e)=>{handlesubmit(e.target.value);todo.content=e.target.value}}  defaultValue={todo.content}/>
            </div>
            <div>
                <IconButton aria-label="edit"  onClick={() =>updateTodo(id,val)}><EditIcon /></IconButton>
                <IconButton aria-label="delete" onClick={() =>deleteTodo(id)} ><DeleteIcon /></IconButton>
            </div>
        </div>
    )
 }

 function TodoList({ todos, toggleTodo, updateTodo, deleteTodo }) {
    return (
        _.keys(todos).map((id) => (
            <Todo key={id} id={id} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todos[id]} />
        ))
    )
}

const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { todos: state.todos.data }
    } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return ({
            todos: _.pick(state.todos.data, (todo) => todo.completed)
        })
    } else {
        return ({
            todos: _.pick(state.todos.data, (todo) => !todo.completed)
        })
    }
}

export default connect(mapState, { toggleTodo,updateTodo,deleteTodo })(TodoList);