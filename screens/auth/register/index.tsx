import { router } from "expo-router";
import { SafeAreaView } from "react-native";

import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarBadge, AvatarImage } from "@/components/ui/avatar";

import { CustomInput } from '@/components/custom/input'
import { CustomButton } from '@/components/custom/button'

import { MarketspaceRoundLogo } from "@/assets/svg/marketspaceRoundLogo";

import { PencilSimpleLine } from 'phosphor-react-native'


export default function Register() {
    return (
        <VStack className="flex-1 bg-gray-6 gap-8 justify-center px-10 pt-6">
            <VStack className="items-center gap-3">
                <MarketspaceRoundLogo />
                <VStack className="items-center gap-2">
                    <Text className="font-bold text-gray-1 text-xl">Boas vindas!</Text>
                    <Text className="font-karla text-gray-2 text-md text-center">Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
                </VStack>
            </VStack>
            <VStack className="w-full bg-color-gray-3 items-center justify-center">
                <VStack className="w-full items-center gap-6">
                    <VStack className="w-full items-center gap-4">
                        <Avatar size="xl">
                            <AvatarImage
                                source={{ uri: 'https://avatars.githubusercontent.com/u/47273082?v=4' }}
                                alt="avatar"
                                className="border-[3px] border-blue-light"
                            />
                            <AvatarBadge className="absolute bottom-0 right-0 bg-blue-light border-blue-light items-center justify-center p-4">
                                <PencilSimpleLine size={16} color="#F7F7FB" />
                            </AvatarBadge>
                        </Avatar>
                        <CustomInput placeholder="Nome" />
                        <CustomInput placeholder="E-mail" />
                        <CustomInput placeholder="Telefone" />
                        <CustomInput placeholder="Senha" type="password" />
                        <CustomInput placeholder="Confirmar senha" type="password" />
                    </VStack>
                    <CustomButton type="black" fullWidth onPress={() => router.replace('/')}>Criar</CustomButton>
                </VStack>
            </VStack>
            <VStack className="w-full items-center gap-4 pt-10">
                <Text className="text-gray-1 text-sm">
                    Já possui uma conta?
                </Text>
                <CustomButton type="gray" fullWidth onPress={() => router.replace('/')}>Ir para o login</CustomButton>
            </VStack>
        </VStack>
    )
}