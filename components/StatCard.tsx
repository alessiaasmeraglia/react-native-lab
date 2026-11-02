import { View, Text, StyleSheet } from "react-native";

type StatCardProps = {
    value: number;
    label: string;
};

export default function StatCard({
    value,
    label,
}: StatCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.number}>{value}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 16,
        alignItems: "center",
        gap: 4,
    },

    number: {
        fontSize: 26,
        fontWeight: "700",
        color: "#23243A",
    },

    label: {
        fontSize: 14,
        color: "#77788B",
    },
});
