
import { StatusBar } from "react-native";
import Home from "./src/screens/home";

export default function App(){
  return(
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent={true}  // permite que a barra de status fique sobreposta a aplicação
      />
      
      <Home />
    </>
  );
}
