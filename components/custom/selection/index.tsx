import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Check } from "phosphor-react-native";

interface SelectionProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  type?: "checkbox" | "radio";
}

export function Selection({ label, selected, onPress, type = "checkbox" }: SelectionProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center mb-2"
    >
      {/* Caixa de seleção */}
      <View
        className={`
          w-6 h-6 border-2 flex items-center justify-center 
          ${type === "radio" ? "rounded-full" : "rounded-md"}
          ${selected ? "border-blue-light" : "border-gray-4"}
          ${selected && type === "checkbox" ? "bg-blue-light" : "bg-transparent"}
        `}
      >
        {selected &&
          (type === "checkbox" ? (
            <Check size={16} color="white" />
          ) : (
            <View className="w-3 h-3 bg-blue-light rounded-full" />
          ))}
      </View>

      {/* Texto ao lado da seleção */}
      <Text className="ml-2 text-gray-3 text-base">{label}</Text>
    </TouchableOpacity>
  );
}
