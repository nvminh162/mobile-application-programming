import { setAll, useAppDispatch, useAppSelector } from "@/utils/store";
import { useFetch } from "@/utils/useFetch";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function SyncScreen() {
  const [url, setUrl] = useState("");

  const { POST, GET, DELETE } = useFetch(url);
  const { workouts } = useAppSelector((state) => state.workout);
  const dispatch = useAppDispatch();

  const handlePost = async () => {
    for (const item of await GET(``)) {
      await DELETE(`/${item.id}`)
    }
    for (const workout of workouts) {
      await POST(``, workout);
    }
    alert("DONE!")
  };

  const handleGet = async () => {
    await GET(``).then(res => dispatch(setAll(res)));
    alert("DONE!")
  };

  return (
    <View className="m-10 gap-5">
      <Text className="text-center text-red-500 font-bold text-2xl my-10">
        Traning Diary
      </Text>
      <TextInput label={"URL"} value={url} onChangeText={(v) => setUrl(v)} />

      <Button onPress={handlePost} mode="contained" buttonColor="blue">
        POST
      </Button>
      <Button onPress={handleGet} mode="contained" buttonColor="green">
        GET
      </Button>
    </View>
  );
}
