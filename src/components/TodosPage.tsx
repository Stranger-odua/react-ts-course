import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import TodoItem from "./TodoItem";
import List from "./List";
import axios from "axios";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>(`http://jsonplaceholder.typicode.com/todos`)
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default TodosPage;
