import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import RegistroScreen from './Abas/Registro';
import HistoricoScreen from './Abas/Historico';
import EstatisticasScreen from './Abas/Dicas';
import MetaScreen from './Abas/Meta';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PaginaPrincipal({ meta, registros, setRegistros,setMeta }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4A90E2',
        tabBarStyle: {
          height: 70,
        },
        headerStyle: {
          backgroundColor: '#4A90E2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Registro"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24} color={color} />
          ),
        }}>
        {() => (
          <RegistroScreen
            meta={meta}
            setMeta={setMeta}
            registros={registros}
            setRegistros={setRegistros}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Histórico"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="time" size={24} color={color} />
          ),
        }}>
        {() => <HistoricoScreen registros={registros} />}
      </Tab.Screen>
      <Tab.Screen
        name="Dicas"
        component={EstatisticasScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="bulb" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  const [meta, setMeta] = useState(0);
  const [registros, setRegistros] = useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Meta">
          {({ navigation }) => (
            <MetaScreen meta={meta} setMeta={setMeta} navigation={navigation} />
          )}
        </Stack.Screen>

        <Stack.Screen name="paginaPrincipal">
          {() => (
            <PaginaPrincipal
              meta={meta}
              setMeta={setMeta}
              registros={registros}
              setRegistros={setRegistros}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
