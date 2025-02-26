import { useState } from "react";
import { router } from "expo-router";

import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";

import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";

import { CustomInput } from '@/components/custom/input'
import { CustomButton } from '@/components/custom/button'
import { Selection } from '@/components/custom/selection'
import { TagFilter } from '@/components/custom/tagFilter'
import Toggle from '@/components/custom/toggle'
import ProductCard from "@/components/custom/card";


export default function Register() {
    const [checkSelected, setCheckSelected] = useState(false)
    const [radioSelected, setRadioSelected] = useState(false)

    return (
        <VStack className="flex-1 justify-center items-center bg-color-gray-3 gap-4 bg-gray-6 px-12">
            <TouchableOpacity 
            className="justify-center bg-gray-5 p-2 rounded-md"
            onPress={() => router.back()}
            >
                <HStack className="gap-2 p-1 items-center">
                    <ArrowLeft size={16}/>
                    <Text className="text-base text-black">
                        Voltar
                    </Text>
                </HStack>
            </TouchableOpacity>
            <Text className="text-xl font-bold text-black">TELA DE REGISTRO</Text>
            <Text className="text-lg font-bold text-black">Testando componentes</Text>
            <CustomInput/>
            <CustomButton
            type="blue"
            iconName="Plus"
            fullWidth
            onPress={() => console.log('passou aqui')}
            > 
            Button
            </CustomButton>
            <Selection 
            label="Teste" 
            selected={checkSelected} 
            onPress={() => setCheckSelected(!checkSelected)} 
            type="checkbox"
            />
            <Selection 
            label="Teste" 
            selected={radioSelected} 
            onPress={() => setRadioSelected(!radioSelected)} 
            type="radio"
            />
            <HStack className="gap-2">
            <TagFilter label="NOVO"/>
            <TagFilter label="USADO"/>
            </HStack>
            <Toggle/>
            <VStack>
            <HStack className="gap-5">
            <ProductCard/>
            <ProductCard isUsed/>
            </HStack>
            <HStack className="gap-5">
            <ProductCard isDeactivated/>
            <ProductCard isDeactivated isUsed/>
            </HStack>
            
            </VStack>
        </VStack>
    )
}