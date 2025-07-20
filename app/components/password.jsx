import { Image, Text, View } from "react-native";
// import Logo from "./assets/images/img1.png"
import Logo from "../../assets/images/img1.png";

const Password = () => {
  return (
    <View className="flex items-center justify-center">
      <View className="bg-gray-800 p-12 border border-green-600 border-2 rounded-2xl flex-col flex items-center justify-center py-8 ">
        <View className="bg-green-600  rounded-full">
          <Image  className="m-8"source={Logo} />
        </View>

        <Text className="text-white p-2">SMS</Text>
        <Text className="text-gray-600">+91 7848949</Text>
      </View>
    </View>
  );
};

export default Password;
