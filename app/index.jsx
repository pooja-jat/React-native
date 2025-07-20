import { Text, View } from "react-native";
// import Form from "./components/form";
// import Button from "./components/button";
import Password from "./components/password"
export default function Index() {


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "20",
        backgroundColor : "black"
      }}
    >
      <Text>Basic</Text>
      {/* <Button label="Some" onClick={fn} /> */}
      {/* <Form /> */}
      <Password />
    </View>
  );
}
