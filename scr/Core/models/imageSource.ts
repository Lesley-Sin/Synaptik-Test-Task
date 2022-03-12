import type { ImageURISource } from "react-native";

export const imageSource = (uri: string, h?: number, w?: number): ImageURISource => {
    return {
        height: h ?? 55,
        width: w ?? 55,
        uri: uri
    };
};
