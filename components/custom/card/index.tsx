import { TouchableOpacity, View } from "react-native";
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface ProductCardProps {
  className?: string;
  isUsed?: boolean;
  isDeactivated?: boolean;
}

export default function ProductCard({ isDeactivated, className, isUsed = false }: ProductCardProps) {
  return (
    <TouchableOpacity className={`w-[150px] ${className}`}>
      <View className="relative">
      {isDeactivated && (
        <View className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg z-20 flex justify-end p-2">
          <Text className="text-gray-7 font-bold text-xs">ANÚNCIO DESATIVADO</Text>
        </View>
      )}
        <HStack className="absolute top-0 left-0 right-0 p-2 z-10 flex-row justify-between">
          <Avatar size="sm" >
            <AvatarImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}/>
          </Avatar>
          <Badge className={`absolute top-2 right-2 px-2 py-1 rounded-full ${isUsed ? 'bg-gray-2' : 'bg-blue'}`}>
            <Text className="font-bold text-[10px]">{isUsed ? "USADO" : "NOVO"}</Text>
          </Badge>
        </HStack>
        <Image
          source={require('../../../assets/images/tenis.png')}
          alt="Tênis vermelho"
          size="none"
          className="aspect-[153/100] w-full rounded-lg"
        />
      </View>
      <View className="p-2">
        <Text className={`text-sm font-karla ${isDeactivated ? 'text-gray-4' : 'text-gray-2'}`}>Tênis vermelho</Text>
        <HStack className="items-center gap-1">
          <Text className={`text-base ${isDeactivated ? 'font-karl text-gray-4' : 'font-bold text-gray-1'}`}>R$ 59,90</Text>
        </HStack>
      </View>
    </TouchableOpacity>
  );
}