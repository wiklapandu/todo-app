import { InputTextComponent } from "@/components/form/InputTextComponent";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen()
{
    const router = useRouter();
    return (
        <View className="flex-1 translate-y-[25] px-4 justify-center">
            <InputTextComponent placeholder="Insert email..." focusClass="border-2 border-blue-500" />
            <InputTextComponent placeholder="Insert password..." focusClass="border-2 border-blue-500" secureTextEntry />

            <ThemedView>
                <TouchableOpacity 
                onPress={() => {
                    router.push('/home')
                }}
                className="flex bg-blue-600 rounded-xl p-3 items-center">
                    <Text className="text-xl text-white">Login</Text>
                </TouchableOpacity>
            </ThemedView>
        </View>
    );
}