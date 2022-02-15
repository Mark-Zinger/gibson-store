const fontFormats = [ "woff", "woff2", "ttf" ] as const;
type fontFormatType = typeof fontFormats[number];


export type fontType = {
    family: string;
    weights: string[];
    format: fontFormatType;
};

export type fontNameType = keyof typeof fonts 




const fonts = {
    NeueMontreal: {
        family: 'NeueMontreal',
        weights: ['400', '500', '500i'],
        format: 'ttf'
    },
    SFProDisplay: {
        family: 'SFProDisplay',
        weights: ['400', '500'],
        format: 'ttf'
    }
};

export default fonts;
