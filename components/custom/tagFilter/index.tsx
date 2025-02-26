import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { XCircle } from "phosphor-react-native";

export function TagFilter({ label }: { label: string }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Pressable onPress={() => setIsActive(!isActive)}>
      <View
        className={`flex-row items-center py-1.5 rounded-full gap-1.5
          ${isActive ? "bg-blue-light border-blue-light pl-4 pr-1.5" : "bg-gray-5 border-gray-5 px-4"}`}
      >
        <Text className={`text-xs font-bold ${isActive ? "text-white" : "text-gray-3"}`}>
          {label}
        </Text>

        {isActive && (
          <XCircle size={16} color="white" weight="fill" />
        )}
      </View>
    </Pressable>
  );
};
