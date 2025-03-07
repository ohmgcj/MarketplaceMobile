import { router } from "expo-router";
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

import { CustomInput } from '@/components/custom/input'
import { CustomButton } from '@/components/custom/button'

import { MarketspaceLogo } from "@/assets/svg/marketspaceLogo";
import { MarketspaceRoundLogo } from "@/assets/svg/marketspaceRoundLogo";

export default function Login() {;
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
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: keyboardVisible ? 20 : 40 }}
          keyboardShouldPersistTaps="handled"
        >
          <VStack className="flex-1 justify-center bg-gray-6 w-full rounded-b-3xl px-12">
            <VStack className="items-center mb-20 gap-5">
              <MarketspaceRoundLogo/>
              <VStack>
                <MarketspaceLogo/>
                <Text className="text-sm text-gray-500">Seu espaço de compra e venda</Text>
              </VStack>
            </VStack>

            <VStack className="w-full gap-8">
              <VStack className="w-full gap-4">
                <Text className="text-sm text-gray-600 mb-4 text-center">Acesse sua conta</Text>
                <CustomInput placeholder="E-mail"/>
                <CustomInput placeholder="Senha" type="password"/>
              </VStack>
              <CustomButton onPress={() => { router.navigate('/(tabs)/home') }} type="blue" fullWidth >Entrar</CustomButton>
            </VStack>
          </VStack>

          <VStack className="w-full my-12 px-12">
            <Text className="text-sm text-gray-600 text-center mb-4">Ainda não tem acesso?</Text>
            <CustomButton onPress={() => { router.navigate('/(auth)/register') }} type="gray" fullWidth>Criar uma conta</CustomButton>
          </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
