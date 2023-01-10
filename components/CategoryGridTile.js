import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
            >
                <View
                    style={[styles.innerContainer, { backgroundColor: color }]}
                >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 4,
        flex: 1,
        height: 150,
        margin: 16,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.75,
    },
    innerContainer: {
        alignItems: "center",
        borderRadius: 8,
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
