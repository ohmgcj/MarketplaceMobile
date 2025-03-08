import { TouchableOpacity, View } from "react-native";
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface ProductCardProps {
  avatar: string;
  title: string;
  price: number;
  prodImage?: string;
  className?: string;
  isUsed?: boolean;
  isDeactivated?: boolean;
}

export function ProductCard({ avatar, title, price, prodImage, isDeactivated, className, isUsed = false }: ProductCardProps) {
  const imageAvatar = require('../../../assets/images/user1.jpg');
  return (
    <TouchableOpacity className={`w-[150px] ${className}`}>
      <View className="relative">
      {isDeactivated && (
        <View className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg z-20 flex justify-end p-2">
          <Text className="text-gray-7 font-bold text-xs">ANÚNCIO DESATIVADO</Text>
        </View>
      )}
        <HStack className="absolute top-0 left-0 right-0 p-2 z-10 flex-row justify-between">
          <Image
          source={avatar}
          alt="Imagem do usuário"
          className="w-8 h-8 rounded-full border-[1px] border-gray-7"
          />
          <Badge className={`absolute top-2 right-2 px-2 py-1 rounded-full ${isUsed ? 'bg-gray-2' : 'bg-blue'}`}>
            <Text className="font-bold text-[10px]">{isUsed ? "USADO" : "NOVO"}</Text>
          </Badge>
        </HStack>
        <Image
          source={prodImage}
          alt="Imagem do produto"
          size="none"
          className="w-full h-[100px] rounded-lg"
          resizeMode="cover"
        />
      </View>
      <View className="p-2">
        <Text className={`text-sm font-karla ${isDeactivated ? 'text-gray-4' : 'text-gray-2'}`}>{title}</Text>
        <HStack className="items-center gap-1">
          <Text className={`text-base ${isDeactivated ? 'font-karl text-gray-4' : 'font-bold text-gray-1'}`}>R$ {price.toFixed(2)}</Text>
        </HStack>
      </View>
    </TouchableOpacity>
  );
}