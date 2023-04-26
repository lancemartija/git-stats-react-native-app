import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  src: string;
  username: string;
};

const User = ({ src, username }: Props) => {
  return (
    <View className="flex flex-row items-center space-x-3 mt-8 border-b pb-4 border-gray-200">
      <Image source={{ uri: src }} className="w-10 h-10 rounded-full" />
      <Text className="text-lg text-gray-200 font-bold">{username}</Text>
    </View>
  );
};

export default User;
