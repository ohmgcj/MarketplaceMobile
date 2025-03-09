import React, { useState } from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';

import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';

import { CaretDown } from 'phosphor-react-native'

interface DropdownProps {
    options: string[];
    selected: string | null;
    onSelect: (option: string) => void;
}

export function Dropdown({ options, selected, onSelect }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <VStack className="relative flex-row">
            <TouchableOpacity
                onPress={() => setIsOpen(!isOpen)}
                className="bg-gray-7 px-3 py-2 rounded-md border border-gray-5">
                <HStack className='gap-2'>
                    <Text className="text-gray-1 font-karl text-md">{selected === null ? 'Selecione uma opção' : selected}</Text>
                    <CaretDown size={16} color="black" />
                </HStack>
            </TouchableOpacity>

            {isOpen && (
                <VStack className="absolute z-[100] mt-2 bg-white rounded-md w-full">
                    <FlatList
                        data={options}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleSelect(item)}
                                className="p-3">
                                <Text className="text-gray-700">{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                    />
                </VStack>
            )}
        </VStack>
    );
};
