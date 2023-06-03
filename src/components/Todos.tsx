import React, {useState} from "react";
import {SuperInput} from "./SuperInput";
import {SuperButton} from "./SuperButton";
import {TodosType} from "../App";

type TodosPropsType = {
    todos: TodosType[]
    setTodos: (todos: TodosType[]) => void
    showTodosHandler: () => void
    hideTodosHandler: () => void
}

export const Todos = (props: TodosPropsType) => {

    const [title, setTitle] = useState('')

    const addTaskHandler = () => {
        let newTask: TodosType = {userId: 777, id: props.todos.length + 1, title: title, completed: false}
        props.setTodos([newTask, ...props.todos])
        setTitle('')
    }

    return (
        <div>
            <div>
                <SuperInput setTitle={setTitle} title={title}/>
                <SuperButton name={'+'} callBack={addTaskHandler}/>
            </div>
            <div>
                <button onClick={props.showTodosHandler}>Show me Todos</button>
                <button onClick={props.hideTodosHandler}>Hide Todos</button>
            </div>

            <ul>
                {props.todos.map(el => {
                    return (
                        <li key={el.id}>
                            <span> {el.id}</span>
                            <span> {el.userId}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}