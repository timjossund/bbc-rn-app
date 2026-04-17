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
  postCard: {
    backgroundColor: "#2e2e2e",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    width: "90%",
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#497483",
  },
  fontColorLightBold: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  fontColorLightBoldMedium: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  homePostCard: {
    backgroundColor: "#393939",
    paddingBottom: 20,
    marginTop: 20,
    width: "90%",
    borderRadius: 10,
  },
  homePostCardHeader: {
    backgroundColor: "#497483",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
  homePostCardTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  homePostCardBody: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 20,
  },
});
