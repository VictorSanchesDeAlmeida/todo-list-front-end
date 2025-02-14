import Entypo from '@expo/vector-icons/Entypo';
import { Pressable, StyleSheet } from 'react-native';
import { useTodos } from '@/src/context/todoContext';


export const BtnAddTodo = () => {

    const {addTodo} = useTodos();

    return (
        <Pressable style={stylesBtn.buttonPlus} onPress={() => console.log("Add todo")}>
            <Entypo name="plus" size={36} color="white" />
        </Pressable>
    )
}

const stylesBtn = StyleSheet.create({
    buttonPlus: {
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#9395D3',
        boxShadow: 'black',
        elevation: 5
    }
});