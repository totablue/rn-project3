import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({
    duration,
    complexity,
    affordability,
    style,
    textStyle,
}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
            <Text style={[styles.detailItem, textStyle]}>
                {complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailItem, textStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        fontSize: 12,
        marginHorizontal: 4,
    },
});
