import React from "react"; // Don't forget to import React
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../view/dashboard/ScreenDashboard";
import Profile from "../view/profile/ScreenProfile";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
