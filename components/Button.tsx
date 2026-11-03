
import { Pressable, StyleSheet, Text } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";

type ButtonProps = {
    title: string;
    variant?: "primary" | "secondary";
    onPress: () => void;
};

export default function Button({
    title,
    variant = "primary",
    onPress,
}: ButtonProps) {
    const isPrimary = variant === "primary";

    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            style={[
                styles.button,
                isPrimary ? styles.primary : styles.secondary,
            ]}
        >
            <Text
                style={[
                    styles.buttonText,
                    isPrimary
                        ? styles.primaryText
                        : styles.secondaryText,
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xl,
        borderRadius: radius.md,
        alignItems: "center",
        justifyContent: "center",
    },

    primary: {
        backgroundColor: colors.primary,
    },

    secondary: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: colors.primary,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "600",
    },

    primaryText: {
        color: colors.surface,
    },

    secondaryText: {
        color: colors.primary,
    },
});
