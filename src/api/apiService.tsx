import axios from 'axios'

export interface Todo {
    id: number;
    userId: number;
    title: string;
    description: string;
    completed: boolean;
}

const API_URL = "http://192.168.0.103:3000";

export const getTodos = async (): Promise<Todo[]> => {
    try {
        const response = await axios.get(`${API_URL}/user/1/todo`);
        return response.data;
    } catch (error) {
        console.error("Error to find todos: " + error);
        throw error;
    }
}

export const putTodoCompleted = async (id: number, isCompleted: boolean): Promise<void> => {
    try {

        const userData = {
            id: id,
            userId: 1,
            title: "Jogar",
            description: "Jogar xadrez",
            completed: isCompleted
        };

        await axios.put(`${API_URL}/user/1/todo/${id}`, userData, {
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer <token>' // se for necessário um token de autenticação
            }
        });

    } catch (error) {
        console.error("Erro ao atualizar todo na API:", error);
        throw error; // Propaga o erro para `updateTodo`
    }
};