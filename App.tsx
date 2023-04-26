import { SafeAreaView, ScrollView, View } from "react-native";
import SearchBox from "./components/SearchBox";
import { useState } from "react";
import User from "./components/User";
import CardList from "./components/CardList";

export type Data = {
  avatar_url: string;
  followers: string | number;
  following: string | number;
  login: string;
  public_repos: string | number;
};

export default function App() {
  const [data, setData] = useState<Data>();

  const search = async (searchTerm: string) => {
    if (searchTerm == "") return;

    try {
      const response = await fetch(
        `https://api.github.com/users/${searchTerm}`
      );
      const results = await response.json();
      setData(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <SafeAreaView className="bg-slate-800 flex-1">
      <ScrollView keyboardShouldPersistTaps="handled" className="h-screen">
        <SearchBox onSearch={search} />
        {data && (
          <View className="px-4">
            <User src={data.avatar_url} username={data.login} />
            <CardList data={data} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
