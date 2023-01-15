import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    useLayoutEffect(() => {
        const mealName = selectedMeal.title;

        navigation.setOptions({ title: mealName });
    }, [mealId, navigation]);

    const headerButtonPressedHandler = () => {
        console.log("Pressed!");
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon="star"
                        color="#fff"
                        onPress={headerButtonPressedHandler}
                    />
                );
            },
        });
    }, [navigation, headerButtonPressedHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Ingredients</Text>
                    </View>
                    {selectedMeal.ingredients.map((ingredient) => (
                        <View key={ingredient} style={styles.listItem}>
                            <Text style={styles.itemText}>{ingredient}</Text>
                        </View>
                    ))}
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>Steps</Text>
                    </View>
                    {selectedMeal.steps.map((step) => (
                        <View key={step} style={styles.listItem}>
                            <Text style={styles.itemText}>{step}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        height: 350,
        width: "100%",
    },
    title: {
        color: "#94a3b8",
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
    },
    detailText: {
        color: "#94a3b8",
    },
    subTitle: {
        color: "#f8fafc",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    subTitleContainer: {
        borderBottomColor: "#f8fafc",
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
    },
    listItem: {
        backgroundColor: "#f8fafc",
        borderRadius: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    itemText: {
        color: "#1e293bs",
        textAlign: "center",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
    },
});
