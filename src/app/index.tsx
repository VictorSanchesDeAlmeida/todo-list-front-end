import { View } from 'react-native'
import { Home } from '../screens/home/home'
import { TodoProvider } from '../context/todoContext'

export default function Index() {
    return (
        <>
            <TodoProvider>
                <View>
                    <Home />
                </View>
            </TodoProvider>
        </>
    )
}