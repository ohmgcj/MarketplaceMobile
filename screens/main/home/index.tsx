import { useEffect, useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

import { CustomButton } from "@/components/custom/button";
import { CustomInput } from "@/components/custom/input";
import { ProductCard } from "@/components/custom/card"

import { ArrowRight, Tag } from 'phosphor-react-native';

export default function Home() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const colors = {
    gray1: '#1A181B',
    blue: '#364D9D',
    blueLight: '#647AC7',
  };

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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <VStack className="items-start justify-start gap-8">
            {/* Header Avatar */}
            <HStack className="items-center w-full justify-between">
              <HStack className="gap-[10px]">
                <Avatar>
                  <AvatarImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </Avatar>
                <VStack>
                  <Text className="text-base text-gray-1 font-karla">Boas vindas,</Text>
                  <Text className="text-base font-bold text-gray-1">Caio!</Text>
                </VStack>
              </HStack>
              <CustomButton type="black" iconName="Plus" onPress={() => { console.log('oii') }}>Criar anúncio</CustomButton>
            </HStack>
            {/* Header Anúncios */}
            <VStack className='w-full gap-4'>
              <Text className="text-md font-karla text-gray-1">Seus produtos anunciados para venda</Text>
              <HStack className="rounded-lg justify-between py-3 px-4" style={{ backgroundColor: '#6479c710' }}>
                <HStack className="flex-row items-center gap-4">
                  <Tag size={22} color={colors.blue} />
                  <VStack>
                    <Text className="text-lg font-bold text-gray-1">4</Text>
                    <Text className="text-sm text-gray-1">anúncios ativos</Text>
                  </VStack>
                </HStack>
                <TouchableOpacity className="flex-row items-center gap-2 px-2">
                  <Text className="font-bold text-md text-blue">Meus anúncios</Text>
                  <ArrowRight size={16} color={colors.blue} />
                </TouchableOpacity>
              </HStack>
            </VStack>
            {/* Items Anúncios */}
            <VStack className="gap-6">
              <Text className="text-md font-karla text-gray-1">Compre produtos variados</Text>
              <CustomInput placeholder="Buscar anúncio" type="search" />
              {/* Lista de Produtos */}
              <VStack className="gap-6">
                <HStack className="justify-between">
                  <ProductCard
                    title="Tênis vermelho"
                    price={59.90}
                    prodImage={require('../../../assets/images/tenis.png')}
                    avatar={require('../../../assets/images/user1.jpg')}
                    isUsed
                  />
                  <ProductCard
                    title="Bicicleta"
                    price={120.00}
                    prodImage={require('../../../assets/images/tenis.png')}
                    avatar={require('../../../assets/images/user2.jpg')}
                  />
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}
