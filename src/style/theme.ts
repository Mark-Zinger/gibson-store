import colors from "./colors";
import breakpoints from "./breakpoints";
import fonts, {fontNameType} from "./fonts";
import typography from "./fontVariants";


const theme:ITheme = {
    colors,
    breakpoints,
    fonts,
    defaultFont: 'NeueMontreal',
    typography,
};


export interface ITheme {
    colors: typeof colors;
    breakpoints: typeof breakpoints;
    fonts: typeof fonts;
    defaultFont: fontNameType;
    typography: typeof typography;
}

export default theme