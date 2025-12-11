import { Tabs } from "expo-router";
import FloatingTabBar from "@/components/FloatingTab";

export default function TabsLayout() {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}>
        <Tabs.Screen name="index" />
      </Tabs>

      <FloatingTabBar />
    </>
  );
}
