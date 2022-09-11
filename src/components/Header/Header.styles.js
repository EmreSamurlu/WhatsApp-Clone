import { StyleSheet } from "react-native";
import { colors, spacing } from "../../styles";

export default StyleSheet.create({
  header: {
    backgroundColor: colors.tealGreen,
    height: spacing.lg * 2,
    padding: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: 24,
  },
});
