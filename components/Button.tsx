
import { Pressable, StyleSheet, Text } from "react-native";
import { colors, radius, spacing } from "../theme/tokens";

type ButtonProps = {
    title: string;
    variant?: "primary" | "secondary";
    onPress: () => void;
    disabled?: boolean;
};

export default function Button({
    title,
    variant = "primary",
    onPress,
    disabled = false,
}: ButtonProps) {

    const isPrimary = variant === "primary";

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            accessibilityRole="button"
            accessibilityState={{ disabled }}
            style={({ pressed }) => [
                styles.button,
                isPrimary ? styles.primary : styles.secondary,
                pressed && !disabled && styles.pressed,
                disabled && styles.disabled,
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

    pressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }],
    },

    disabled: {
        opacity: 0.4,
    },

});
