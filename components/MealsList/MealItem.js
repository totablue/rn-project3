import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "../MealDetails";

const MealItem = ({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    id,
    // onPress,
}) => {
    const navigation = useNavigation();

    const selectMealItemHandler = () => {
        navigation.navigate("MealDetail", { mealId: id });
    };

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 4,
        margin: 16,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    buttonPressed: {
        opacity: 0.75,
    },
    image: {
        height: 200,
        width: "100%",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
    },
});
