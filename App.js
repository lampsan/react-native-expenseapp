import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import ExpensesContextProvider  from './store/expenses-context';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabComponent = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.colors.primary },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary },
      tabBarActiveTintColor:GlobalStyles.colors.white
    }}>
      <Tab.Screen name='AllExpenses' component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarIcon: ({color, size}) => {
          return <Ionicons name='calendar' color={color} size={size}/>
        }
      }} />
      <Tab.Screen name='RecentExpenses' component={RecentExpenses} options={{
        title: 'Recent',
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name='hourglass' color={color} size={size} />
        }
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary },
            headerTintColor: 'white',
          }}>
            <Stack.Screen name='ExpenseOverview' component={BottomTabComponent} options={{
              headerShown: false,
              headerRight: ({color, size}) => {
                return (
                  <Ionicons name='calendar' color={color} size={size} />
                );
              }
            }} />
            <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
              presentation:'modal'
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  )
}