
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (

    <View style={styles.profile}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>AM</Text>
      </View>

      <Text style={styles.name}>Alex Morgan</Text>
      <Text style={styles.role}>Frontend Developer</Text>
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
});
