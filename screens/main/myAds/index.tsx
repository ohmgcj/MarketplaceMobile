import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity
} from "react-native";

import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";

import { CaretDown, Plus } from "phosphor-react-native";
import { Dropdown } from "@/components/custom/dropdown";

export default function MyAds() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = ['Todos', 'Ativos', 'Inativos'];

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => setKeyboardVisible(true));
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => setKeyboardVisible(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      className="flex-1 w-full bg-gray-6 px-12 py-16 justify-start"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FlatList
          data={[{}]} // FlatList espera um array, então passamos um item vazio só para renderizar o conteúdo
          keyExtractor={() => "content"}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <VStack className="items-start justify-start gap-8">
              {/* Header */}
              <HStack className="flex-row items-center w-full justify-center">
                <Text className="font-bold text-gray-1 text-lg">Meus anúncios</Text>
                <TouchableOpacity className="absolute right-0">
                  <Plus size={24} color="#3E3A40" />
                </TouchableOpacity>
              </HStack>

              {/* Header Frame 2 */}
              <HStack className="flex-row items-center w-full justify-between">
                <Text className="text-gray-2 text-md">9 anúncios</Text>
                <Dropdown 
                  options={options} 
                  selected={selectedOption} 
                  onSelect={setSelectedOption} 
                />
              </HStack>
            </VStack>
          )}
        />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
