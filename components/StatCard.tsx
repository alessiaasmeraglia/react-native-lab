import { View, Text, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";

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
        minWidth: 0,
        backgroundColor: colors.surface,
        padding: spacing.lg,
        borderRadius: radius.lg,
        alignItems: "center",
        gap: spacing.xs,
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
