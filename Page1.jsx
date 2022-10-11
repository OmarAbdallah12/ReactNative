import {View ,Text,Button ,StyleSheet} from "react-native";
import { usePreventScreenCapture } from 'expo-screen-capture';




export const Page1=({navigation})=>{
    usePreventScreenCapture();
    return(
        <View >
        <Text style={{ fontSize: 30,textAlign:"center",color:"#E66C2C",fontFamily:"Courier New",margin:20 }}>Hello We are in Page one</Text>
        <Button title="Go To second Page "
        color="#52D017"
    onPress={()=>{navigation.navigate("Page2")}}
    />
        </View>

)
}
