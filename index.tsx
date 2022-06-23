/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Fontisto} from "@expo/vector-icons"
import * as React from 'react';
import { ColorSchemeName, Pressable, View, color } from 'react-native';
import ChatRoomScreen from '../screens/ChatRoomScreen';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import ChatsScreen from '../screens/ChatsScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, MainTabPramList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions = {{

        headerStyle:{
          
          backgroundColor: Colors.light.tint,
          elevation: 0,

          
          },
          headerTintColor: Colors.light.background,
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
           
          }
  
        }}
      
        >
        <Stack.Screen 
        name="Root"
        component={MainTabNavigator} 
        options={{
        title: "WhatsApp",
        
        headerRight:() => (
          <View style={{flexDirection: 'row',
           width: 60,
            justifyContent: 'space-between', 
            marginRight: 10,
            headerTransparent: true,
            }}>

            <Octicons name= "search" size = {22} color = {'white'}/>
            <MaterialCommunityIcons name = "dots-vertical" size = {22} color = {'white'}/>

          </View>
        )
        }}
        />

        
      <Stack.Screen 
      name="ChatRoom"
      component={ChatRoomScreen} 
      options={({ route  })  => 
      
      ({ 
        title: route.params.name,
        headerRight: () =>
        <View style={{flexDirection: 'row',
        width: 100,
         justifyContent: 'space-between', 
         marginRight: 10,
         headerTransparent: true,
         }}> 
          <FontAwesome5 name= "video" size = {22} color = {'white'} />
          <MaterialIcons name= "call" size = {22} color = {'white'} />
          <MaterialCommunityIcons name= "dots-vertical" size = {22} color = {'white'} />

        </View>
      })} 
      />


      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="TabOne"

      tabBarOptions={{
        activeTintColor: Colors[colorScheme]. background,
        style: {
          height: 55,
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 2,
        },
        labelStyle:{
          fontWeight: 'bold',
          
        },
        showIcon: true,
      }}>
  <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({  color: string  }) => <Fontisto name= "camera" color={color} size = {18} />,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
        
        
        }}
      />
      <MainTab.Screen
        name="Status"
        component={TabThreeScreen}
        options={{
        
          
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={TabFourScreen}
        options={{
          
          
        }}
      />
      
       </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
