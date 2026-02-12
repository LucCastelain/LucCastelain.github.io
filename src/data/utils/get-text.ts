import {CH_TEXT} from "../text.ch";
import {FR_TEXT} from "../text.fr";
import {EN_TEXT} from "../text.en";

export function getText(language: string): TextData {
    let textData = EN_TEXT;

    switch (language) {
        case "fr":
            textData = FR_TEXT;
            break;
        case "ch":
            textData = CH_TEXT;
            break;
        default:
            textData = EN_TEXT;
    }

    return textData;
}

export type TextData = typeof EN_TEXT;