import { TextInput, TextInputProps } from "react-native";
import { ThemedView } from "../ThemedView";
import { useState } from "react";

interface TextInputComponent extends TextInputProps {
    parentClass?: string;
    focusClass?: string;
}

export function InputTextComponent({className, placeholder, focusClass, parentClass = '', ...otherProps}: TextInputComponent)
{
    const [focus, setFocus] = useState(false);
    return (
        <ThemedView className={`mb-3 border p-3 border-gray-300 rounded-xl ${parentClass} ` + (focus ? focusClass : '')}>
            <TextInput className={"px-5 " + className} placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...otherProps}/>
        </ThemedView>
    )
}