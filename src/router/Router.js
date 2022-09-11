import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { Header } from "../components";
import routes from "./routes";

const Tab = createMaterialTopTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          lazy: true,
        }}>
        {routes.map((route) => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
