import { useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import StatCard from "./components/StatCard";

export default function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Alex Morgan");
  const [draftName, setDraftName] = useState("Alex Morgan");
  return (

    <View style={styles.profile}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>AM</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>Frontend Developer</Text>

      <View style={styles.statsContainer}>
        <StatCard value={12} label="Projects" />
        <StatCard value={8} label="Skills" />
      </View>


      <Pressable
        style={styles.editButton}
        onPress={() => setIsEditing(!isEditing)}
      >
        <Text style={styles.editButtonText}>
          {isEditing ? "Cancel editing" : "Edit profile"}
        </Text>
      </Pressable>


      {isEditing && (
        <View style={styles.form}>
          <Text style={styles.inputLabel}>
            Your name
          </Text>

          <TextInput
            style={styles.input}
            value={draftName}
            onChangeText={setDraftName}
            placeholder="Enter your name"
            autoCapitalize="words"
          />
        </View>
      )}



    </View>

  );
}

const styles = StyleSheet.create({

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
    backgroundColor: "#7047EB",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
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

});
