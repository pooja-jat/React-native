import { TextInput, View } from "react-native";
const Form = () => {

  return (
    <View className="w-full flex items-center justify-center px-4 rounded-xl">
       <TextInput
          className="bg-gray-900 p-6 w-full rounded-xl px-4 text-white"
          placeholderTextColor={"white"}
          label=""
          placeholder="Email"
        />
    </View>
  );
};

export default Form;
