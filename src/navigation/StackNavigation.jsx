import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "../view/splash-screen/SplashScreen";
import Login from "../view/login/Login";
import PasswordRecovery from "../view/password-recovery/PasswordRecovery";
import Register from "../view/register/Register";
import Dashboard from "../view/dashboard/ScreenDashboard";
import Notification from "../view/notification/Notification";
import Config from "../view/Config/Config";
import ScreenTask from "../view/task/ScreenTask";

const Stack = createStackNavigator();
export default () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="splashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="passwordRecovery"
        component={PasswordRecovery}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={() => ({
          headerShown: true,
          headerTitle: "Notificação",
          headerTransparent: true,
          headerTitleStyle: {
            color: "#A07E2C",
          },
        })}
      />
      <Stack.Screen
        name="screenTask"
        component={ScreenTask}
        options={{
          headerShown: true,
          headerTitle: "Atividades",
          headerTransparent: true,
          headerTitleStyle: {
            color: "#A07E2C",
          },
        }}
      />
      <Stack.Screen
        name="config"
        component={Config}
        options={{
          headerShown: true,
          headerTitle: "Configurações",
          headerTransparent: true,
          headerTitleStyle: {
            color: "#A07E2C",
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
