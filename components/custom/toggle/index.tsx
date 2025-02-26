import { useState } from "react";
import { View, Pressable } from "react-native";

export default function ToggleSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Pressable
      onPress={() => setIsEnabled((prev) => !prev)}
      className={`w-[50px] h-7 rounded-full flex-row items-center p-[2px] transition-all",
        ${isEnabled ? "bg-blue-light justify-end" : "bg-gray-5 justify-start"}
        `}
    >
      <View
        className={`w-6 h-6 bg-gray-7 rounded-full transition-all`}
      />
    </Pressable>
  );
}
