import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    alignItems: "center",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
