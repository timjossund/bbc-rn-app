import { StyleSheet } from "react-native";

export const colors = {
  background: "#101010",
  header: "#242444",
  surface: "#ffffff",
  primary: "#ffffff",
  text: "#ffffff",
  textSecondary: "#a0a0b0",
  alert: "#ff5252",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#2e2e2e",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 35,
    marginTop: 20,
    width: "80%",
    minHeight: 100,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  fontColorLight: {
    color: "#fff",
  },
});
