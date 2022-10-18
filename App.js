import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import CadastroUsuarioScreen from './screens/CadastroUsuario';
import LoginScreen from './screens/Login';
import ListaContatosScreen from './screens/ListaContatos';
import ContatosScreen from './screens/Contatos';

// function HomeScreen() {
// return (
// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Text>Home Screen</Text>
// </View>
// );
// }

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
<Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
<Stack.Screen name="ListaContatos" component={ListaContatosScreen} options={{ headerShown: false }}/>
<Stack.Screen name="Contatos" component={ContatosScreen}/>

</Stack.Navigator>
</NavigationContainer>
);
}

export default App;