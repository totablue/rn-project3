import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
    const favoriteMealsContext = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealsContext.ids.includes(meal.id)
    );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You have no favorited meals yet!
                </Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});
