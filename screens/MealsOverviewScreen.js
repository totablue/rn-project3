import React, { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

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

    return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
