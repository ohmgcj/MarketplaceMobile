import { HStack } from "@/components/ui/hstack"
import { VStack } from "@/components/ui/vstack"
import { Text } from "@/components/ui/text" 

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
