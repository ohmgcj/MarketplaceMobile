import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity
} from "react-native";

import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";

import { ProductCard } from "@/components/custom/productCard";
import { Dropdown } from "@/components/custom/dropdown";

import { CaretDown, Plus } from "phosphor-react-native";

export default function MyAds() {
  const products = [
    { id: "1", title: "Tênis vermelho", price: 59.9, image: require("../../../assets/images/tenis.png"), avatar: require("../../../assets/images/user1.jpg"), isUsed: false, isDeactivated: false },
    { id: "2", title: "Bicicleta", price: 120.0, image: require("../../../assets/images/bicicleta.png"), avatar: require("../../../assets/images/user2.jpg"), isUsed: true, isDeactivated: false },
    { id: "3", title: "Bolo", price: 10.0, image: require("../../../assets/images/tenis.png"), avatar: require("../../../assets/images/user3.jpg"), isUsed: true, isDeactivated: false },
    { id: "4", title: "Mochila", price: 40.0, image: require("../../../assets/images/tenis.png"), avatar: require("../../../assets/images/user4.jpg"), isUsed: true, isDeactivated: false },
    { id: "5", title: "Samba", price: 250.0, image: require("../../../assets/images/tenis.png"), avatar: require("../../../assets/images/user1.jpg"), isUsed: true, isDeactivated: true },
  ]
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const options = ["Todos", "Ativos", "Inativos"];

  // 🔥 Aplicação do filtro corretamente
  const filteredProducts = products.filter((product) => {
    if (selectedFilter === "Todos") return true;
    if (selectedFilter === "Ativos") return !product.isDeactivated;
    if (selectedFilter === "Inativos") return product.isDeactivated;
  });

  return (
    <KeyboardAvoidingView
      className="flex-1 w-full bg-gray-6 px-12 py-16 justify-start"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FlatList
          data={[{}]}
          keyExtractor={() => "content"}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <VStack className="items-start justify-start gap-8">
              {/* Header */}
              <HStack className="flex-row items-center w-full justify-center">
                <Text className="font-bold text-gray-1 text-lg">Meus anúncios</Text>
                <TouchableOpacity className="absolute right-0">
                  <Plus size={24} color="#3E3A40" />
                </TouchableOpacity>
              </HStack>

              {/* Header Frame 2 */}
              <HStack className="flex-row items-center w-full justify-between">
                <Text className="text-gray-2 text-md">{filteredProducts.length} anúncios</Text>
                <Dropdown
                   options={options} 
                   selected={selectedFilter} 
                   onSelect={setSelectedFilter}
                />
              </HStack>
              <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <ProductCard avatar={item.avatar} title={item.title} price={item.price} prodImage={item.image} isUsed={item.isUsed} isDeactivated={item.isDeactivated} />
                )}
                className="flex-1 w-full gap-4"
              />
            </VStack>
          )}
        />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
