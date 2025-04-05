import React from 'react';
import { Drawer } from 'expo-router/drawer'
import { useThemeContext } from '@/context/ThemeContext';

// child layout.
export default function ChildLayout() {
    const { theme } = useThemeContext();
    return (
        <Drawer initialRouteName='index'
            screenOptions={{
                headerTintColor: theme === 'dark' ? '#00ff00' : '#008000',
                drawerLabelStyle: {
                    color: theme === 'dark' ? '#00ff00' : '#008000'
                },
                headerStyle: {
                    backgroundColor: theme === 'dark' ? '#121212' : '#e5e5e5',
                },
            }}>
            <Drawer.Screen name="index" options={{
                drawerLabel: 'Home',
                title: 'Home',
            }} />
        </Drawer>
    );
};