import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

function AddTodo({ addTodo }) {

    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
    const handleAdd = () => {
        setValue('')
        addTodo(value)
    }

    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <Input type="text" onChange={handleOnChange} value={value} placeholder="Add Todos" variant="outlined" />
            <Button onClick={handleAdd} variant="contained" color="primary">Add</Button>
        </div>
    )
}

export default connect(null, { addTodo })(AddTodo)
