import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";

import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";

export default function Register() {
    return (
        <VStack className="flex-1 justify-center items-center bg-color-gray-3 gap-4">
            <TouchableOpacity onPress={() => router.back()}>
                <HStack>
                    <ArrowLeft/>
                    <Text className="text-base text-black">
                        Voltar
                    </Text>
                </HStack>
            </TouchableOpacity>
            <Text className="text-xl font-bold text-black">TELA DE REGISTRO</Text>
            <Text className="text-lg font-bold text-black">Testando componentes</Text>
        </VStack>
    )
}