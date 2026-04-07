import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { BaseApi } from '@shared/api/baseApi';
import { Stack } from 'expo-router'
import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <ApiProvider api = {BaseApi}>
                <Stack screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='index' />
                    <Stack.Screen name='(auth)' />
                
                </Stack>
            </ApiProvider>
        </SafeAreaProvider>
    )
}


