import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import { AppBar } from '../../components/appbar/appBar';
import { stylesHome } from './homeStyle';
import { CardTodo } from '../../components/cardTodo/cardTodo';
import { useTodos } from '@/src/context/todoContext';
import { BtnAddTodo } from '@/src/components/btnAddTodo/btnAddTodo';

export const Home = () => {

    const { todos, loading, fetchTodos } = useTodos();

    if (loading) {
        return (
            <View style={stylesHome.loadingContainer}>
                <ActivityIndicator size="large" color="#9395D3" />
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <AppBar></AppBar>
            <View style={stylesHome.homeContainer}>
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return <CardTodo todo={item} />
                    }}
                />
            </View>
            <BtnAddTodo/>
        </View>
    )
}