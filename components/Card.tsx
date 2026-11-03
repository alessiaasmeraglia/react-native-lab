import type { ReactNode } from "react";
import {
    View,
    StyleSheet,
    type StyleProp,
    type ViewStyle,
} from "react-native"; import { colors, radius, spacing } from "../theme/tokens";

type CardProps = {
    children: ReactNode;
    variant?: "default" | "outlined";
    style?: StyleProp<ViewStyle>;
};

export default function Card({
    children,
    variant = "default",
    style,
}: CardProps) {
    return (
        <View style={[
            styles.card,
            variant === "outlined"
                ? styles.outlined
                : styles.default,
            style,
        ]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: spacing.lg,
        borderRadius: radius.lg,
    },

    default: {
        backgroundColor: colors.surface,
    },

    outlined: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: colors.border,
    },
});
