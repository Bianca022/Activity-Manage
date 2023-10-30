import { NavigationContainer } from "@react-navigation/native";

import StackNavigation from "./src/navigation/StackNavigation";
import SplashScreen from "./src/view/splash-screen/SplashScreen";
import Login from "./src/view/login/Login";
import Register from "./src/view/register/Register";
import PasswordRecovery from "./src/view/password-recovery/PasswordRecovery";
import Dashboard from "./src/view/dashboard/ScreenDashboard";
import Notification from "./src/view/notification/Notification";
import Task from "./src/view/task/ScreenTask";
import Config from "./src/view/Config/Config";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
