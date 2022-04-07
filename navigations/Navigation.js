import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Favorites from '../screens/Favorites'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/Account'
import Restaurants from '../screens/Restaurants'
import Pubs from '../screens/Pubs'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="restaurants"
                component={Restaurants}
                options={{title: "Restaurantes"}}
            />    
            <Tab.Screen
                name="pubs"
                component={Pubs}
                options={{title: "Bares"}}
            />
            <Tab.Screen
                name="favorites"
                component={Favorites}
                options={{title: "Favoritos"}}
            />   
            <Tab.Screen
                name="top-restaurants"
                component={TopRestaurants}
                options={{title: "Top - 5"}}
            />   
            <Tab.Screen
                name="search"
                component={Search}
                options={{title: "Buscar"}}
            />   
            <Tab.Screen
                name="account"
                component={Account}
                options={{title: "Cuenta"}}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
