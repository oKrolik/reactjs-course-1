import { TextField, Button } from "@mui/material";
import { useState } from "react";

function NewTodo({ handleAddTodo }) {

    const [todo, setTodo] = useState('');

    return (
        <>
            <TextField
                id="outlined-basic"
                label="New Todo"
                variant="outlined"
                fullWidth
                sx={{ marginTop: '10px' }}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '10px' }}
                onClick={() => {
                    handleAddTodo(todo);
                    setTodo('');
                }}
            >
                Add Todo
            </Button>
        </>
    )
}

export default NewTodo;