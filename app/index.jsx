import { Text, View } from "react-native";

export default function Index() {
  const fn = () => {
    console.log("aman");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "20",
      }}
    >
      <Text>Basic</Text>
    </View>
  );
}
