import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

export default function Index() {
  return (
    <LinearGradient
      colors={["#5C4335", "#1A1A1A", "#000"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between items-center p-4">
          <Text className="text-2xl font-bold text-white">Chats</Text>
          <View className="flex-row gap-4 items-center">
            <BlurView
              intensity={40}
              tint="dark"
              style={{
                width: 38,
                height: 38,
                borderRadius: 19,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              <Ionicons name="search-outline" size={20} color="white" />
            </BlurView>

            <BlurView
              intensity={40}
              tint="dark"
              style={{
                width: 38,
                height: 38,
                borderRadius: 19,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              <Ionicons name="camera-outline" size={20} color="white" />
            </BlurView>

            <BlurView
              intensity={40}
              tint="dark"
              style={{
                width: 38,
                height: 38,
                borderRadius: 19,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              <Ionicons
                name="ellipsis-vertical-outline"
                size={20}
                color="white"
              />
            </BlurView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
