import { View, Text } from "react-native";
import React from "react";
import IonIcons from "@expo/vector-icons/Ionicons";

const Icon = ({ iconName, iconSize, iconColor }) => {
  return (
    <View>
      <IonIcons name={iconName} size={iconSize} color={iconColor} />
    </View>
  );
};

export default Icon;
