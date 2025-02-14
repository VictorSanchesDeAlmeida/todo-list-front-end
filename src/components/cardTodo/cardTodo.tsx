import { View, Text, Pressable } from "react-native";
import { CardTodoStyle } from "./cardTodoStyle";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Todo } from "../../api/apiService";
import { useTodos } from "@/src/context/todoContext";

interface CardTodoProps {
    todo: Todo
}

export const CardTodo = ({ todo }: CardTodoProps) => {

    const {updateTodo} = useTodos()

    return (
        <>
            <View style={CardTodoStyle.cardContainer}>
                <View style={CardTodoStyle.cardTitleContainer}>
                    <Text style={[CardTodoStyle.todoTitle, todo.completed ? { textDecorationLine: "line-through" } : {}]}>
                        {todo.id} - {todo.title}
                    </Text>
                    <Text style={CardTodoStyle.todoSubTitle}>
                        {todo.completed ? "Concluída" : "Pendente"}
                    </Text>
                </View>
                <View style={CardTodoStyle.todoIconsContainer}>
                    <Pressable onPress={() => console.log("Editar")}>
                        <Entypo name="pencil" size={20} color="#9395D3" />
                    </Pressable>
                    <Pressable onPress={() => console.log("Apagar")}>
                        <Feather name="trash-2" size={20} color="#9395D3" />
                    </Pressable>
                    <Pressable onPress={() => updateTodo(todo.id, !todo.completed)}>
                        <AntDesign name={todo.completed ? "closecircleo" : "checkcircleo"} size={20} color="#9395D3" />
                    </Pressable>
                </View> 
            </View>
        </>
    )
}