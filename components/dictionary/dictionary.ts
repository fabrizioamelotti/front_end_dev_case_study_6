import {DictionaryType} from "@/components/dictionary/dictionary.type";

export const dictionary = {
    label: {
        callNow: "Call now",
        callLater: "Call later",
        chatNow: "Chat now",
        charLater: "Chat later",
    },
} as const satisfies DictionaryType
// "as const satisfies DictionaryType" is to make this object readonly