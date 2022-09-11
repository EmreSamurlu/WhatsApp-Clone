import { View, Text } from "react-native";
import React from "react";

import styles from "./Header.styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>WhatsApp</Text>
    </View>
  );
};

export default Header;
