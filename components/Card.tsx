
import type { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";

type CardProps = {
    children: ReactNode;
};

export default function Card({ children }: CardProps) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        padding: spacing.lg,
        borderRadius: radius.lg,
    },
});
