import { Card, Switch, Typography } from "@mui/material";

function Todo({ todo, handleSwitchTodo }) {
    return (
        <Card sx={{ marginTop: '10px', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">{todo.title}</Typography>
            <Switch checked={todo.completed} onChange={() => handleSwitchTodo(todo.id)} />
        </Card>
    )
}

export default Todo;