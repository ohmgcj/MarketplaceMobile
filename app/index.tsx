import { Text } from "react-native";

import { VStack } from "@/components/ui/vstack"

export default function Index() {
  return (
    <VStack
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>Edit app/index.tsx to edit this screen.</Text>
    </VStack>
  );
}
