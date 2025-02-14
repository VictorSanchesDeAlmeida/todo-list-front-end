import React, { useContext, createContext, useEffect, useState } from "react";
import { Todo, getTodos, putTodoCompleted } from '../api/apiService'


interface TodoContextType {
    todos: Todo[];
    loading: boolean;
    fetchTodos: () => Promise<void>;
    addTodo: (newTodo: Todo) => void;
    updateTodo: (id: number, completed: boolean) => void;
}

//Criando o context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

//Criando o provider
export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTodos = async () => {
        try {

            setLoading(true);
            const data = await getTodos();
            setTodos(data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const addTodo = (newTodo: Todo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    const updateTodo = async (id: number, completed: boolean) => {
        try {

            await putTodoCompleted(id, completed);

            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, completed : completed } : todo
                )
            );

        } catch (error) {
            console.error("Erro ao atualizar o todo:", error);
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);


    return (
        <TodoContext.Provider value={{ todos, fetchTodos, loading, addTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );

}

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodos deve ser usado dentro de um TodosProvider");
    }

    return context;
}