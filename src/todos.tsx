import { Box, Card, CircularProgress, Container, Typography } from "@mui/material";
import NewTodo from "./components/new-todo";
import { useMemo, useState, useEffect } from "react";
import Todo from "./components/todo";

type TodoType = {
    id: number;
    title: string;
    completed: boolean;
};

function Todos() {

    const [todos, setTodos] = useState<TodoType[]>([]);
    const [loading, setLoading] = useState(false);

    const completedTodos = useMemo(
        () => todos.filter(todo => todo.completed),
        [todos]
    )

    const handleAddTodo = (todoName: string) => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now(), // unique id for local todos
                title: todoName,
                completed: false,
            },
        ]);
    }

    const handleSwitchTodo = (todoId: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            }
            return todo;
        }));
    }

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setTodos(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Container>
                {loading ?
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50%' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <>
                        <Typography variant="h1"
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            Todos App
                        </Typography>

                        {todos.map((todo, index) => (
                            <Todo key={todo.id} todo={todo} handleSwitchTodo={handleSwitchTodo} />
                        ))}


                        <NewTodo handleAddTodo={handleAddTodo} />

                        <Card sx={{ marginTop: '20px', padding: '10px' }}>
                            <Typography variant="h6">
                                Completed: {completedTodos.length}
                            </Typography>
                            <Typography>
                                {completedTodos.length} of {todos.length} todos completed
                            </Typography>
                        </Card>
                    </>
                }
            </Container>
        </>
    )
}

export default Todos;