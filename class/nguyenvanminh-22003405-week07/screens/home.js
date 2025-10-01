import { Text, View, Image, Pressable } from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        justifyContent: 'space-around',
        flex: 1,
        marginVertical: 20
      }}>
      <View
        style={{ padding: 20 }}>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20
          }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>

      <View>
        <View style={{padding: 50, alignItems: "center" }}>
          <Image
            source={require('../assets/b657871f5c0d8c0f67fc78f523516fd7768fec28.png')}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 250,
            }}
          />
        </View>
        <View></View>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20
          }}>
          POWER BIKE SHOP
        </Text>
      </View>

      <View>
        <Pressable style={{ alignItems: 'center' }}>
          <Text
            style={{
              textAlign: 'center',
              backgroundColor: 'red',
              paddingHorizontal: 50,
              paddingVertical: 15,
              borderRadius: 20,
              color: "white",
              fontWeight: "bold",
              fontSize: 17
            }}>
            Get started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
