import { View, TouchableOpacity, Text } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { router, useSegments } from "expo-router";

interface TabButtonProps {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
  routeName: string;
}

export default function FloatingTabBar() {
  const rawSegments = useSegments();
  const segments = rawSegments as string[]; 
  const active = segments[1] ?? "index";

  const TabButton = ({ name, icon, route, routeName }: TabButtonProps) => {
    const isActive = active === routeName;
    
    return (
      <TouchableOpacity
        onPress={() => router.push(route as any)}
        className="flex-1 items-center justify-center"
      >
        <Ionicons
          name={icon}
          size={22}
          color={isActive ? "white" : "#bfbfbf"}
        />
        <Text
          className={`text-xs mt-1 ${
            isActive ? "text-white" : "text-gray-400"
          }`}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
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
        <TabButton name="Home" icon="home-outline" route="/(tabs)" routeName="index" />
        <TabButton name="Call" icon="call-outline" route="/(tabs)/call" routeName="call" />
        <TabButton name="Updates" icon="albums-outline" route="/(tabs)/updates" routeName="updates" />
        <TabButton name="Profile" icon="person-outline" route="/(tabs)/profile" routeName="profile" />
      </BlurView>
    </View>
  );
}