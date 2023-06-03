import React, {useEffect, useState} from 'react';
import './App.css';
import {Todos} from "./components/Todos";

export type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])
    //title, set title
    console.log(todos)

    const fetchRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchRequest()
    }, [])

    const showTodosHandler = () => {
        fetchRequest()
    }
    const hideTodosHandler = () => {
        setTodos([])
    }

    return (

        <div className="App">
            <Todos
                todos={todos}
                setTodos={setTodos}
                showTodosHandler={showTodosHandler}
                hideTodosHandler={hideTodosHandler}
            />
        </div>
    );
}

export default App;
