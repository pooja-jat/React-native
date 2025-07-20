import { Text, TouchableOpacity, View } from "react-native";

const Button = ({ label, onClick }) => {
  return (
    <View className="bg-green-500 w-full flex items-center justify-center py-4 rounded-xl">
      <TouchableOpacity onPress={onClick}>
        <Text className="text-white font-bold">{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
