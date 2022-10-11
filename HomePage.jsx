
    import { Button, Text, View,StyleSheet } from "react-native";



export const HomePage = ({ navigation }) => {

    return (
        <View>
            <Text style={{ fontSize: 30,textAlign:"center",color:"#0091ea",fontFamily:"Courier New",margin:20 }}
                            
            >Welcome to HomePage</Text>
           
            <Button 
                    title="Go To Page 1"
                    color="#69f0ae"
                onPress={() => { navigation.navigate("Page1") }}
            />
            <Button title="Open Camera"
                    color="#69f0ae"
                onPress={() => { navigation.navigate("MyCamera") }} />

            <Button title="Open Image Picker"
                    color="#69f0ae"
                onPress={() => { navigation.navigate("Img") }} />

            <Button title="Open Web Browser"
                    color="#69f0ae"
                onPress={() => { navigation.navigate("Web") }} />

            <Button title="Open Location"
                    color="#69f0ae"
                onPress={() => { navigation.navigate("Locat") }} />


        </View>
    )
}
    