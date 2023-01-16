import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#22d3d7" },
                headerTintColor: "#fff",
                sceneContainerStyle: { backgroundColor: "#1e293b" },
                drawerContentStyle: { backgroundColor: "#1e293b" },
                drawerInactiveTintColor: "#fff",
                drawerActiveTintColor: "#17202e",
                drawerActiveBackgroundColor: "#22d3d7",
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({ color, size }) => {
                        <Ionicons name="list" color={color} size={size} />;
                    },
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => {
                        <Ionicons name="star" color={color} size={size} />;
                    },
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: "#22d3d7" },
                            headerTintColor: "#fff",
                            contentStyle: { backgroundColor: "#1e293b" },
                        }}
                    >
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                            // options={({ route, navigation }) => {
                            //     const catId = route.params.categoryId;
                            //     return {
                            //         title: catId,
                            //     };
                            // }}
                        />
                        <Stack.Screen
                            name="MealDetail"
                            component={MealDetailScreen}
                            // options={{
                            //     headerRight: () => {
                            //         return <Button title="Tap Me!" on />;
                            //     },
                            // }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
