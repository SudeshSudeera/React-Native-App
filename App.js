import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Notifications from './screens/Notification';
import Cart from './screens/Cart';
import Bookmarks from './screens/Bookmarks';
import Orders from './screens/Orders';


export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const MainTabNavigator =()=>{
    return(
      <Tab.Navigator 
        screenOptions={({route})=>({
          tabBarIcon:({focused, color, size})=>{
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName=focused?'home':'home-outline'
                break;
              case 'Notification':
                iconName=focused?'bell':'bell-outline'
                break;
              case 'Cart':
                iconName=focused?'cart':'cart-outline'
                break;
              case 'Bookmarks':
                iconName=focused?'heart':'heart-outline'
                break;
              case 'Orders':
                iconName=focused?'inbox':'inbox-outline'
                break;
            }
            return(
              <MaterialCommunityIcons name={iconName} size={size} color={color} />
            );
          },
            tabBarActiveTinColor:'red',
            tabBarInactiveTinColor:'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name="Notification" component={Notifications} options={{headerShown: false}} />
        <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}} />
        <Tab.Screen name="Bookmarks" component={Bookmarks} options={{headerShown: false}} />
        <Tab.Screen name="Orders" component={Orders} options={{headerShown: false}} />
      </Tab.Navigator>
    )
  }
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={MainTabNavigator}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});