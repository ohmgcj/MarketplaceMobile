import { HStack } from '@/components/ui/hstack'
import { Divider } from '@/components/ui/divider'

import { Eye, MagnifyingGlass, Sliders } from 'phosphor-react-native';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native'

interface CustomInputProps {
    placeholder?: string;
    type?: 'text' | 'password' | 'search';
}

export function CustomInput({ placeholder, type }: CustomInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(type === 'password');

    return (
        <HStack className="w-full bg-gray-7 rounded-md px-4 py-3 items-center border-gray-3"
            style={{ borderWidth: isFocused ? 1 : 0 }}>

            <TextInput
                className="flex-1 placeholder:font-karla placeholder:text-gray-4 placeholder:text-base"
                placeholder={placeholder ?? 'Digite algo'}
                secureTextEntry={type === 'password' && !showPassword}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            {type === 'password' && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Eye size={24} color="#9CA3AF" />
                </TouchableOpacity>
            )}

            {type === 'search' && (
                <HStack className="ml-2 items-center min-h-[24px]">
                    <TouchableOpacity onPress={() => { }}>
                        <MagnifyingGlass size={24} color="#9CA3AF" />
                    </TouchableOpacity>
                    <Divider orientation="vertical" className="mx-2 bg-gray-4 w-[1px] h-5" />
                    <TouchableOpacity onPress={() => { }}>
                        <Sliders size={24} color="#9CA3AF" />
                    </TouchableOpacity>
                </HStack>
            )}
        </HStack>
    );
}
