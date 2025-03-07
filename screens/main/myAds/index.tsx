import { useEffect, useState } from "react";
import { 
  KeyboardAvoidingView, 
  Platform, 
  Keyboard,
  TouchableWithoutFeedback, 
  ScrollView
} from "react-native";

import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export default function MyAds() {;
  const [keyboardVisible, setKeyboardVisible] = useState(false);

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
      className="flex-1" 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
            <VStack className="flex-1 items-center justify-center bg-gray-5 w-full">
            <Text className="text-xl font-bold text-gray-1">TESTE 2</Text>
            </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
