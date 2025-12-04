import { setAll, useAppDispatch, useAppSelector } from "@/features/store";
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function SyncScreen() {
  const [urlPost, setUrlPost] = useState("");
  const [urlGet, setUrlGet] = useState("");

  const { items, studentName, total } = useAppSelector((state) => state.cart);
  const useDispatch = useAppDispatch();

  const { POST } = useFetch(urlPost);
  const { GET } = useFetch(urlGet);

  const handlePost = () => {
    if (!urlPost) {
      alert("Not POST allow empty!");
    } else
      POST(``, { items, studentName, total });
      alert("POST DONE!")
    };

    const handleGet = () => {
    if (!urlGet) {
      alert("Not GET allow empty!");
      return;
    } else {
      GET(``).then((res) => useDispatch(setAll(res)));
      alert("GET DONE!")
    }
  };

  return (
    <View className="flex-1 justify-center items-center m-10 gap-5">
      <View className="w-full gap-3">
        <Text>Gửi thông tin giỏ hàng</Text>
        <TextInput
          label={"Nhập URL API"}
          value={urlPost}
          onChangeText={(v) => setUrlPost(v)}
        />
        <Button onPress={handlePost} mode="contained">
          Post
        </Button>
      </View>
      <View className="w-full gap-3">
        <Text>Lấy thông tin giỏ hàng</Text>
        <TextInput
          label={"Nhập URL API chứa giỏ hàng"}
          value={urlGet}
          onChangeText={(v) => setUrlGet(v)}
        />
        <Button onPress={handleGet} mode="contained">
          Get
        </Button>
      </View>
    </View>
  );
}
