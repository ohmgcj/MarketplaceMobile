import { HStack } from '@/components/ui/hstack'
import { useState } from 'react';
import { TextInput }  from 'react-native'

interface CustomInputProps {
    placeholder?: string;
    type?: 'text' | 'password';
  }

export function CustomInput({ placeholder, type }: CustomInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    return(
        <HStack className='w-full'> 
        <TextInput className={`w-full h-12 bg-gray-7 rounded-md px-4 mb-4 placeholder:font-karla placeholder:text-gray-4 placeholder:text-base ${isFocused ? 'border-[1px] border-gray-3' : ''}`}
        placeholder={placeholder ? placeholder : 'Digite algo'} 
        secureTextEntry={type === 'password'} 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        />
        </HStack>
    )
}