import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

type Props = {
  onSearch: Function;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUsername] = useState<string>();

  return (
    <View className="flex flex-row items-center space-x-4 mt-5 px-4">
      <TextInput
        placeholder="Enter your username here..."
        placeholderTextColor="#fff"
        onChangeText={(text: string) => setUsername(text)}
        className="border border-gray-200/40 p-2 flex-1 rounded focus:border-gray-200 text-gray-100"
      />
      <TouchableOpacity
        className="bg-cyan-600 px-4 rounded h-full flex flex-row items-center"
        onPress={() => onSearch(username)}
      >
        <Text className="text-white">Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;
