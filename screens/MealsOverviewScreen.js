import { StyleSheet, FlatList, View } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
    // const route = useRoute();
    // const catId = route.params.categoryId;
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0; // indexOf will return value greater than 0 if it exists in the arr and -1 if it doesn't
    });

    // Only renders title after the animation is over so it might look buggy.
    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find(
    //         (category) => category.id === catId
    //     ).title;

    //     navigation.setOptions({ title: categoryTitle });
    // }, [catId, navigation]);

    // Will render title simultaneously with the animation so it will have a smooth transition
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({ title: categoryTitle });
    }, [catId, navigation]);

    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            // onPress: () => {
            //     navigation.navigate("MealDetail", { mealId: item.id });
            // },
        };
        return <MealItem {...mealItemProps} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
