import { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatCard from "./components/StatCard";
import {
  colors,
  spacing,
  radius,
  typography,
} from "./theme/tokens";
import Button from "./components/Button";
import Card from "./components/Card";
import { useWindowDimensions } from "react-native";


export default function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Alex Morgan");
  const [draftName, setDraftName] = useState("Alex Morgan");
  const [nameError, setNameError] = useState("");

  const handleEdit = () => {
    setDraftName(name);
    setNameError("");
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmedName = draftName.trim();

    if (!trimmedName) {
      setNameError("Name is required.");
      return;
    }

    setName(trimmedName);
    setNameError("");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraftName(name);
    setNameError("");
    setIsEditing(false);
  };

  const { width } = useWindowDimensions();

  const isSmallScreen = width < 360;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text>
          </View>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>Frontend Developer</Text>

          <View
            style={[
              styles.statsContainer,
              isSmallScreen && styles.statsContainerSmall,
            ]}
          >
            <StatCard value={12} label="Projects" />
            <StatCard value={8} label="Skills" />
          </View>

          <Card>
            <Text style={styles.sectionTitle}>
              About me
            </Text>

            <Text style={styles.description}>
              Frontend developer passionate about
              building intuitive mobile experiences.
            </Text>
          </Card>

          {!isEditing && (
            <Button
              title="Edit profile"
              onPress={handleEdit}
            />
          )}

          {isEditing && (
            <View style={styles.form}>
              <Text style={styles.inputLabel}>
                Your name
              </Text>

              <TextInput
                style={[
                  styles.input,
                  nameError ? styles.inputError : null,
                ]}
                value={draftName}
                onChangeText={(text) => {
                  setDraftName(text);
                  setNameError("");
                }}
                placeholder="Enter your name"
                autoCapitalize="words"
                accessibilityLabel="Your name"
              />

              {nameError !== "" && (
                <Text style={styles.errorText}>
                  {nameError}
                </Text>
              )}

              <View style={styles.formActions}>
                <View style={styles.actionContainer}>
                  <Button
                    title="Cancel"
                    variant="secondary"
                    onPress={handleCancel}
                  />
                </View>

                <View style={styles.actionContainer}>
                  <Button
                    title="Save"
                    variant="primary"
                    onPress={handleSave}
                    disabled={!draftName.trim()}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: spacing.xl,
    paddingBottom: spacing.xxl,
  },


  profile: {
    alignItems: "center",
    marginTop: 48,
    gap: 8,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#E8DEFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  avatarText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#7047EB",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#23243A",
  },

  role: {
    fontSize: 15,
    color: "#77788B",
  },


  statsContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 32,
  },

  statsContainerSmall: {
    flexDirection: "column",
    alignItems: "stretch",
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    gap: 4,
  },

  statNumber: {
    fontSize: 26,
    fontWeight: "700",
    color: "#23243A",
  },

  statLabel: {
    fontSize: 14,
    color: "#77788B",
  },


  editButton: {
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.xl,
  },

  editButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  editMessage: {
    marginTop: 16,
    fontSize: 14,
    color: "#7047EB",
    textAlign: "center",
  },


  form: {
    marginTop: 16,
    gap: 8,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#23243A",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D8D8E2",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#23243A",
  },


  formActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },

  actionButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  cancelButton: {
    backgroundColor: "#E8E8EF",
  },

  saveButton: {
    backgroundColor: "#7047EB",
  },

  cancelButtonText: {
    color: "#23243A",
    fontSize: 15,
    fontWeight: "600",
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  inputError: {
    borderColor: "#D93025",
  },

  errorText: {
    fontSize: 13,
    color: "#D93025",
    marginTop: 4,
  },

  actionContainer: {
    flex: 1,
  },


  sectionTitle: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.sm,
  },

  description: {
    fontSize: typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },


  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

});
