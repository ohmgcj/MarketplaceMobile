import { TouchableOpacity, Text, View } from 'react-native'
import { ReactNode } from 'react'
import { ArrowLeft, Plus, Power, TrashSimple, WhatsappLogo } from 'phosphor-react-native'

interface ButtonProps {
    type: 'black' | 'blue' | 'gray';
    onPress: () => void;
    children: ReactNode;
    iconName?: 'ArrowLeft'| 'Plus'| 'Power'| 'Trash'| 'Whatsapp';
    fullWidth?: boolean;
}


export function CustomButton({ type, onPress, children, iconName, fullWidth }: ButtonProps) {

    const buttonColor = 
    type === 'black' 
        ? 'bg-gray-1' 
        : type === 'blue' 
        ? 'bg-blue-light' 
        : 'bg-gray-5';

    const buttonContentColor = 
    type === 'gray' 
        ? 'text-gray-2' 
        : 'text-gray-7';

    const iconColor =
        type === "gray"
          ? "#3E3A40"
          : "#F7F7FB";

    const iconMap = {
        ArrowLeft: <ArrowLeft size={16} color={iconColor} />,
        Plus: <Plus size={16} color={iconColor} />,
        Power: <Power size={16} color={iconColor} />,
        Trash: <TrashSimple size={16} color={iconColor} />,
        Whatsapp: <WhatsappLogo size={16} color={iconColor} />,
    };


    return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-center rounded-md p-3 ${buttonColor} ${fullWidth ? 'w-full' : 'auto'}`}
    >
      {iconName && (
        <View className="mr-2">
            {iconMap[iconName]}
        </View>
      )}
      <Text className={`font-bold font-karla text-sm ${buttonContentColor}`}>{children}</Text>
    </TouchableOpacity>
    )
}
