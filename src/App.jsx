import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'
import {Provider} from 'react-redux'
import store from './redux/store'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div>
      <Grid container justify='center' style={{ marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4} >
          <Paper style={{ margin: '1rem 0', padding: '0 1rem'}}>
            <Provider store={store}>
            <h1 style={{textAlign:"center"}}>Todo List</h1>
            <AddTodo />
            <TodoList/>
            <VisibilityFilter/>
            </Provider>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
