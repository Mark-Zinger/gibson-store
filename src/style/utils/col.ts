import theme from "style/theme";

export const col = ( colValue: number ):string => `${ 100 / theme.pageColSize * colValue }vw`;
