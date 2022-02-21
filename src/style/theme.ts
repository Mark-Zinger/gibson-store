import colors from "./colors";
import breakpoints from "./breakpoints";
import fonts, {fontNameType} from "./fonts";
import typography from "./fontVariants";


const theme:ITheme = {
    colors,
    breakpoints,
    fonts,
    defaultFont: 'NeueMontreal',
    pageColSize: 20,
    typography,
};


export interface ITheme {
    colors: typeof colors;
    breakpoints: typeof breakpoints;
    fonts: typeof fonts;
    defaultFont: fontNameType;
    pageColSize: number;
    typography: typeof typography;
}

export default theme