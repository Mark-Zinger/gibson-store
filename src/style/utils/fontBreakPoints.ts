import { breakpointType } from "../breakpoints";
import { down } from "../utils";

export const fontBreakPoints = ( fBPoints: {[key in breakpointType]? : string | number} ): string => {
  let resultCss: string = '';
  for (const [ breakpoint, fontSize ] of Object.entries(fBPoints).reverse()) {
      resultCss += `${down(breakpoint as breakpointType)}{ font-size: ${ typeof fontSize === 'string'? fontSize: fontSize+'px'};}\n`;
  }

  return resultCss;
};
