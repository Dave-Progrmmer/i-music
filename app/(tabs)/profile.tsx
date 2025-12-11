import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

export default function Profile() {
  const ProfileOption = ({ icon, title, subtitle }: { icon: keyof typeof Ionicons.glyphMap; title: string; subtitle?: string }) => (
    <View className="flex-row items-center py-4 px-4">
      <View className="w-12 h-12 rounded-full bg-white/10 items-center justify-center mr-4">
        <Ionicons name={icon} size={24} color="white" />
      </View>
      <View className="flex-1">
        <Text className="text-white text-base font-medium">{title}</Text>
        {subtitle && <Text className="text-gray-400 text-sm mt-1">{subtitle}</Text>}
      </View>
      <Ionicons name="chevron-forward" size={20} color="rgba(255,255,255,0.5)" />
    </View>
  );

  return (
    <LinearGradient
      colors={["#5C4335", "#1A1A1A", "#000"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-between items-center p-4">
          <Text className="text-2xl font-bold text-white">Profile</Text>
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
            <Ionicons name="qr-code-outline" size={20} color="white" />
          </BlurView>
        </View>

        <ScrollView className="flex-1">
          {/* Profile Header */}
          <View className="items-center py-6">
            <View className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center mb-4">
              <Text className="text-white text-4xl font-bold">U</Text>
            </View>
            <Text className="text-white text-xl font-semibold">User Name</Text>
            <Text className="text-gray-400 text-sm mt-1">Available</Text>
          </View>

          {/* Profile Options */}
          <View className="mt-4">
            <ProfileOption 
              icon="person-outline" 
              title="Account" 
              subtitle="Privacy, security, change number" 
            />
            <ProfileOption 
              icon="chatbubble-outline" 
              title="Chats" 
              subtitle="Theme, wallpapers, chat history" 
            />
            <ProfileOption 
              icon="notifications-outline" 
              title="Notifications" 
              subtitle="Message, group & call tones" 
            />
            <ProfileOption 
              icon="wifi-outline" 
              title="Storage and data" 
              subtitle="Network usage, auto-download" 
            />
            <ProfileOption 
              icon="help-circle-outline" 
              title="Help" 
              subtitle="Help center, contact us, privacy policy" 
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}