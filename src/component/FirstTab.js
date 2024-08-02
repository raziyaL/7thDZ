import React, {useState, useEffect} from 'react';
import {Container, TextField, Button, List, ListItem, Checkbox, ListItemText, IconButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import  {addTodo, deleteTodo, toggleTodo} from "../store/Slice";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";



function FirstTab() {



    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.tabsSlice)
    const handleAddTodos = () => {
        if(text.trim()){
            dispatch(addTodo(text))
            setText('')
        }
    }
    return (
        <Container>
            <h1>todo list</h1>
            <TextField
                label="New todo"
                variant="outlined"
                margin="normal"
                fullWidth
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddTodos}>Add todo</Button>
            <List>
                {todos.map(todo =>(
                    <ListItem key={todo.id} divider>
                        <Checkbox
                            checked={todo.completed}
                            onChange={()=>dispatch(toggleTodo(todo.id))}
                        />
                        <ListItemText primary={todo.text} style={{textDecoration: todo.completed ? "line-through" : 'none'}}/>
                        <IconButton edge="end" onClick = {() => dispatch(deleteTodo(todo.id))}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default FirstTab;