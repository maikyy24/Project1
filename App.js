import StartUp from './pages/StartUpPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EmailV from './pages/EmailVerification';
import Confirmed from './pages/EmailConfirmed';
import Forgot from './pages/PasswordForgot';
import NewPass from './pages/NewPassword';
import PassVerified  from './pages/PassVerified';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartUp" component={StartUp} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Forgot" component={Forgot} options={{headerShown:false}} />
        <Stack.Screen name="EmailVerification" component={EmailV} options={{headerShown:false}}/>
        <Stack.Screen name="EmailConfirmed" component={Confirmed} options={{headerShown:false}} />
        <Stack.Screen name="NewPassword" component={NewPass} options={{headerShown:false}} />
        <Stack.Screen name="PassVerified" component={PassVerified} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
    /* to view Start Page change Login to StartUp*/
  );
};
{/**All TouchOpacities with just Text and no style have width of screen need to fix it to just width of inside Text */}