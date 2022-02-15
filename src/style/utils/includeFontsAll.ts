import fonts from "style/fonts";
// import {css} from "styled-components";

export const includeFontsAll = ():string => {
  let resultCss = [];
  for ( const font of Object.values(fonts)) {
      resultCss.push(font.weights.map(
          (fontWeight) =>
            `@font-face {
              font-family: '${font.family}';
              src: url('${font.family}-${fontWeight}.${font.format}');
              font-weight: ${parseInt(fontWeight)};
              font-style: ${ fontWeight.match('i') ? 'italic' : 'normal' };
              font-display: swap;
            }\n`
      ));
  }

  return resultCss.flat().join('\n');
}