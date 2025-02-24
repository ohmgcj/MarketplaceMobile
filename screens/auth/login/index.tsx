import { useEffect, useState } from "react";
import { 
  KeyboardAvoidingView, 
  Platform, 
  Keyboard,
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  ScrollView
} from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Eye } from "phosphor-react-native";
import { Input, InputField } from "@/components/ui/input";
import { MarketspaceLogo } from "@/assets/svg/marketspaceLogo";
import { MarketspaceRoundLogo } from "@/assets/svg/marketspaceRoundLogo";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
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
            {/* Logo Section */}
            <VStack className="items-center mb-20 gap-8">
              <MarketspaceRoundLogo/>
              <VStack>
                <MarketspaceLogo/>
                <Text className="text-sm text-gray-500">Seu espaço de compra e venda</Text>
              </VStack>
            </VStack>

            {/* Form Section */}
            <VStack className="w-full">
              <VStack className="gap-4">
                <Text className="text-sm text-gray-600 mb-4 text-center">Acesse sua conta</Text>

                <Input
                  className="w-full h-12 bg-gray-7 rounded-md px-4 mb-4 color-black"
                  variant={isFocused ? 'outline' : 'none'}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                >
                  <InputField
                    placeholder="E-mail"
                    className="w-full h-12"
                  />
                </Input>

                <VStack className="relative w-full mb-8">
                  <Input
                    className="w-full h-12 bg-gray-7 rounded-md px-4 mb-4 color-black"
                    variant={isFocused ? 'outline' : 'none'}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  >
                    <InputField
                      placeholder="Senha"
                      secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity className="absolute right-4 top-3" onPress={() => setShowPassword(!showPassword)}>
                      <Eye size={24} color="#9CA3AF" />
                    </TouchableOpacity>
                  </Input>
                </VStack>
              </VStack>

              <Button className="w-full h-12 bg-blue-light rounded-md items-center justify-center">
                <Text className="text-white font-semibold">Entrar</Text>
              </Button>
            </VStack>
          </VStack>

          {/* Bottom Section */}
          <VStack className="w-full my-12 px-12">
            <Text className="text-sm text-gray-600 text-center mb-4">Ainda não tem acesso?</Text>
            <Button className="w-full h-12 bg-gray-300 rounded-md items-center justify-center" 
              onPress={() => { router.navigate('/(auth)/register') }}
            >
              <Text className="text-gray-700 font-semibold">Criar uma conta</Text>
            </Button>
          </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
