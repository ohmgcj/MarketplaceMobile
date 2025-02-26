import { HStack } from '@/components/ui/hstack'
import { Eye } from 'phosphor-react-native';
import { useState } from 'react';
import { TextInput, TouchableOpacity }  from 'react-native'

interface CustomInputProps {
    placeholder?: string;
    type?: 'text' | 'password';
  }

export function CustomInput({ placeholder, type }: CustomInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(type === 'password');
    return(
        <HStack className='w-full'> 
        <TextInput className={`w-full bg-gray-7 rounded-md px-4 py-3 placeholder:font-karla placeholder:text-gray-4 placeholder:text-base ${isFocused ? 'border-[1px] border-gray-3' : ''}`}
        placeholder={placeholder ? placeholder : 'Digite algo'} 
        secureTextEntry={!showPassword} 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        >
            
        </TextInput>
        { type === 'password' &&
            <TouchableOpacity className="absolute right-4 top-3" onPress={() => setShowPassword(!showPassword)}>
            <Eye size={24} color="#9CA3AF" />
            </TouchableOpacity>
        }
        </HStack>
    )
}