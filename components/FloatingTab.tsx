import { View, TouchableOpacity, Text } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { router, useSegments } from "expo-router";

interface TabButtonProps {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
}

export default function FloatingTabBar() {
const rawSegments = useSegments();
const segments = rawSegments as string[]; 
const active = segments[1] ?? "";

  const TabButton = ({ name, icon, route }: TabButtonProps) => (
    <TouchableOpacity
      onPress={() => router.push(route as any)}
      className="flex-1 items-center justify-center"
    >
      <Ionicons
        name={icon}
        size={22}
        color={active === name.toLowerCase() ? "white" : "#bfbfbf"}
      />
      <Text
        className={`text-xs mt-1 ${
          active === name.toLowerCase() ? "text-white" : "text-gray-400"
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>

      {/* Glass Tab Bar */}
      <View
        className="absolute bottom-6 left-4 right-4"
        style={{
          height: 70,
          borderRadius: 40,
          overflow: "hidden",
        }}
      >
        <BlurView
          tint="dark"
          intensity={50}
          className="flex-1 flex-row bg-white/10"
        >
          <TabButton name="Home" icon="home-outline" route="/index" />
          <TabButton name="Call" icon="call-outline" route="/call" />
          <TabButton name="Updates" icon="albums-outline" route="/updates" />
          <TabButton name="Profile" icon="person-outline" route="/profile" />
        </BlurView>
      </View>
    </>
  );
}
