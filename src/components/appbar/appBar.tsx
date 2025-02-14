import { Appbar } from 'react-native-paper';
import { styleAppBar } from './appBarStyle';
import { StatusBar } from 'react-native'

export const AppBar = () => {

    const date = new Date()
    const day = date.getDate();

    return (
        <>
            <StatusBar translucent backgroundColor="#9395D3"  barStyle="light-content" />

            <Appbar style={styleAppBar.appBarConteiner}>
                <Appbar.Content titleStyle={styleAppBar.appBarTitle} title="TODO APP" />
                <Appbar.Content titleStyle={styleAppBar.appBarDate} title={`${day}`} />
            </Appbar>
        </>

    )
}

